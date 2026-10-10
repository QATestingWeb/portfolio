import { profile, whatsappUrl } from "@/data/site";
import { DownloadIcon, WhatsAppOutlineIcon } from "./Icons";
import SectionLabel from "./SectionLabel";

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="contact-card glow-border">
        <div className="contact-glow" aria-hidden="true" />
        <SectionLabel n="05">CONTACT</SectionLabel>
        <h2 className="h2">
          Let&apos;s work <span className="serif">together.</span>
        </h2>
        <p>Have a website or app idea? I&apos;d love to hear about it.</p>
        <div className="btn-row">
          <a href={profile.resume} download="Mughees-Khan-Resume.pdf" className="btn btn-lg">
            <DownloadIcon />
            Download CV
          </a>
          <a href={`mailto:${profile.email}`} className="btn btn-light btn-lg">{profile.email}</a>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn btn-wa btn-lg">
            <WhatsAppOutlineIcon />
            WhatsApp {profile.whatsappLabel}
          </a>
        </div>
      </div>
      <footer className="footer">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <nav aria-label="Social">
          <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">WhatsApp</a>
        </nav>
      </footer>
    </section>
  );
}
