import { FaPhoneAlt } from "react-icons/fa";

const Hero = () => {
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
      className="relative bg-[#ECE7FF] overflow-hidden flex items-center min-h-screen"
    >
      {/* Background Blur */}

      <div className="absolute -top-32 -left-30 w-90 h-90 bg-[#6F00FF]/10 rounded-full blur-[120px]" />

      <div className="absolute -bottom-32 -right-25 w-90 h-90 bg-[#C0FF00]/10 rounded-full blur-[130px]" />

      <div className="max-w-350 mx-auto px-6 sm:px-8 lg:px-12 w-full">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] items-center min-h-screen pt-28 lg:pt-24 gap-12 lg:gap-16 pb-36 lg:pb-20">
          {/* LEFT */}

          <div className="max-w-225">
            <p className="text-[#6F00FF] uppercase tracking-[4px] text-xs sm:text-sm mb-6 lg:mb-8 leading-7">
              CREATIVE STUDIO • BRAND STRATEGY • VISUAL EXPERIENCES
            </p>

            <h1 className="font-founders font-bold text-black text-[clamp(2.2rem,7vw,4.2rem)] leading-none tracking-[-0.04em] max-w-187.5">
              We build
              <span className="text-[#6F00FF]"> brands, </span>
              visuals & digital experiences that
              <span className="text-[#6F00FF]"> leave a lasting</span>{" "}
              impression.
            </h1>

            <p className="font-[Nexa] text-[#555555] text-[15px] sm:text-lg leading-8 mt-6 lg:mt-10 max-w-155">
              CreativeLab Studio is a boutique creative agency crafting refined
              identities, immersive websites, and visually powerful brand
              experiences for modern businesses, founders, and visionaries.
            </p>

            <p className="font-[Nexa] text-[#555555] mt-4 text-[15px] sm:text-lg leading-8 max-w-155">
              We blend storytelling, strategy, and aesthetics to create work
              that feels timeless, intentional, and emotionally engaging.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <button className="bg-[#6F00FF] hover:bg-[#7B68EE] text-white px-8 py-4 rounded-full flex items-center justify-center gap-3 duration-300 hover:scale-105 shadow-[0_15px_40px_rgba(111,0,255,0.22)] font-[Nexa] font-semibold cursor-pointer">
                <FaPhoneAlt className="text-sm" />
                Start Your Project
              </button>

              <button className="bg-white/70 backdrop-blur-md border border-[#D7CCFF] hover:border-[#6F00FF] text-[#111111] px-8 py-4 rounded-full duration-300 hover:scale-105 hover:bg-white shadow-[0_10px_30px_rgba(111,0,255,0.08)] cursor-pointer font-[Nexa] font-semibold">
                View Our Work
              </button>
            </div>
          </div>

          {/* RIGHT */}

          <div className="flex justify-center lg:justify-end">
            <div className="bg-white rounded-[28px] lg:rounded-[34px] border border-[#E3DAFF] shadow-[0_20px_70px_rgba(111,0,255,0.12)] p-6 sm:p-8 lg:p-10 max-w-[340px] sm:max-w-[420px] lg:max-w-[480px] w-full">
              <div className="flex gap-3 mb-6">
                <div className="w-16 lg:w-20 h-3 rounded-full bg-[#6F00FF]" />

                <div className="w-8 lg:w-10 h-3 rounded-full bg-[#C0FF00]" />
              </div>

              <h3 className="font-[Founders] text-[28px] sm:text-[38px] lg:text-[46px] leading-[1.08] text-[#111111]">
                Design That Speaks
                <br />
                Creativity That
                <br />
                Connects.
              </h3>

              <p className="font-[Nexa] text-[#666666] leading-8 mt-6 text-sm sm:text-base">
                We transform ideas into visuals that inspire, engage, and leave
                a lasting impression.
              </p>

              <div className="flex gap-4 mt-8">
                <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-full bg-[#6F00FF]" />

                <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-full bg-[#C0FF00]" />

                <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-full bg-[#F4C2C2]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* HERO SCROLL TEXT */}

      <div className="absolute bottom-0 left-0 w-full border-y border-[#D9CCFF] bg-white/30 backdrop-blur-xl overflow-hidden py-2 z-20">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(3)].map((_, repeatIndex) => (
            <div key={repeatIndex} className="flex items-center shrink-0">
              {scrollItems.map((item, index) => (
                <span
                  key={index}
                  className="font-[Founders] text-[#6F00FF] text-sm sm:text-lg lg:text-2xl tracking-[2px] flex items-center px-6 sm:px-10"
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
