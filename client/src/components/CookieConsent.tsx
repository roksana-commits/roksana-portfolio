/**
 * Signal & Structure reminder: keep consent explicit, compact, and subordinate to
 * the editorial content. Use the same ink/ivory/blue hierarchy as the portfolio.
 */
import { ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";

export default function CookieConsent() {
  const [consent, setConsent] = useState<"accepted" | "declined" | null>(() => {
    const stored = localStorage.getItem("cookie-consent");
    return stored === "accepted" || stored === "declined" ? stored : null;
  });

  useEffect(() => {
    if (consent !== "accepted") return;
    const endpoint = import.meta.env.VITE_ANALYTICS_ENDPOINT;
    const websiteId = import.meta.env.VITE_ANALYTICS_WEBSITE_ID;
    if (!endpoint || !websiteId || document.querySelector("script[data-website-id]")) return;
    const script = document.createElement("script");
    script.defer = true;
    script.src = `${endpoint}/umami`;
    script.dataset.websiteId = websiteId;
    document.body.appendChild(script);
  }, [consent]);

  const choose = (choice: "accepted" | "declined") => {
    localStorage.setItem("cookie-consent", choice);
    setConsent(choice);
  };

  if (consent !== null) return null;
  return (
    <aside className="cookie-banner" aria-label="Cookie consent">
      <div className="cookie-copy">
        <span className="cookie-label mono">PRIVACY / CHOICE</span>
        <p>We use local storage to remember your theme and, with your permission, analytics to understand how the site is used. <a href="/cookies">Read the Cookie &amp; Analytics Notice <ArrowUpRight size={13} /></a></p>
      </div>
      <div className="cookie-actions">
        <button type="button" className="cookie-button cookie-accept" onClick={() => choose("accepted")}>Accept analytics</button>
        <button type="button" className="cookie-button cookie-decline" onClick={() => choose("declined")}>Decline</button>
      </div>
    </aside>
  );
}
