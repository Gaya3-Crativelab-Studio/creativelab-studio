import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

import projects from "../data/projects";
import { useNavigate } from "react-router-dom";

const CARD_W = 620;
const GAP = 32;
const EXTRA_SPACE = 200;

export default function FeatureProject() {
  const sectionRef = useRef(null);
  const cardsRef = useRef(null);

  const navigate = useNavigate();

  const [hoveringCards, setHoveringCards] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const maxX = (CARD_W + GAP) * (projects.length - 3) + EXTRA_SPACE;

  const rawX = useTransform(scrollYProgress, [0, 1], [0, -maxX]);

  const smoothX = useSpring(rawX, {
    stiffness: 85,
    damping: 22,
  });

  const progressWidth = useTransform(smoothX, [0, -maxX], ["0%", "100%"]);

  useEffect(() => {
    const handleWheel = (e) => {
      const cards = cardsRef.current;

      if (!cards) return;

      const isInsideCards =
        e.clientX >= cards.getBoundingClientRect().left &&
        e.clientX <= cards.getBoundingClientRect().right &&
        e.clientY >= cards.getBoundingClientRect().top &&
        e.clientY <= cards.getBoundingClientRect().bottom;

      if (!isInsideCards) return;

      const section = sectionRef.current;

      if (!section) return;

      const rect = section.getBoundingClientRect();

      const visible = rect.top <= 0 && rect.bottom >= window.innerHeight;

      if (!visible) return;

      e.preventDefault();

      window.scrollBy({
        top: e.deltaY,
        behavior: "auto",
      });
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="featured"
      className="relative bg-[#ECE7FF] h-screen"
      style={{
        height: `${100 + projects.length * 75}vh`,
      }}
    >
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col ">
        <div className="px-6 lg:px-10 flex flex-col align-items mb-16 mt-10">
          <h2 className="font-[Founders] text-center text-[#6F00FF] mt-5 pt-5 text-4xl sm:text-6xl lg:text-7xl leading-[0.95]">
            Selected projects & visual stories
            <span className="text-[#6F00FF]">.</span>
          </h2>

          <p className="font-[Nexa] text-sm sm:text-base lg:text-xl text-[#111111] max-w-[320px] sm:max-w-[650px] lg:max-w-[1100px] mx-auto mt-6 leading-7 sm:leading-8 text-center px-4">
            A curated collection of branding, digital experiences, and visual
            systems designed for modern brands across fashion, beauty,
            lifestyle, hospitality, and emerging businesses.
          </p>
        </div>

        <motion.div
          ref={cardsRef}
          onMouseEnter={() => setHoveringCards(true)}
          onMouseLeave={() => setHoveringCards(false)}
          style={{
            x: smoothX,
          }}
          className="flex gap-8 pl-6 lg:pl-10"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -10,
              }}
              transition={{
                duration: 0.35,
              }}
              className="group relative shrink-0 w-70 sm:w-105 lg:w-120 h-72 sm:h-85 rounded-4xl overflow-hidden shadow-[0_20px_55px_rgba(111,0,255,0.10)] cursor-pointer"
            >
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent" />

              <div className="absolute bottom-8 left-8 right-8">
                <h3 className="font-[Founders] text-white text-3xl lg:text-4xl mb-2">
                  {project.title}
                </h3>

                <p className="font-[Nexa] text-[#C7FF3F]">{project.category}</p>
              </div>

              <div className="absolute top-6 right-6 w-10 h-10 rounded-full border border-white/20 backdrop-blur-xl flex items-center justify-center text-white/70 text-sm">
                {String(index + 1).padStart(2, "0")}
              </div>
            </motion.div>
          ))}

          <div className="w-62.5 sm:w-87.5 lg:w-125 shrink-0" />
        </motion.div>

        <div className="px-6 lg:px-10 mt-12">
          <div className="h-0.5 bg-black/10 rounded-full overflow-hidden">
            <motion.div
              style={{
                width: progressWidth,
              }}
              className="h-full bg-[#6F00FF]"
            />
          </div>

          <div className="flex justify-center mt-10">
            <button
              onClick={() => navigate("/portfolio")}
              className="bg-[#7B68EE] hover:bg-[#6F00FF] border border-white/90 text-white font-[Nexa] font-bold px-10 py-4 rounded-full shadow-[0_0_0_1px_rgba(255,255,255,0.15),0_12px_35px_rgba(123,104,238,0.30),0_0_25px_rgba(123,104,238,0.18)] hover:shadow-[0_0_0_1px_rgba(255,255,255,0.2),0_18px_45px_rgba(111,0,255,0.40)] duration-300 hover:scale-105 cursor-pointer"
            >
              View All
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
