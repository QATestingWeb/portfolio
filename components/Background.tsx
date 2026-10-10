"use client";

import { useEffect, useRef } from "react";
import { cameraShots } from "@/data/site";
import { clamp, onEveryFrame, prefersReducedMotion } from "@/lib/motion";

/**
 * Fixed 3D background: stars, aurora lights, moving grid floor and the
 * "main character" camera that zooms through your poses section by section.
 */
export default function Background() {
  const charRef = useRef<HTMLDivElement>(null);
  const poseRefs = useRef<(HTMLImageElement | null)[]>([]);

  useEffect(() => {
    const reduce = prefersReducedMotion();
    const sections = cameraShots.map((s) => document.getElementById(s.section));
    const hero = document.getElementById("home");
    let cam: { s: number; x: number; y: number; b: number; bl: number } | null = null;
    let shown = -1;

    return onEveryFrame(() => {
      const chr = charRef.current;
      if (!chr || !hero) return;
      const vh = window.innerHeight || 800;
      const vw = window.innerWidth || 1440;
      chr.style.opacity = clamp((vh - hero.getBoundingClientRect().bottom) / (vh * 0.8)).toFixed(3);

      // where are we between section shots (0 … n-1, fractional)
      const tops = sections.map((el) => (el ? el.getBoundingClientRect().top : 1e9));
      let f = 0;
      for (let i = 0; i < tops.length; i++) {
        const next = i + 1 < tops.length ? tops[i + 1] : tops[i] + vh;
        if (tops[i] < vh * 0.55) f = i + clamp((vh * 0.55 - tops[i]) / Math.max(1, next - tops[i]));
      }
      f = Math.min(f, tops.length - 1);

      const i0 = Math.floor(f);
      const i1 = Math.min(cameraShots.length - 1, i0 + 1);
      const u0 = f - i0;
      const u = u0 * u0 * (3 - 2 * u0);
      const A = cameraShots[i0];
      const B = cameraShots[i1];
      const mix = (a: number, b: number) => a + (b - a) * u;
      // phones: text sits right on top of the character, so keep it dimmer and softer
      const phone = vw < 700;
      const target = {
        s: mix(A.scale, B.scale),
        x: mix(A.x, B.x) * (phone ? 0.25 : 1),
        y: mix(A.y, B.y),
        b: mix(A.brightness, B.brightness) * (phone ? 0.75 : 1),
        bl: mix(A.blur, B.blur) + (phone ? 2 : 0),
      };
      if (!cam) cam = { ...target };
      const k = reduce ? 1 : 0.1;
      (Object.keys(target) as (keyof typeof target)[]).forEach((key) => {
        cam![key] += (target[key] - cam![key]) * k;
      });

      const filter = `brightness(${cam.b.toFixed(3)}) contrast(1.15) saturate(1.1)${cam.bl > 0.3 ? ` blur(${cam.bl.toFixed(1)}px)` : ""}`;
      const idx = Math.round(f);
      poseRefs.current.forEach((img, i) => {
        if (!img) return;
        const oy = cameraShots[i].originY;
        img.style.transform = `translate(calc(-50% + ${(cam!.x * vw).toFixed(1)}px), calc(-${oy}% + ${(cam!.y * vh).toFixed(1)}px)) scale(${cam!.s.toFixed(4)})`;
        img.style.filter = filter;
        if (idx !== shown) img.style.opacity = i === idx ? "1" : "0";
      });
      shown = idx;
    });
  }, []);

  return (
    <div className="bg" aria-hidden="true">
      <div className="stars" />
      <div className="aur a1" />
      <div className="aur a2" />
      <div className="aur a3" />
      <div className="grid3d" />
      <div className="character" ref={charRef}>
        <div className="char-glow-red" />
        <div className="char-glow-blue" />
        {cameraShots.map((shot, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={shot.section}
            ref={(el) => {
              poseRefs.current[i] = el;
            }}
            className="pose"
            src={shot.pose}
            alt=""
            style={{ transformOrigin: `50% ${shot.originY}%`, opacity: i === 0 ? 1 : 0 }}
          />
        ))}
        <div className="char-tint" />
        <div className="char-vignette" />
      </div>
    </div>
  );
}
