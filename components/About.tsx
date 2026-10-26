"use client";

import Image from "next/image";
import { profile } from "@/data/site";
import { DownloadIcon } from "./Icons";
import SectionLabel from "./SectionLabel";
import { useReveal } from "./useReveal";

const stats = [
  { value: "3+", label: "Years experience" },
  { value: "9", label: "Live projects" },
  { value: "3", label: "Apps on both stores" },
];

export default function About() {
  useReveal("#about .reveal");

  return (
    <section id="about" className="section about">
      <div className="about-copy reveal">
        <SectionLabel n="01">ABOUT</SectionLabel>
        <h2>
          Hi, I&apos;m <span className="serif">{profile.firstName}.</span>
        </h2>
        <p>
          Software engineer with <strong>3+ years of experience</strong>, specializing in frontend. I build fast, responsive web and
          mobile apps with React, Next.js and React Native, and I&apos;ve shipped production websites for Crown Group&apos;s brands and
          cross-platform apps live on Google Play and the App Store. Frontend is my specialty, but I don&apos;t stop at the UI: I work
          across the stack on APIs, backend, cloud and AI features, and pick up whatever a product needs to ship.
        </p>
        <div className="stats">
          {stats.map((s) => (
            <div className="stat" key={s.label}>
              <b>{s.value}</b>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
        <div className="btn-row">
          <a href={profile.resume} download="Mughees-Khan-Resume.pdf" className="btn btn-light">
            <DownloadIcon />
            Download CV
          </a>
          <a href={`mailto:${profile.email}`} className="btn">Let&apos;s talk</a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="btn">GitHub</a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="btn">LinkedIn</a>
        </div>
      </div>

      {/* Hanging developer ID badge */}
      <div className="badge-wrap">
        <div className="badge-swing">
          <div className="lanyard" aria-hidden="true" />
          <div className="clip" aria-hidden="true" />
          <div className="hook" aria-hidden="true" />
          <div className="badge">
            <div className="badge-slot" aria-hidden="true" />
            <div className="badge-head">
              <div className="who">
                <span className="badge-logo">{profile.initials}</span>
                DEVELOPER ID
              </div>
              <span className="badge-active">ACTIVE</span>
            </div>
            <div className="badge-photo">
              <Image src={profile.badgePhoto} alt={profile.name} width={1432} height={1098} sizes="320px" />
            </div>
            <div>
              <div className="badge-name">{profile.name.toUpperCase()}</div>
              <div className="badge-sub">
                {profile.role} · {profile.company}
              </div>
            </div>
            <dl className="badge-meta">
              <div>
                <dt>EXPERIENCE</dt>
                <dd>3+ years</dd>
              </div>
              <div>
                <dt>SPECIALTY</dt>
                <dd>{profile.specialty}</dd>
              </div>
            </dl>
            <div className="barcode" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
}
