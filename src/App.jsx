import { Routes, Route, useLocation } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import DiscoveryCall from "./pages/DiscoveryCall";
import NavBar from "./components/NavBar";
import ScrollToTop from "./components/ScrollToTop";
import PageNotFound from "./components/PageNotFound";
import TermsConditions from "./components/TermsConditions";
import PrivacyPolicy from "./components/PrivacyPolicy";

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
    <>
      <ScrollToTop />

      {showNavbar && <NavBar />}

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/services" element={<Services />} />

        <Route path="/portfolio" element={<Portfolio />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/discovery-call" element={<DiscoveryCall />} />

        <Route path="/terms-and-conditions" element={<TermsConditions />} />

        <Route path="/privacy-policy" element={<PrivacyPolicy />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
