/**
 * Signal & Structure reminder: legal pages should feel like part of the same calm
 * editorial case file—left-aligned, readable, evidence-led, and free of decorative noise.
 */
import { ArrowLeft, ArrowUpRight, LockKeyhole } from "lucide-react";
import { Link } from "wouter";

const emails = ["roksana@lighthouseinternetmedia.com", "roksana.ripa.1993@gmail.com"];
const updated = "August 23, 2026";

type LegalDocument = {
  eyebrow: string;
  title: string;
  intro: string;
  sections: { title: string; body: string }[];
};

const documents: Record<string, LegalDocument> = {
  privacy: {
    eyebrow: "LEGAL / 01",
    title: "Privacy Policy",
    intro: "This draft explains how Roksana handles information shared through this portfolio website. It is written for a small independent portfolio business operating from Bangladesh and should be reviewed for the final operating setup.",
    sections: [
      { title: "Information you provide", body: "If you use the contact form, you may provide your name, email address, and project message. The form is processed through Formspree at the endpoint configured for this website. You may also contact Roksana directly by email." },
      { title: "How information is used", body: "Information is used to read and respond to enquiries, discuss potential work, provide requested information, and maintain reasonable business records. Roksana does not sell contact information or use it for unrelated marketing without a separate lawful basis or your permission." },
      { title: "Service providers and transfers", body: "Form submissions are transmitted through Formspree, a third-party form-processing provider. Your information may be processed on systems outside Bangladesh subject to that provider’s terms and privacy practices. Review the provider’s current policy before submitting sensitive information." },
      { title: "Retention and security", body: "Roksana takes reasonable steps to limit access to enquiry information and retain it only for as long as reasonably necessary for the purpose collected, legitimate business needs, dispute handling, or legal obligations. No internet transmission or storage system can be guaranteed completely secure." },
      { title: "Your questions", body: `For privacy questions or requests about information you submitted, contact ${emails[0]} or ${emails[1]}. Please do not send passwords, payment-card details, government identification numbers, or other highly sensitive information through this portfolio form.` },
    ],
  },
  terms: {
    eyebrow: "LEGAL / 02",
    title: "Terms of Use",
    intro: "These draft terms govern ordinary use of the Roksana portfolio website. They are intended as a practical starting point for an independent service provider and should be reviewed before publication.",
    sections: [
      { title: "Website purpose", body: "This website presents information about Roksana’s services, capabilities, work history, and ways to make contact. It is not an offer that automatically creates a client relationship or contract." },
      { title: "Enquiries and engagements", body: "A project begins only when the scope, fees, timing, responsibilities, and other material terms are confirmed in a separate written agreement. Information on this site does not override a signed agreement or written project confirmation." },
      { title: "Acceptable use", body: "Use this site lawfully and respectfully. Do not attempt to disrupt the site, access non-public systems, submit malicious code, impersonate another person, or use the contact form for spam, unlawful requests, or content that infringes another person’s rights." },
      { title: "Intellectual property", body: "Unless stated otherwise, the site’s text, layout, branding, and original visual assets belong to Roksana or are used with permission. You may view the site for personal or legitimate business evaluation, but may not copy, republish, or commercially reuse its content without permission." },
      { title: "Third-party links and availability", body: "The site may link to Freelancer, Formspree, email services, or other third parties. Roksana does not control those services and is not responsible for their content, availability, or policies. The site is provided on an availability basis and may change over time." },
      { title: "Contact", body: `Questions about these terms may be sent to ${emails[0]} or ${emails[1]}.` },
    ],
  },
  cookies: {
    eyebrow: "LEGAL / 03",
    title: "Cookie & Analytics Notice",
    intro: "This draft describes the small amount of browser storage and analytics functionality used by the portfolio website. It should be updated if additional tools, advertising, or embedded services are added later.",
    sections: [
      { title: "Theme preference", body: "When you use the light/dark mode switch, the site stores your preference in your browser’s local storage so the selected theme can persist between visits. This is a functional preference rather than an advertising cookie." },
      { title: "Analytics", body: "The site includes an analytics script supplied by the hosting environment. Depending on the active configuration, it may collect aggregated information such as page views, referrer information, device or browser characteristics, and approximate usage timing. It is used to understand site performance, not to sell your identity." },
      { title: "Third-party services", body: "The contact form uses Formspree, and the portfolio links to third-party services such as Freelancer. Those services may use their own cookies or similar technologies when you leave this site. Their own notices control those practices." },
      { title: "Managing storage", body: "You can clear local storage and manage cookie permissions through your browser settings. Blocking storage may reset the theme preference, while blocking analytics may limit usage measurement without preventing ordinary site navigation or form use." },
      { title: "Questions", body: `For questions about analytics or browser storage on this site, contact ${emails[0]} or ${emails[1]}.` },
    ],
  },
  disclaimer: {
    eyebrow: "LEGAL / 04",
    title: "Disclaimer",
    intro: "This page sets expectations for how to interpret the information presented on the Roksana portfolio website.",
    sections: [
      { title: "Informational content", body: "The website is a portfolio and service-information resource. It is not legal, financial, medical, tax, investment, cybersecurity, or other regulated professional advice. Seek an appropriately qualified professional for advice about your own situation." },
      { title: "No guaranteed outcome", body: "Descriptions of skills, services, past performance, earnings, job completion, timing, or profile metrics are presented for context and may change. Past results do not guarantee future results, and no particular ranking, traffic, lead, revenue, or project outcome is promised." },
      { title: "External information", body: "Some profile information and metrics are based on supplied freelancer-platform materials. Third-party platforms, links, pricing, policies, and availability may change independently. Verify important details before relying on them." },
      { title: "Contact and engagement", body: `Questions about the information on this website may be sent to ${emails[0]} or ${emails[1]}. Any paid engagement will be governed by its own written scope and terms.` },
    ],
  },
};

export default function Legal({ type }: { type: keyof typeof documents }) {
  const document = documents[type];
  return (
    <div className="legal-page">
      <header className="legal-header section-wrap">
        <Link href="/" className="legal-back"><ArrowLeft size={16} /> Back to portfolio</Link>
        <span className="legal-wordmark">ROKSANA<span>.</span></span>
      </header>
      <main className="legal-main section-wrap">
        <div className="legal-aside"><span className="section-label"><span>{document.eyebrow.split(" / ")[1]}</span><span>Legal information</span></span><span className="mono legal-date">Last updated / {updated}</span></div>
        <article className="legal-content"><div className="legal-kicker"><LockKeyhole size={14} /> Draft for review before publication</div><h1>{document.title}</h1><p className="legal-intro">{document.intro}</p><div className="legal-notice">This is an AI-assisted working draft, not formal legal advice. Have a qualified lawyer familiar with Bangladesh law review it before relying on or publishing it.</div>{document.sections.map((section) => <section className="legal-section" key={section.title}><h2>{section.title}</h2><p>{section.body}</p></section>)}<a className="legal-contact" href={`mailto:${emails[0]}`}>Questions? Email Roksana <ArrowUpRight size={16} /></a></article>
      </main>
      <footer className="legal-footer section-wrap"><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link><Link href="/cookies">Cookies & analytics</Link><Link href="/disclaimer">Disclaimer</Link></footer>
    </div>
  );
}
