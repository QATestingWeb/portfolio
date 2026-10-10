"use client";

import { useEffect, useRef, type CSSProperties } from "react";
import { certifications, education, experience } from "@/data/site";
import { clamp, onEveryFrame } from "@/lib/motion";
import SectionLabel from "./SectionLabel";
import { useReveal } from "./useReveal";

const color = (c: string) => ({ "--c": c, "--dot": c }) as CSSProperties;

export default function Experience() {
  const listRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);
  useReveal("#experience .reveal");
  useReveal("#experience .tl", 0, 1);

  // The glowing line fills in as you scroll down the timeline
  useEffect(
    () =>
      onEveryFrame(() => {
        const list = listRef.current;
        const fill = fillRef.current;
        if (!list || !fill) return;
        const r = list.getBoundingClientRect();
        const p = clamp((window.innerHeight * 0.6 - r.top) / Math.max(1, r.height));
        fill.style.height = `calc((100% - 16px) * ${p.toFixed(4)})`;
      }),
    [],
  );

  return (
    <section id="experience" className="section experience">
      <div className="experience-inner">
        <div className="reveal" style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <SectionLabel n="03">EXPERIENCE</SectionLabel>
          <h2 className="h2">
            Experience &amp; <span className="serif">education.</span>
          </h2>
        </div>

        <div className="timeline" ref={listRef}>
          <div className="tl-track" aria-hidden="true" />
          <div className="tl-fill" ref={fillRef} aria-hidden="true" />

          {experience.map((job) => (
            <div className="tl" key={job.role + job.org} style={color(job.color)}>
              <span className="tl-dot" aria-hidden="true" />
              <article className="card">
                <div className="job-when">
                  <span>{job.when}</span>
                  {job.current && <span className="current">Current</span>}
                </div>
                <div>
                  <h3 className="job-role">{job.role}</h3>
                  <div className="job-org">{job.org}</div>
                </div>
                <p className="job-text">{job.text}</p>
                {job.points.length > 0 && (
                  <ul className="bullets">
                    {job.points.map((pt) => (
                      <li key={pt.text}>
                        <span>
                          {pt.lead && <b>{pt.lead} </b>}
                          {pt.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
                <div className="chips">
                  {job.tags.map((t) => (
                    <span className="chip" key={t}>{t}</span>
                  ))}
                </div>
              </article>
            </div>
          ))}

          <div className="tl" style={color("#E11D8A")}>
            <span className="tl-dot" aria-hidden="true" />
            <div className="edu-grid">
              <article className="card">
                <span className="mono" style={{ fontSize: 12, letterSpacing: ".14em", color: "#E11D8A" }}>
                  {education.when} · EDUCATION
                </span>
                <h3>{education.degree}</h3>
                <div className="job-org">{education.school}</div>
              </article>
              <article className="card">
                <span className="mono" style={{ fontSize: 12, letterSpacing: ".14em", color: "#F2C94C" }}>CERTIFICATIONS</span>
                {certifications.map((c) => (
                  <div key={c.name}>
                    <div className="cert-name">{c.name}</div>
                    <div className="job-org" style={{ fontSize: 14 }}>{c.from}</div>
                  </div>
                ))}
              </article>
            </div>
          </div>

          <div className="tl">
            <span className="tl-dot next" aria-hidden="true" />
            <a href="#contact" className="next-card glow-border">
              <div>
                <span className="mono" style={{ fontSize: 12, letterSpacing: ".14em", color: "var(--muted)" }}>NEXT</span>
                <div className="big">
                  Your <span className="serif">team?</span>
                </div>
              </div>
              <span className="btn btn-light">Let&apos;s talk →</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
