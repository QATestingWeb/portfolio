import { profile, whatsappUrl } from "@/data/site";
import { BriefcaseIcon, CodeIcon, GitHubIcon, GridIcon, HomeIcon, LinkedInIcon, MailIcon, UserIcon, WhatsAppLogo } from "./Icons";

export default function Dock() {
  return (
    <>
      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="wa-fab" aria-label={`Chat with ${profile.firstName} on WhatsApp`}>
        <span className="wa-ring" aria-hidden="true" />
        <WhatsAppLogo />
        <span className="wa-tip">Chat on WhatsApp</span>
      </a>

      <nav className="dock" aria-label="Sections">
        <a href="#home" aria-label="Home"><HomeIcon /></a>
        <a href="#about" aria-label="About"><UserIcon /></a>
        <a href="#works" aria-label="Work"><GridIcon /></a>
        <a href="#experience" aria-label="Experience"><BriefcaseIcon /></a>
        <a href="#stack" aria-label="Skills"><CodeIcon /></a>
        <span className="dock-sep" aria-hidden="true" />
        <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><GitHubIcon /></a>
        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><LinkedInIcon /></a>
        <a href={`mailto:${profile.email}`} aria-label={`Email ${profile.firstName}`}><MailIcon /></a>
      </nav>
    </>
  );
}
