import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;

const stroke = (props: P) => ({
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  ...props,
});

export const HomeIcon = (p: P) => (
  <svg {...stroke(p)}><path d="M3 10.5 12 3l9 7.5" /><path d="M5 9.5V21h14V9.5" /></svg>
);
export const UserIcon = (p: P) => (
  <svg {...stroke(p)}><circle cx="12" cy="8" r="4" /><path d="M4 21c0-4 4-6 8-6s8 2 8 6" /></svg>
);
export const GridIcon = (p: P) => (
  <svg {...stroke(p)}>
    <rect x="3" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="3" width="7" height="7" rx="1.5" />
    <rect x="3" y="14" width="7" height="7" rx="1.5" /><rect x="14" y="14" width="7" height="7" rx="1.5" />
  </svg>
);
export const BriefcaseIcon = (p: P) => (
  <svg {...stroke(p)}><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" /><path d="M3 13h18" /></svg>
);
export const CodeIcon = (p: P) => (
  <svg {...stroke(p)}><polyline points="8 6 2 12 8 18" /><polyline points="16 6 22 12 16 18" /></svg>
);
export const GitHubIcon = (p: P) => (
  <svg {...stroke(p)}>
    <path d="M9 19c-4 1.4-4-2-6-2.5m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />
  </svg>
);
export const LinkedInIcon = (p: P) => (
  <svg {...stroke(p)}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
);
export const MailIcon = (p: P) => (
  <svg {...stroke(p)}><rect x="3" y="5" width="18" height="14" rx="2" /><polyline points="3 7 12 13 21 7" /></svg>
);
export const DownloadIcon = (p: P) => (
  <svg {...stroke({ width: 15, height: 15, strokeWidth: 2, ...p })}><path d="M12 4v11" /><path d="m7 10 5 5 5-5" /><path d="M5 20h14" /></svg>
);
export const ArrowUpRightIcon = (p: P) => (
  <svg {...stroke({ width: 14, height: 14, strokeWidth: 2, ...p })}><path d="M7 17 17 7" /><path d="M8 7h9v9" /></svg>
);
export const WhatsAppOutlineIcon = (p: P) => (
  <svg {...stroke({ width: 18, height: 18, ...p })}>
    <path d="M3.5 20.5l1.3-4.2A8.5 8.5 0 1 1 8 19.4z" /><path d="M9 8.5c0 3.5 3 6.5 6.5 6.5l1-1.6-2-1-1 .9a5 5 0 0 1-2.8-2.8l.9-1-1-2z" />
  </svg>
);
export const WhatsAppLogo = (p: P) => (
  <svg width="30" height="30" viewBox="0 0 32 32" aria-hidden="true" {...p}>
    <path fill="#fff" d="M16 3C8.8 3 3 8.7 3 15.8c0 2.5.7 4.9 2 6.9L3 29l6.5-2a13.2 13.2 0 0 0 6.5 1.7c7.2 0 13-5.7 13-12.8S23.2 3 16 3zm0 23.4c-2.1 0-4.1-.6-5.8-1.6l-.4-.2-3.9 1.2 1.3-3.7-.3-.4a10.4 10.4 0 0 1-1.6-5.8C5.3 10 10.1 5.3 16 5.3S26.7 10 26.7 15.8 21.9 26.4 16 26.4z" />
    <path fill="#fff" d="M21.9 18.6c-.3-.2-1.9-.9-2.2-1-.3-.1-.5-.2-.7.2-.2.3-.8 1-1 1.2-.2.2-.4.2-.7.1-.3-.2-1.4-.5-2.6-1.6-1-.9-1.6-1.9-1.8-2.2-.2-.3 0-.5.1-.7l.5-.6c.2-.2.2-.3.3-.6.1-.2 0-.4 0-.6l-1-2.4c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.1-1.2 2.8s1.2 3.2 1.4 3.4c.2.2 2.4 3.6 5.8 5 2.8 1.1 3.4.9 4 .8.6-.1 1.9-.8 2.2-1.5.3-.7.3-1.4.2-1.5-.1-.2-.3-.3-.6-.5z" />
  </svg>
);
export const AppleIcon = (p: P) => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}>
    <path d="M16.4 12.6c0-2.4 2-3.6 2.1-3.7-1.1-1.7-2.9-1.9-3.5-1.9-1.5-.2-2.9.9-3.7.9-.8 0-1.9-.9-3.2-.8-1.6 0-3.1 1-4 2.4-1.7 3-.4 7.4 1.2 9.8.8 1.2 1.8 2.5 3 2.4 1.2 0 1.7-.8 3.1-.8 1.5 0 1.9.8 3.2.8 1.3 0 2.2-1.2 3-2.4.9-1.4 1.3-2.7 1.3-2.8-.1 0-2.5-1-2.5-3.9zM14 5.4c.7-.8 1.1-1.9 1-3-.9 0-2.1.6-2.8 1.4-.6.7-1.2 1.8-1 2.9 1.1.1 2.1-.6 2.8-1.3z" />
  </svg>
);
export const PlayIcon = (p: P) => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}><polygon points="5 3 20 12 5 21 5 3" /></svg>
);
export const PauseIcon = (p: P) => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}><rect x="5" y="4" width="5" height="16" rx="1" /><rect x="14" y="4" width="5" height="16" rx="1" /></svg>
);
export const SpeakerIcon = (p: P) => (
  <svg {...stroke({ width: 14, height: 14, strokeWidth: 2.4, stroke: "#07080D", ...p })}>
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" /><path d="M15.5 8.5a5 5 0 0 1 0 7" />
  </svg>
);
