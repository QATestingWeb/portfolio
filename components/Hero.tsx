"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { profile } from "@/data/site";
import { clamp, fadeWindow, onEveryFrame, prefersReducedMotion } from "@/lib/motion";
import { PauseIcon, PlayIcon, SpeakerIcon } from "./Icons";

const VIDEO_RATIO = 1432 / 1080;

/**
 * Pinned hero: the talking intro video starts as a card, grows into a large
 * cinema frame while two headline lines fade in, then the stage shrinks away.
 * Sound tries to start automatically; browsers usually block that until the
 * visitor interacts, so the first tap anywhere turns it on.
 */
export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const shadeRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const sideRef = useRef<HTMLDivElement>(null);
  const line1Ref = useRef<HTMLDivElement>(null);
  const line2Ref = useRef<HTMLDivElement>(null);
  const hintRef = useRef<HTMLDivElement>(null);

  const [playing, setPlaying] = useState(false);
  const [needTap, setNeedTap] = useState(false);

  // values the animation loop reads without re-subscribing
  const live = useRef({ playing: false, needTap: false, progress: 0, lastTime: 0, autoAt: 0 });
  live.current.playing = playing;
  live.current.needTap = needTap;

  const mute = useCallback(() => {
    const v = videoRef.current;
    if (v) v.muted = true;
    setPlaying(false);
  }, []);

  const startSound = useCallback(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = false;
    try {
      v.currentTime = 0;
    } catch {}
    live.current.lastTime = 0;
    v.play().catch(() => {
      v.muted = true;
      setPlaying(false);
    });
    setPlaying(true);
    setNeedTap(false);
  }, []);

  const toggle = () => {
    if (Date.now() - live.current.autoAt < 600) return; // the same tap already turned sound on
    if (live.current.playing) mute();
    else startSound();
  };

  // First tap/click/key anywhere turns the voice on (browser autoplay rules).
  useEffect(() => {
    const onFirst = () => {
      if (!live.current.needTap) return;
      if (live.current.progress > 0.3) {
        setNeedTap(false);
        return;
      }
      live.current.autoAt = Date.now();
      startSound();
    };
    window.addEventListener("pointerdown", onFirst);
    window.addEventListener("keydown", onFirst);
    return () => {
      window.removeEventListener("pointerdown", onFirst);
      window.removeEventListener("keydown", onFirst);
    };
  }, [startSound]);

  // Try to autoplay with sound, fall back to muted + "tap to hear" hint.
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.loop = true;
    v.muted = false;
    v.play()
      .then(() => {
        live.current.lastTime = 0;
        setPlaying(true);
      })
      .catch(() => {
        v.muted = true;
        v.play().catch(() => {});
        setNeedTap(true);
      });
  }, []);

  // Scroll-driven animation
  useEffect(() => {
    const reduce = prefersReducedMotion();
    const set = (el: HTMLElement | null, o: number, dx: number, dy: number) => {
      if (!el) return;
      el.style.opacity = o.toFixed(3);
      el.style.transform = `translate(${dx.toFixed(1)}px, ${dy.toFixed(1)}px)`;
      el.style.filter = `blur(${((1 - o) * 12).toFixed(1)}px)`;
    };

    return onEveryFrame(() => {
      const sec = sectionRef.current;
      const st = stageRef.current;
      if (!sec || !st) return;
      const r = sec.getBoundingClientRect();
      const p = clamp(-r.top / Math.max(1, r.height - st.offsetHeight));
      const L = live.current;
      L.progress += (p - L.progress) * (reduce ? 1 : 0.12);
      const q = L.progress;

      if (!reduce && glowRef.current) {
        glowRef.current.style.transform = `translateY(${(q * -120).toFixed(1)}px) scale(${(1 + q * 0.2).toFixed(3)})`;
      }

      // sound: stop after one play-through or once the visitor scrolls on
      if (L.needTap && q > 0.3) setNeedTap(false);
      const v = videoRef.current;
      if (L.playing && v) {
        if (q > 0.36 || v.currentTime < L.lastTime - 1) mute();
        L.lastTime = v.currentTime;
      }

      // video card grows from a centred card to a large cinema frame
      const card = cardRef.current;
      if (card) {
        const sw = st.clientWidth;
        const sh = st.clientHeight;
        const w0 = Math.min(sh * 0.6 * VIDEO_RATIO, sw * 0.86);
        const h0 = w0 / VIDEO_RATIO;
        const t = reduce ? (q > 0.2 ? 1 : 0) : clamp(q / 0.32);
        const e = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
        const wide = sw >= 700;
        // desktop: never grow past the video's real width so it stays sharp
        const w1 = wide ? Math.min(sw * 0.92, sh * 0.9 * VIDEO_RATIO, 1432) : sw;
        const h1 = wide ? w1 / VIDEO_RATIO : sh;
        const w = w0 + (w1 - w0) * e;
        const h = h0 + (h1 - h0) * e;
        // phones: start higher so the card clears the intro text below it
        const cy0 = wide ? 0.47 : 0.36;
        const cy = sh * cy0 + sh * (0.5 - cy0) * e;
        card.style.width = `${w.toFixed(1)}px`;
        card.style.height = `${h.toFixed(1)}px`;
        card.style.aspectRatio = "auto";
        card.style.left = `${((sw - w) / 2).toFixed(1)}px`;
        card.style.top = `${(cy - h / 2).toFixed(1)}px`;
        card.style.transform = "none";
        card.style.borderRadius = `${(wide ? 28 - 6 * e : 28 * (1 - e)).toFixed(1)}px`;
        card.style.borderColor = `rgba(255,255,255,${(wide ? 0.12 : 0.12 * (1 - e)).toFixed(3)})`;
        if (shadeRef.current) shadeRef.current.style.opacity = clamp((q - 0.28) / 0.1).toFixed(3);
      }

      const a1 = 1 - clamp((q - 0.06) / 0.12);
      set(introRef.current, a1, 0, (1 - a1) * 30);
      set(sideRef.current, a1, 0, (1 - a1) * 30);
      const a2 = fadeWindow(q, 0.38, 0.45, 0.55, 0.62);
      set(line1Ref.current, a2, -(1 - a2) * 60, 0);
      const a3 = fadeWindow(q, 0.64, 0.71, 0.8, 0.87);
      set(line2Ref.current, a3, (1 - a3) * 60, 0);
      if (hintRef.current) hintRef.current.style.opacity = String(clamp(1 - q * 12));
      if (introRef.current) introRef.current.style.pointerEvents = a1 < 0.2 ? "none" : "auto";

      // end: the stage shrinks into a rounded card
      const end = clamp((q - 0.88) / 0.12);
      st.style.transform = reduce ? "none" : `scale(${(1 - 0.08 * end).toFixed(3)})`;
      st.style.borderRadius = `${(end * 32).toFixed(1)}px`;
    });
  }, [mute]);

  return (
    <section id="home" className="hero" ref={sectionRef}>
      <div className="hero-stage" ref={stageRef}>
        <div ref={glowRef} aria-hidden="true" style={{ position: "absolute", inset: 0 }}>
          <div className="streak streak-1" />
          <div className="streak streak-2" />
          <div className="hero-halo" />
        </div>

        <div className="video-card" ref={cardRef}>
          <video
            ref={videoRef}
            src={profile.introVideo}
            poster={profile.introPoster}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-label={`Video of ${profile.name} introducing himself as a ${profile.role.toLowerCase()}`}
          />
          <div className="video-shade" ref={shadeRef} aria-hidden="true" />
        </div>
        <div className="hero-fade" aria-hidden="true" />

        <div className="hero-intro" ref={introRef}>
          <h1>
            Hi, I&apos;m {profile.name} — a {profile.role.toLowerCase()}.
          </h1>
          <div className="row">
            <a href="#works" className="btn btn-light">See my work</a>
            <a href="#contact" className="btn">Contact me</a>
          </div>
          <button type="button" className="sound-btn" onClick={toggle} aria-label={playing ? "Mute intro" : "Play my intro with sound"}>
            <span className="ico">{playing ? <PauseIcon fill="#07080D" /> : <PlayIcon width={14} height={14} fill="#07080D" />}</span>
            {playing ? "Mute" : "Hear my intro"}
          </button>
        </div>
        <div className="hero-side hide-sm" ref={sideRef}>
          Building websites and mobile apps with React, Next.js, React Native and WordPress.
        </div>

        <div className="hero-line left" ref={line1Ref}>
          <h2>
            I build fast, modern <span className="serif">websites and mobile apps.</span>
          </h2>
        </div>
        <div className="hero-line right" ref={line2Ref}>
          <h2>
            Expertise in React, Next.js, TypeScript and <span className="serif">React Native.</span>
          </h2>
        </div>

        {needTap && (
          <div className="tap-pill" aria-live="polite">
            <span className="pulse-dot"><SpeakerIcon /></span>
            Tap anywhere to hear my intro
          </div>
        )}
        <div className="scroll-hint hide-sm" ref={hintRef}>
          Scroll<span />
        </div>
      </div>
    </section>
  );
}
