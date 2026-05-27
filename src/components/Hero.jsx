import { FaPhoneAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import rocket from "../assets/images/Rocket.png";

const Hero = () => {
  const navigate = useNavigate();

  const scrollItems = [
    "BRANDING",
    "CREATIVE DIRECTION",
    "DIGITAL DESIGN",
    "VISUAL STORYTELLING",
    "CONTENT",
    "EXPERIENCES",
    "STRATEGY",
    "DESIGN SYSTEMS",
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#ECE7FF]"
    >
      {/* Glow Effects */}

      <div className="absolute -top-32 -left-20 w-90 h-90 bg-[#6F00FF]/20 rounded-full blur-[120px]" />

      <div className="absolute -bottom-25 right-0 w-90 h-90 bg-[#6F00FF]/20 rounded-full blur-[130px]" />

      {/* Main Container */}

      <div className="relative z-10 max-w-[1500px] mx-auto px-6 sm:px-8 lg:px-12 lg:mt-5">
        <div className="grid lg:grid-cols-2 min-h-screen items-center gap-8 xl:gap-12 pt-8 lg:pt-6 pb-10">
          {/* LEFT */}

          <div className="max-w-[700px]">
            <p className="text-[#6F00FF] uppercase tracking-[4px] font-bold text-xs sm:text-sm mb-5 mt-3">
              PREMIUM BRANDING • CREATIVE PRODUCTION • WEBSITE DEVELOPMENT
            </p>

            <h1 className="font-founders font-bold text-black text-[clamp(2rem,3.5vw,3.2rem)] leading-tight tracking-[-0.03em] mb-6">
              We build
              <span className="text-[#6F00FF]"> brands, </span>
              visuals & digital experiences that
              <span className="text-[#6F00FF]"> leave a lasting</span>{" "}
              impression.
            </h1>

            <p className="font-[Nexa] text-[#555555] text-[15px] sm:text-base leading-7 mt-6 max-w-[540px]">
              CreativeLab Studio is a boutique creative agency helping founders
              and modern brands build refined identities, strategic digital
              marketing, and immersive websites that feel premium from the first
              impression.
            </p>

            <p className="font-[Nexa] text-[#555555] text-[15px] sm:text-base leading-7 mt-3 max-w-[540px]">
              From brand storytelling and social media content to SEO, motion
              graphics, and website development, we create elegant creative
              experiences that strengthen visibility, trust, and long-term
              recall.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <button
                onClick={() => navigate("/discovery-call")}
                className="bg-[#6F00FF] hover:bg-[#7B68EE] text-white px-7 py-3 rounded-full flex items-center justify-center gap-3 duration-300 hover:scale-105 shadow-[0_5px_16px_rgba(111,0,255,0.14)] text-base font-semibold cursor-pointer"
              >
                <FaPhoneAlt />
                Book a Discovery Call
              </button>

              <button
                onClick={() => navigate("/portfolio")}
                className="bg-white text-black px-8 py-3 rounded-full hover:border-[#6F00FF] border duration-300 hover:scale-105 text-base font-semibold cursor-pointer"
              >
                View Our Work
              </button>
            </div>
          </div>

          {/* RIGHT */}

          <div className="hidden lg:flex items-center justify-center">
            <img
              src={rocket}
              alt="CreativeLab Studio brand launch illustration"
              className="w-[600px] xl:w-[1080px] 2xl:w-[1200px] max-w-none object-contain animate-float"
            />
          </div>
        </div>
      </div>

      {/* MARQUEE */}

      <div className="absolute bottom-0 left-0 w-full overflow-hidden border-y border-[#D9CCFF] bg-white/30 backdrop-blur-xl py-1 z-20">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(3)].map((_, repeat) => (
            <div key={repeat} className="flex shrink-0 items-center">
              {scrollItems.map((item, index) => (
                <span
                  key={index}
                  className="font-[Founders] text-[#6F00FF] text-sm sm:text-lg lg:text-2xl tracking-[2px] px-6 sm:px-10 pt-2 flex items-center"
                >
                  {item}

                  <span className="ml-8 sm:ml-14">•</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
