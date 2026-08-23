/**
 * Signal & Structure reminder: this page is an editorial case file, not a generic
 * centered landing page. Keep proof visible, use asymmetry, and let the blue rule
 * guide the reading path. Motion stays short and purposeful.
 */
import {
  ArrowUp,
  ArrowUpRight,
  Check,
  ChevronDown,
  Database,
  FileSpreadsheet,
  Globe2,
  Mail,
  LockKeyhole,
  Menu,
  Moon,
  Search,
  Sun,
  X,
} from "lucide-react";
import { useEffect, useState, type FormEvent, type MouseEvent } from "react";
import { useTheme } from "../contexts/ThemeContext";

const portrait = "/manus-storage/roksana-portrait_eea47550.png";
const heroTexture = "/manus-storage/roksana-signal-hero_195fe05d.png";
const detailTexture = "/manus-storage/roksana-data-detail_cb564b24.png";
const mark = "/manus-storage/roksana-mark_b3bcbf5b.png";
const formspreeEndpoint = "https://formspree.io/f/meajdyya";

type FormStatus = { type: "idle" | "success" | "error"; message: string };

const skills = [
  { name: "Data Entry", value: "$31,686.56", width: "100%" },
  { name: "Excel", value: "$25,761.49", width: "81%" },
  { name: "Web Search", value: "$21,243.68", width: "67%" },
  { name: "Data Processing", value: "$17,777.53", width: "56%" },
  { name: "Web Scraping", value: "$17,017.70", width: "54%" },
  { name: "Data Mining", value: "$6,088.77", width: "19%" },
];

const services = [
  { icon: Search, title: "Technical SEO", text: "Audits, research, and practical fixes that make search performance easier to understand and improve." },
  { icon: Database, title: "Data intelligence", text: "Structured research, extraction, cleaning, and processing when the answer is buried in the details." },
  { icon: Globe2, title: "Web scraping", text: "Reliable workflows for gathering web data at scale, with care for consistency and useful output." },
  { icon: FileSpreadsheet, title: "Operations support", text: "Spreadsheet-heavy, detail-sensitive work that keeps teams moving without adding more noise." },
];

function SectionLabel({ number, children }: { number: string; children: string }) {
  return (
    <div className="section-label">
      <span>{number}</span>
      <span>{children}</span>
    </div>
  );
}

