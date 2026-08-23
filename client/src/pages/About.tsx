/**
 * Signal & Structure reminder: this page is a calm editorial profile—left-aligned,
 * evidence-led, and structured like a professional case file. Use warm ivory, ink,
 * Roksana Blue, mono annotations, and short purposeful interactions.
 */
import { ArrowLeft, ArrowUpRight, Check, ChevronDown, ChevronUp, Database, FileSpreadsheet, Globe2, Instagram, Linkedin, Search, Facebook, Share2 } from "lucide-react";
import { useState } from "react";

const portrait = "/manus-storage/roksana-portrait_eea47550.png";
const linkedinUrl = "https://www.linkedin.com/in/roksana-akhter-ripa";
const instagramUrl = "https://www.instagram.com/roksana.ripa.1993";
const facebookUrl = "https://www.facebook.com/roksana.akhter.ripa.1993";
const lighthouseUrl = "https://lighthouseinternetmedia.com";

const serviceGroups = [
  { icon: Search, number: "01", title: "Technical SEO & AI Search Optimization", items: "Technical SEO audits · Crawl and indexing analysis · Search Console · Core Web Vitals · Schema markup · Entity SEO · AEO & GEO" },
  { icon: Database, number: "02", title: "SEO Research & Competitive Intelligence", items: "Keyword research · Competitor analysis · Market research · Content strategy · Business intelligence · Reporting" },
  { icon: Globe2, number: "03", title: "Web Scraping & Data Extraction", items: "Website and directory extraction · eCommerce scraping · Lead research · Email list building · Data cleaning and verification" },
  { icon: FileSpreadsheet, number: "04", title: "Website & Data Management", items: "WordPress content management · Shopify product management · CRM organization · Excel and Google Sheets automation" },
  { icon: Share2, number: "05", title: "Social Media Account Creation & Management", items: "Facebook · Instagram · YouTube · TikTok · Page creation and setup · Content posting and ongoing page management" },
];

const selectedClients = ["PWD Law Firm", "Dapena Law", "Executive Fairways Golf", "WTP Advisors", "Real X Trailers", "Prevail IWS", "GoCloud", "Tabacon Cigars & Spirits", "Hightech Payments", "Life Changing Chiropractic", "Law Office of Jose M. Francisco", "Law Office of Karla Lopez Fernandez"];

const roles = [
  { period: "2022 — PRESENT / 01", company: "Lighthouse Internet Media", title: "Digital Administrator", detail: "Supporting digital operations across technical SEO, AI search optimization, research, data workflows, web management, and client social media work.", responsibilities: ["Technical SEO and AI Search Optimization support", "Competitor research, structured data analysis, and web extraction", "Social media page creation, setup, and content posting for clients"] },
  { period: "2022 — PRESENT / 02", company: "socialbook.io", title: "Data Enrich Administrator", detail: "Organizing, enriching, and maintaining structured data so teams can work from cleaner, more useful information.", responsibilities: ["Data enrichment and quality-focused record maintenance", "Research, verification, and structured information management", "Consistent delivery of clean, usable data for downstream teams"] },
];

