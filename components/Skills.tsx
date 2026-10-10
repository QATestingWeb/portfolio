"use client";

import { useState, type CSSProperties } from "react";
import { skillFamilies, skills, type FamilyId } from "@/data/site";
import SectionLabel from "./SectionLabel";
import { useReveal } from "./useReveal";

const colorOf = Object.fromEntries(skillFamilies.map((f) => [f.id, f.color])) as Record<FamilyId, string>;

export default function Skills() {
  const [family, setFamily] = useState<FamilyId>("all");
  useReveal("#stack .reveal");
  useReveal("#stack .tile", 0.05, 14);

  return (
    <section id="stack" className="section skills">
      <div className="intro reveal">
        <SectionLabel n="04">SKILLS</SectionLabel>
        <h2 className="h2">
          The periodic table <span className="serif">of my stack.</span>
        </h2>
        <p>Tap a family to light it up.</p>
      </div>

      <div className="filters" role="group" aria-label="Filter skills">
        {skillFamilies.map((f) => (
          <button
            key={f.id}
            type="button"
            className="filter"
            aria-pressed={family === f.id}
            style={{ "--c": f.id === "all" ? "rgba(255,255,255,.5)" : f.color } as CSSProperties}
            onClick={() => setFamily(f.id)}
          >
            <i style={{ background: f.color }} />
            {f.label}
          </button>
        ))}
      </div>

      <div className="tiles">
        {skills.map((s, i) => {
          const lit = family === "all" || family === s.fam;
          return (
            <div key={s.name} className={`tile${lit ? "" : " dim"}`} style={{ "--c": colorOf[s.fam] } as CSSProperties}>
              <div className="tile-top">
                <span>{i + 1}</span>
                <span>{s.tag}</span>
              </div>
              <div className="tile-sym">{s.sym}</div>
              <div className="tile-name">{s.name}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
