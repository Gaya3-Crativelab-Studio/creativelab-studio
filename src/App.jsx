import { Suspense, lazy } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import NavBar from "./components/NavBar";
import ScrollToTop from "./components/ScrollToTop";
import PageLoader from "./components/PageLoader";
import ErrorBoundary from "./components/ErrorBoundary";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const Contact = lazy(() => import("./pages/Contact"));
const DiscoveryCall = lazy(() => import("./pages/DiscoveryCall"));
const TermsConditions = lazy(() => import("./components/TermsConditions"));
const PrivacyPolicy = lazy(() => import("./components/PrivacyPolicy"));
const PageNotFound = lazy(() => import("./components/PageNotFound"));

function App() {
  const location = useLocation();

  const validRoutes = [
    "/",
    "/about",
    "/services",
    "/portfolio",
    "/contact",
    "/discovery-call",
    "/terms-and-conditions",
    "/privacy-policy",
  ];

  const showNavbar = validRoutes.includes(location.pathname);

  return (
    <div className="flex min-h-dvh flex-col bg-[#0a0a0a]">
      <ScrollToTop />

      {showNavbar && <NavBar />}

      <div className="flex-1">
        <ErrorBoundary>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />

              <Route path="/about" element={<About />} />

              <Route path="/services" element={<Services />} />

              <Route path="/portfolio" element={<Portfolio />} />

              <Route path="/contact" element={<Contact />} />

              <Route path="/discovery-call" element={<DiscoveryCall />} />

              <Route
                path="/terms-and-conditions"
                element={<TermsConditions />}
              />

              <Route path="/privacy-policy" element={<PrivacyPolicy />} />

              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </div>
    </div>
  );
}

export default App;
