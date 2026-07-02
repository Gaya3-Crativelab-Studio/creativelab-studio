// src/pages/About.jsx
import PageHero from "../components/shared/PageHero";
import StandOut from "../components/about/StandOut";
import Footer from "../components/Footer";
import WhyChooseUs from "../components/shared/WhyChooseUs";
import MarqueeStrip from "../components/about/MarqueeStrip";
import Story from "../components/about/Story";
import Clients from "../components/shared/Clients";
import Process from "../components/shared/Process";
import TeamSection from "../components/TeamSection";

const About = () => {
  return (
    <>
      <PageHero />
      <StandOut />
      <Process />
      <Story />
      <TeamSection />
      <Clients />
      <WhyChooseUs />
      <MarqueeStrip />
      <Footer />
    </>
  );
};

export default About;
