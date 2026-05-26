import { FaPhoneAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import heroBg from "../assets/images/hero_bg.png";
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
      className="relative min-h-screen overflow-hidden bg-[#ECE7FF] flex items-center"
    >
      {/* Background Image */}

      {/* <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover object-left md:object-center opacity-90"
        />
      </div> */}

      {/* Decorative Purple Asset */}

      <img
        src={rocket}
        alt="Creative Decoration"
        className="absolute top-150 -right-[5%] -translate-y-1/2 w-[80px] sm:w-[100px] md:w-[120px] lg:w-[450px] opacity-90 pointer-events-none select-none z-[1] animate-float drop-shadow-[0_0_25px_rgba(124,58,237,0.35)]"
      />

      {/* Glow Effects */}

      <div className="absolute -top-32 -left-20 w-90 h-90 bg-[#6F00FF]/10 rounded-full blur-[120px]" />

      <div className="absolute -bottom-25 right-0 w-90 h-90 bg-[#C0FF00]/10 rounded-full blur-[130px]" />

      {/* Content */}

      <div className="relative z-10 max-w-350 mx-auto px-6 sm:px-8 lg:px-12 w-full">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] min-h-screen items-center pt-28 lg:pt-24 pb-36 lg:pb-20">
          {/* LEFT */}

          <div className="max-w-225">
            <p className="text-[#6F00FF] uppercase tracking-[4px] font-bold text-xs sm:text-sm mb-7">
              CREATIVE STUDIO • BRAND STRATEGY • VISUAL EXPERIENCES
            </p>

            <h1 className="font-founders font-bold text-black text-[clamp(2.4rem,7vw,4.7rem)] leading-none tracking-[-0.04em]">
              We build
              <span className="text-[#6F00FF]"> brands, </span>
              visuals & digital experiences that
              <span className="text-[#6F00FF]"> leave a lasting</span>{" "}
              impression.
            </h1>

            <p className="font-[Nexa] text-[#555555] text-[15px] sm:text-lg leading-8 mt-8 max-w-155">
              CreativeLab Studio is a boutique creative agency crafting refined
              identities, immersive websites, and visually powerful brand
              experiences for modern businesses, founders, and visionaries.
            </p>

            <p className="font-[Nexa] text-[#555555] text-[15px] sm:text-lg leading-8 mt-4 max-w-155">
              We blend storytelling, strategy, and aesthetics to create work
              that feels timeless, intentional, and emotionally engaging.
            </p>

            {/* Buttons */}

            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <button
                onClick={() => navigate("/contact")}
                className="bg-[#6F00FF] hover:bg-[#7B68EE] text-white px-8 py-4 rounded-full flex items-center justify-center gap-3 duration-300 hover:scale-105 shadow-[0_5px_16px_rgba(111,0,255,0.14)] hover:shadow-[0_5px_18px_rgba(111,0,255,0.18)] font-[Nexa] cursor-pointer"
              >
                <FaPhoneAlt />
                Start Your Project
              </button>

              <button
                onClick={() => navigate("/portfolio")}
                className="bg-white hover:bg-[#F5F2FF] border border-transparent hover:border-[#6F00FF] text-[#111111] px-9 py-4 rounded-full font-[Nexa] font duration-300 hover:scale-105 shadow-[0_5px_12px_rgba(111,0,255,0.06)] hover:shadow-[0_5px_16px_rgba(111,0,255,0.12)] cursor-pointer"
              >
                View Our Work
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee */}

      <div className="absolute bottom-0 left-0 w-full overflow-hidden border-y border-[#D9CCFF] bg-white/30 backdrop-blur-xl py-3 z-20">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(3)].map((_, repeat) => (
            <div key={repeat} className="flex items-center shrink-0">
              {scrollItems.map((item, index) => (
                <span
                  key={index}
                  className="font-[Founders] text-[#6F00FF] text-sm sm:text-lg lg:text-2xl tracking-[2px] px-6 sm:px-10 flex items-center"
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