export default function About() {
  const [expandedRole, setExpandedRole] = useState(roles[0].company);

  return (
    <div className="about-page">
      <header className="about-topbar section-wrap">
        <a className="brand" href="/" aria-label="Return to Roksana home"><span className="brand-mark about-mark">R</span><span>ROKSANA</span></a>
        <a className="about-back" href="/"><ArrowLeft size={15} /> Back to portfolio</a>
      </header>

      <main>
        <section className="about-hero section-wrap">
          <div className="about-hero-copy"><div className="eyebrow"><span className="eyebrow-dot" /> ABOUT THE OPERATOR <span className="mono">/ 2026</span></div><h1>Search is changing.<br /><em>Good information</em><br />still matters.</h1><p className="about-lead">Hi, I’m Roksana—a Technical SEO, AI Search Optimization, and Data Intelligence Specialist with 7+ years of experience and 240+ successfully completed projects on Freelancer.com.</p><p>I help businesses improve organic visibility, AI search presence, and data-driven decision-making through technical SEO, competitor research, structured data analysis, and web data extraction.</p></div>
          <div className="about-hero-visual"><img src={portrait} alt="Roksana wearing a blue patterned hijab" /><span className="about-photo-note mono">ROKSANA R.<br />DHAKA, BD</span></div>
        </section>

        <section className="about-proof-band"><div className="section-wrap about-proof-grid"><div><span className="mono">PROFILE SIGNAL</span><strong>Practical clarity<br />over noise.</strong></div><div><strong>7<span>+</span></strong><span>Years of experience</span></div><div><strong>240<span>+</span></strong><span>Completed Freelancer projects</span></div><div><strong>100<span>%</span></strong><span>Project completion rate</span></div></div></section>

        <section className="section-wrap about-section-block"><div className="about-section-intro"><span className="section-label"><span>01</span><span>How I think</span></span><h2>Beyond rankings.<br /><em>Into answers.</em></h2></div><div className="about-section-copy"><p>As search evolves beyond traditional rankings, I help businesses prepare for Google Search, AI Overviews, ChatGPT, Gemini, Perplexity, and other answer-driven experiences while building sustainable organic growth strategies.</p><p>I don’t simply complete tasks—I analyze problems, uncover opportunities, and provide practical recommendations that help businesses improve search visibility, understand competitors, and make confident, data-driven decisions.</p><div className="check-list"><span><Check size={15} /> Actionable recommendations</span><span><Check size={15} /> Detail-oriented research</span><span><Check size={15} /> Clear, reliable communication</span></div></div></section>

        <section className="about-roles-section"><div className="section-wrap"><div className="about-section-intro"><span className="section-label"><span>02</span><span>Current roles</span></span><h2>Two teams.<br /><em>One data-minded practice.</em></h2></div><div className="about-role-list">{roles.map((role) => <article className={`about-role ${expandedRole === role.company ? "is-expanded" : ""}`} key={role.company}><button className="about-role-toggle" type="button" aria-expanded={expandedRole === role.company} aria-controls={`role-details-${role.company.replace(/\\s+/g, "-")}`} onClick={() => setExpandedRole(expandedRole === role.company ? "" : role.company)}><span className="mono">{role.period}</span><span><h3>{role.title}</h3><span className="about-company">{role.company}</span><span className="about-role-summary">{role.detail}</span></span>{expandedRole === role.company ? <ChevronUp size={18} /> : <ChevronDown size={18} />}</button>{expandedRole === role.company && <div className="about-role-details" id={`role-details-${role.company.replace(/\\s+/g, "-")}`}><span className="mono">KEY RESPONSIBILITIES</span><ul>{role.responsibilities.map((responsibility) => <li key={responsibility}><Check size={13} /> {responsibility}</li>)}</ul></div>}</article>)}</div></div></section>

        <section className="section-wrap about-clients-section"><div className="about-section-intro"><span className="section-label"><span>03</span><span>Selected clients</span></span><h2>Trusted with<br /><em>the details.</em></h2><p className="about-client-note">Organizations I have supported with content, research, data, and digital work.</p></div><div className="client-name-grid">{selectedClients.map((client, index) => <div className="client-name" key={client}><span className="mono">{String(index + 1).padStart(2, "0")}</span><span>{client}</span></div>)}</div></section>

        <section className="section-wrap about-services-section"><div className="about-section-intro"><span className="section-label"><span>04</span><span>What I can help with</span></span><h2>A useful range.<br /><em>Focused execution.</em></h2></div><div className="about-service-list">{serviceGroups.map(({ icon: Icon, number, title, items }) => <article className="about-service" key={title}><span className="service-number">{number}</span><Icon size={23} strokeWidth={1.5} /><div><h3>{title}</h3><p>{items}</p></div><ArrowUpRight size={17} /></article>)}</div></section>

        <section className="about-cta-section"><div className="section-wrap about-cta-inner"><div><span className="mono">READY FOR THE MESSY PART?</span><h2>Let’s turn<br /><em>complexity into direction.</em></h2></div><div><p>If you’re looking for a reliable partner for Technical SEO, AI Search Optimization, competitor research, or data intelligence, I’d be happy to discuss your project.</p><a className="button button-dark" href="/#contact">Start a conversation <ArrowUpRight size={17} /></a></div></div></section>
      </main>

      <footer className="footer section-wrap about-footer"><div><span className="footer-brand">ROKSANA<span className="blue">.</span></span><span className="mono">Digital Administration / Technical SEO / Data Intelligence</span></div><div className="footer-right"><span className="about-socials" aria-label="Professional links"><a href={linkedinUrl} target="_blank" rel="noreferrer" aria-label="Roksana on LinkedIn"><Linkedin size={15} /></a><a href={instagramUrl} target="_blank" rel="noreferrer" aria-label="Roksana on Instagram"><Instagram size={15} /></a><a href={facebookUrl} target="_blank" rel="noreferrer" aria-label="Roksana on Facebook"><Facebook size={15} /></a><a href={lighthouseUrl} target="_blank" rel="noreferrer" aria-label="Lighthouse Internet Media website"><Globe2 size={15} /></a></span><a href="/">Portfolio home <ArrowUpRight size={15} /></a></div></footer>
    </div>
  );
}
