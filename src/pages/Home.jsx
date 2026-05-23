import FloatingWhatsApp from "../components/FloatingWhatsApp";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import FeatureProject from "../components/FeatureProject";
import Services from "../components/Services";
import Philosophy from "../components/Philosophy";
import CTA from "../components/CTA";
import Testimonials from "../components/Testimonials";
import Clients from "../components/shared/Clients";

function Home() {
  return (
    <>
      <div id="home">
        <Hero />
        <Services />
        <FeatureProject />
        <Testimonials />
        <Philosophy />
        <CTA />
        <Clients/>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </>
  );
}

export default Home;