export default function Home() {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [formStatus, setFormStatus] = useState<FormStatus>({ type: "idle", message: "" });
  const closeMenu = () => setMenuOpen(false);
  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 520);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    if (!successOpen) return;
    const handleEscape = (event: KeyboardEvent) => { if (event.key === "Escape") setSuccessOpen(false); };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [successOpen]);
  const handleNavClick = (event: MouseEvent<HTMLAnchorElement>, id: string) => {
    event.preventDefault();
    closeMenu();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setFormStatus({ type: "error", message: "Please complete your name, email, and message." });
      return;
    }
    setIsSubmitting(true);
    setFormStatus({ type: "idle", message: "" });
    try {
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, _subject: `Portfolio enquiry from ${form.name.trim()}`, _replyto: form.email.trim() }),
      });
      if (!response.ok) throw new Error("Form submission failed");
      setForm({ name: "", email: "", message: "" });
      setFormStatus({ type: "success", message: "Message sent. Thank you — I’ll be in touch soon." });
      setSuccessOpen(true);
    } catch {
      setFormStatus({ type: "error", message: "Something went wrong. Please try again or email me directly." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="site-shell">
      <aside className="editorial-rail" aria-label="Portfolio index"><span>ROKSANA / 01—05</span><span>DATA INTELLIGENCE</span></aside>
      <header className="topbar">
        <a href="#top" className="brand" aria-label="Roksana home" onClick={(event) => handleNavClick(event, "top")}>
          <img src={mark} alt="" className="brand-mark" />
          <span>ROKSANA</span>
        </a>
        <button className="menu-button" aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        <nav className={menuOpen ? "nav-links is-open" : "nav-links"} aria-label="Primary navigation">
          <a href="#capabilities" onClick={(event) => handleNavClick(event, "capabilities")}>Capabilities</a>
          <a href="#proof" onClick={(event) => handleNavClick(event, "proof")}>Proof</a>
          <a href="#about" onClick={(event) => handleNavClick(event, "about")}>About</a>
          <button className="theme-toggle" type="button" aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`} title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`} onClick={() => toggleTheme?.()}><span className="theme-toggle-icon">{theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}</span><span>{theme === "dark" ? "Light" : "Dark"}</span></button>
          <a href="#contact" className="nav-cta" onClick={(event) => handleNavClick(event, "contact")}>Let’s work <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <main id="top">
        <section className="hero section-wrap">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-dot" /> Available for focused projects <span className="mono">/ 2026</span></div>
            <h1>Clear answers<br /><em>from complicated</em><br />data.</h1>
            <p className="hero-intro">I’m Roksana — a Digital Administrator at Lighthouse Internet Media, working across technical SEO, data intelligence, and web scraping to turn scattered information into dependable next steps.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="https://www.freelancer.com/u/roksanaripa1993" target="_blank" rel="noreferrer">View my profile <ArrowUpRight size={17} /></a>
              <a className="text-link" href="#capabilities" onClick={(event) => handleNavClick(event, "capabilities")}>See how I help <ChevronDown size={16} /></a>
            </div>
          </div>
          <div className="hero-visual">
            <img src={heroTexture} alt="Abstract blue data marks and editorial chart lines" className="hero-texture" />
            <div className="portrait-frame">
              <img src={portrait} alt="Roksana wearing a blue patterned hijab" />
              <div className="portrait-note"><span>01</span><span>Roksana R.</span><span>Dhaka, BD</span></div>
            </div>
            <div className="hero-stamp">R<br /><span>DATA<br />IN / OUT</span></div>
          </div>
        </section>

        <section className="proof-band" id="proof">
          <div className="section-wrap proof-inner">
            <div className="proof-intro"><span className="mono">PROFILE SIGNAL <i className="tiny-ticks">···</i></span><strong>Execution you<br />can measure.</strong></div>
            <div className="metric"><strong>100<span>%</span></strong><span>Completed jobs</span></div>
            <div className="metric"><strong>89<span>%</span></strong><span>On-time delivery</span></div>
            <div className="metric"><strong>81<span>%</span></strong><span>On-budget projects</span></div>
            <div className="metric rating"><strong>4.9<span>★</span></strong><span>244 reviews shown on profile</span></div>
          </div>
        </section>

        <section className="section-wrap capabilities" id="capabilities">
          <div className="section-heading"><SectionLabel number="02" children="Capabilities" /><h2>Useful range.<br /><span>Focused execution.</span></h2><p>As a Digital Administrator at Lighthouse Internet Media, I bring structure to the part of the project that needs it most—from technical investigation to careful spreadsheet work.</p></div>
          <div className="service-list">
            {services.map(({ icon: Icon, title, text }, index) => <article className="service-row" key={title}><span className="service-number">0{index + 1}</span><Icon size={22} strokeWidth={1.5} /><div><h3>{title}</h3><p>{text}</p></div><ArrowUpRight className="service-arrow" size={20} /></article>)}
          </div>
        </section>

        <section className="signal-section" id="about">
          <div className="section-wrap signal-grid">
            <div className="signal-image"><img src={detailTexture} alt="Close-up abstract data ticks and connecting lines" /><span className="image-caption mono">A small detail<br />can change the answer.</span></div>
            <div className="signal-copy"><SectionLabel number="03" children="The signal index" /><h2>Strong on detail.<br /><em>Good with the whole picture.</em></h2><p>My work lives between research and execution. I’m comfortable finding the right source, shaping messy inputs, and delivering an output that someone else can actually use.</p><div className="skill-list">{skills.map((skill) => <div className="skill-item" key={skill.name}><div className="skill-top"><span>{skill.name}</span><span className="mono">{skill.value}</span></div><div className="skill-track"><span style={{ width: skill.width }} /></div></div>)}</div><a className="text-link" href="https://www.freelancer.com/u/roksanaripa1993" target="_blank" rel="noreferrer">Explore the full work history <ArrowUpRight size={16} /></a></div>
          </div>
        </section>

        <section className="about-section section-wrap">
          <div className="about-aside"><SectionLabel number="04" children="Working style" /><span className="vertical-note mono">PRECISION / PATIENCE / PROGRESS</span><span className="about-ticks mono">— — — — —</span></div>
          <div className="about-copy"><h2>Good work starts<br />with a <em>clear brief.</em></h2><p>Whether you need a research partner, a careful operator, or someone to make sense of a large set of web data, I bring a practical mindset and a steady eye for what matters.</p><div className="check-list"><span><Check size={15} /> Clear communication</span><span><Check size={15} /> Detail-aware delivery</span><span><Check size={15} /> Independent momentum</span></div></div>
        </section>

        <section className="contact-section" id="contact"><div className="contact-mark">R</div><div className="section-wrap contact-inner"><div className="contact-intro"><SectionLabel number="05" children="Start a conversation" /><h2>Bring me<br /><em>the messy part.</em></h2><p>Tell me what you’re trying to understand, organize, or improve. I’ll meet you where the problem is.</p><a className="button button-dark" href="https://www.freelancer.com/u/roksanaripa1993" target="_blank" rel="noreferrer">Open Freelancer profile <ArrowUpRight size={17} /></a></div><form className="contact-form" onSubmit={handleSubmit} noValidate><div className="form-heading"><span className="mono">DIRECT LINE</span><span className="form-rule" /></div><label htmlFor="contact-name">Name<input id="contact-name" name="name" type="text" autoComplete="name" placeholder="Your name" required value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} /></label><label htmlFor="contact-email">Email<input id="contact-email" name="email" type="email" autoComplete="email" placeholder="you@company.com" required value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} /></label><label htmlFor="contact-message">What can I help with?<textarea id="contact-message" name="message" rows={4} placeholder="A few lines about the project..." required value={form.message} onChange={(event) => setForm({ ...form, message: event.target.value })} /></label><button className="button button-dark form-submit" type="submit" disabled={isSubmitting} aria-busy={isSubmitting}>{isSubmitting ? "Sending…" : "Send message"} {!isSubmitting && <ArrowUpRight size={17} />}</button><p className={`form-status ${formStatus.type}`} aria-live="polite">{formStatus.message}</p><p className="privacy-notice"><LockKeyhole size={14} /> Your details are sent securely through Formspree and used only to respond to your enquiry.</p></form></div></section>
      </main>

      <button className={`back-to-top ${showBackToTop ? "is-visible" : ""}`} type="button" aria-label="Back to top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}><ArrowUp size={15} /> <span>Back to top</span></button>

      {successOpen && <div className="success-modal-backdrop" role="presentation" onClick={() => setSuccessOpen(false)}><div className="success-modal" role="dialog" aria-modal="true" aria-labelledby="success-title" onClick={(event) => event.stopPropagation()}><div className="success-modal-mark"><Check size={24} /></div><span className="mono">FORM RECEIVED / 200</span><h2 id="success-title">Message received.</h2><p>Thank you for reaching out. Your note is safely on its way, and Roksana will be in touch soon.</p><button className="button button-primary" type="button" onClick={() => setSuccessOpen(false)}>Close <X size={16} /></button></div></div>}


      <footer className="footer section-wrap"><div><span className="footer-brand">ROKSANA<span className="blue">.</span></span><span className="mono">Digital Administration / Technical SEO / Data Intelligence</span></div><div className="footer-right"><a href="mailto:roksana@lighthouseinternetmedia.com"><Mail size={15} /> Lighthouse email</a><a href="mailto:roksana.ripa.1993@gmail.com"><Mail size={15} /> Gmail</a><span className="legal-footer-links"><a href="/privacy">Privacy</a><a href="/terms">Terms</a><a href="/cookies">Cookies</a><a href="/disclaimer">Disclaimer</a></span><span className="mono">© 2026</span></div></footer>
    </div>
  );
}
