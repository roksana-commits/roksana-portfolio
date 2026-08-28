/**
 * Signal & Structure reminder: keep the site editorial, left-aligned, evidence-led,
 * and calm. Prefer warm ivory, ink, Roksana Blue, and short decisive interactions.
 */
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, useLocation } from "wouter";
import { useEffect } from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import CookieConsent from "./components/CookieConsent";
import Home from "./pages/Home";
import Legal from "./pages/Legal";
import About from "./pages/About";

const siteUrl = "https://roksana-portfolio.roksana-portfolio-website.workers.dev";
const pageMeta: Record<string, { title: string; description: string; type?: string }> = {
  "/": {
    title: "Roksana | Technical SEO, AI Search & Data Intelligence Specialist",
    description: "Roksana is a Technical SEO, AI Search Optimization, and Data Intelligence Specialist helping businesses improve search visibility, research competitors, and turn web data into useful decisions.",
  },
  "/about": {
    title: "About Roksana | Technical SEO & AI Search Specialist",
    description: "Learn about Roksana, a Technical SEO, AI Search Optimization, and Data Intelligence Specialist with 7+ years of experience in SEO, research, web data, and digital operations.",
  },
  "/privacy": { title: "Privacy Policy | Roksana", description: "Privacy policy for the Roksana portfolio website.", type: "article" },
  "/terms": { title: "Terms of Use | Roksana", description: "Terms of use for the Roksana portfolio website.", type: "article" },
  "/cookies": { title: "Cookie Policy | Roksana", description: "Cookie information for the Roksana portfolio website.", type: "article" },
  "/disclaimer": { title: "Disclaimer | Roksana", description: "Disclaimer for the Roksana portfolio website.", type: "article" },
};

function setMeta(name: string, content: string) {
  let tag = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
  if (!tag) {
    tag = document.createElement("meta");
    tag.name = name;
    document.head.appendChild(tag);
  }
  tag.content = content;
}

function setProperty(property: string, content: string) {
  let tag = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement | null;
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("property", property);
    document.head.appendChild(tag);
  }
  tag.content = content;
}

function SeoManager() {
  const [location] = useLocation();
  useEffect(() => {
    const path = location || "/";
    const meta = pageMeta[path] ?? {
      title: "Page Not Found | Roksana",
      description: "The requested page could not be found on the Roksana portfolio website.",
      type: "website",
    };
    const canonicalUrl = `${siteUrl}${path === "/" ? "/" : path}`;
    document.title = meta.title;
    setMeta("description", meta.description);
    setMeta("robots", path === "/404" || !pageMeta[path] ? "noindex, follow" : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1");
    let canonical = document.querySelector("link[rel=canonical]") as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;
    setProperty("og:title", meta.title);
    setProperty("og:description", meta.description);
    setProperty("og:type", meta.type ?? "website");
    setProperty("og:url", canonicalUrl);
    setProperty("og:image", `${siteUrl}/assets/roksana-social-preview_bc6384a7.png`);
    setMeta("twitter:title", meta.title);
    setMeta("twitter:description", meta.description);
    setMeta("twitter:image", `${siteUrl}/assets/roksana-social-preview_bc6384a7.png`);
  }, [location]);
  return null;
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/privacy"><Legal type="privacy" /></Route>
      <Route path="/terms"><Legal type="terms" /></Route>
      <Route path="/cookies"><Legal type="cookies" /></Route>
      <Route path="/disclaimer"><Legal type="disclaimer" /></Route>
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light" switchable>
        <TooltipProvider>
          <Toaster />
          <CookieConsent />
          <SeoManager />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}
