export const clamp = (x: number) => Math.max(0, Math.min(1, x));

/** Fade window: rises over [a,b], holds, falls over [c,d]. */
export const fadeWindow = (p: number, a: number, b: number, c: number, d: number) =>
  p < a || p > d ? 0 : p < b ? (p - a) / (b - a) : p <= c ? 1 : 1 - (p - c) / (d - c);

export const prefersReducedMotion = () => {
  if (typeof window === "undefined") return false;
  try {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  } catch {
    return false;
  }
};

/** Runs `fn` on every animation frame while mounted. Returns a cleanup function. */
export const onEveryFrame = (fn: () => void) => {
  let id = 0;
  const loop = () => {
    fn();
    id = requestAnimationFrame(loop);
  };
  id = requestAnimationFrame(loop);
  return () => cancelAnimationFrame(id);
};
