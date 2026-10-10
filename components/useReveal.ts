"use client";

import { useEffect } from "react";

/**
 * Adds the class "in" to every element matching `selector` once it scrolls into view.
 * Elements in the same row get a small stagger via transition-delay.
 */
export function useReveal(selector: string, stagger = 0.08, rowSize = 3) {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(selector));
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          const i = els.indexOf(el);
          el.style.transitionDelay = `${((i % rowSize) * stagger).toFixed(2)}s`;
          el.classList.add("in");
          window.setTimeout(() => (el.style.transitionDelay = ""), 1400);
          io.unobserve(el);
        });
      },
      { rootMargin: "0px 0px -8% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [selector, stagger, rowSize]);
}
