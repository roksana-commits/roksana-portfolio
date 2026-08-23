/**
 * Signal & Structure reminder: keep the site editorial, left-aligned, evidence-led,
 * and calm. Prefer warm ivory, ink, Roksana Blue, and short decisive interactions.
 */
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import CookieConsent from "./components/CookieConsent";
import Home from "./pages/Home";
import Legal from "./pages/Legal";
import About from "./pages/About";

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
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}
