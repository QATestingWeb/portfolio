"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { projects } from "@/data/site";
import { clamp, onEveryFrame } from "@/lib/motion";
import { AppleIcon, ArrowUpRightIcon, PlayIcon } from "./Icons";
import SectionLabel from "./SectionLabel";

const STRIP = 52;
const GAP = 10;
const PER_PROJECT = 520; // scroll distance per project, in px

const pad = (n: number) => String(n).padStart(2, "0");

/**
 * Pinned accordion: the section sticks while you scroll and opens one project at a time.
 * On screens under 900px it becomes a plain stacked list.
 */
export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const rowRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [stacked, setStacked] = useState(false);
  const [compact, setCompact] = useState(false);
  const activeRef = useRef(0);

  useEffect(() => {
    let lastW = -1;
    return onEveryFrame(() => {
      const isStacked = window.innerWidth < 900;
      setStacked((prev) => (prev === isStacked ? prev : isStacked));
      const row = rowRef.current;
      const sec = sectionRef.current;
      const st = stageRef.current;
      if (!row || !sec || !st || isStacked) return;

      const openW = Math.max(320, row.clientWidth - (projects.length - 1) * (STRIP + GAP));
      if (openW !== lastW) {
        row.style.setProperty("--openw", `${openW}px`);
        lastW = openW;
      }
      const isCompact = row.clientHeight < 480;
      setCompact((prev) => (prev === isCompact ? prev : isCompact));

      const r = sec.getBoundingClientRect();
      const p = clamp(-r.top / Math.max(1, r.height - st.offsetHeight));
      const next = Math.min(projects.length - 1, Math.floor(p * projects.length));
      if (next !== activeRef.current) {
        activeRef.current = next;
        setActive(next);
      }
    });
  }, []);

  // Stacked list (phones): each card animates in as it scrolls into view.
  // Uses a data attribute because React rewrites className on these elements.
  useEffect(() => {
    const sec = sectionRef.current;
    if (!sec) return;
    const els = Array.from(sec.querySelectorAll<HTMLElement>(".works-head, .acc"));
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => (el.dataset.in = "1"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          (entry.target as HTMLElement).dataset.in = "1";
          io.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -14% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const goTo = (i: number) => {
    const sec = sectionRef.current;
    const st = stageRef.current;
    if (!sec || !st || stacked) return;
    const r = sec.getBoundingClientRect();
    const span = r.height - st.offsetHeight;
    window.scrollBy({ top: r.top + ((i + 0.5) / projects.length) * span, behavior: "smooth" });
  };

  return (
    <section
      id="works"
      className="works"
      ref={sectionRef}
      style={{ height: stacked ? "auto" : `${projects.length * PER_PROJECT + 920}px` }}
    >
      <div className="works-stage" ref={stageRef}>
        <div className="works-head">
          <div>
            <SectionLabel n="02">SELECTED WORK</SectionLabel>
            <h2 className="h2">
              Things I&apos;ve <span className="serif">built.</span>
            </h2>
          </div>
          {!stacked && (
            <div className="progress" aria-hidden="true">
              <b>{pad(active + 1)}</b>
              <span className="track">
                <span className="bar" style={{ width: `${((active + 1) / projects.length) * 100}%` }} />
              </span>
              <span>{pad(projects.length)}</span>
            </div>
          )}
        </div>

        <div className={`acc-row${compact ? " compact" : ""}`} ref={rowRef}>
          {projects.map((p, i) => {
            const open = stacked || i === active;
            const vars = { "--c": p.color, "--glow": `${p.color}33`, "--dot": p.color } as CSSProperties;
            return (
              <article key={p.title} className={`acc${open ? " open" : ""}`} style={vars}>
                <button type="button" className="strip" onClick={() => goTo(i)} aria-label={`Show ${p.title}`} tabIndex={open ? -1 : 0}>
                  <span className="num">{pad(i + 1)}</span>
                  <span className="name">{p.title}</span>
                  <span className="dot" />
                </button>

                <div className="acc-full" aria-hidden={!open}>
                  <div className="acc-info">
                    <div className="acc-cat">
                      <b>{pad(i + 1)}</b> &nbsp;/&nbsp; {p.category}
                      {p.status && <span className="acc-status">{p.status}</span>}
                    </div>
                    <h3 className="acc-title">{p.title}</h3>
                    <p className="acc-desc">{p.description}</p>
                    <ul className="bullets">
                      {p.points.map((pt) => (
                        <li key={pt}>{pt}</li>
                      ))}
                    </ul>
                    <div className="chips">
                      {p.tags.map((t) => (
                        <span className="chip" key={t}>{t}</span>
                      ))}
                    </div>
                    <div className="acc-actions">
                      {p.website && (
                        <a href={p.website} target="_blank" rel="noopener noreferrer" className="btn btn-light btn-sm" tabIndex={open ? 0 : -1}>
                          {p.websiteLabel ?? "Visit website"} <ArrowUpRightIcon />
                        </a>
                      )}
                      {p.appStore && (
                        <a href={p.appStore} target="_blank" rel="noopener noreferrer" className="btn btn-light btn-sm" tabIndex={open ? 0 : -1}>
                          <AppleIcon /> App Store
                        </a>
                      )}
                      {p.playStore && (
                        <a href={p.playStore} target="_blank" rel="noopener noreferrer" className="btn btn-sm" tabIndex={open ? 0 : -1}>
                          <PlayIcon /> Google Play
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="acc-shot">
                    {p.website ? (
                      <div className="browser">
                        <div className="browser-bar">
                          <i /><i /><i />
                          <span>{p.domain}</span>
                        </div>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={p.image} alt={`${p.title} screenshot`} loading="lazy" />
                      </div>
                    ) : (
                      <div className="phone">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={p.image} alt={`${p.title} screenshot`} loading="lazy" />
                      </div>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
