// src/pages/About.jsx
import PageHero from "../components/shared/PageHero";
import StandOut from "../components/about/StandOut";
import Footer from "../components/Footer";
import WhyChooseUs from "../components/shared/WhyChooseUs";
import MarqueeStrip from "../components/about/MarqueeStrip";
// import Process        from "../components/shared/Process";
// import Story          from "../components/about/Story";
// import MissionVision  from "../components/about/MissionVision";
// import FounderNote    from "../components/about/FounderNote";
// import Clients        from "../components/about/Clients";
// import WhyChooseUs    from "../components/about/WhyChooseUs";
// import MarqueeStrip   from "../components/shared/MarqueeStrip";

const About = () => {
  return (
    <>
      <PageHero />
      <StandOut />
      {/* <Process />
      <Story />
      <MissionVision />
      <FounderNote />
      <Clients />
      <WhyChooseUs />
      <MarqueeStrip /> */}
      <WhyChooseUs />
      <MarqueeStrip />
      <Footer />
    </>
  );
};

export default About;
