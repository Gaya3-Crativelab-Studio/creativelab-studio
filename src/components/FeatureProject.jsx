import { useRef, useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import projects from "../data/projects";

gsap.registerPlugin(ScrollTrigger);

export default function FeatureProject() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const progressRef = useRef(null);
  const navigate = useNavigate();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const section = sectionRef.current;
      const container = containerRef.current;
      const track = trackRef.current;

      if (!section || !container || !track) return;

      const getMaxScroll = () =>
        Math.max(track.scrollWidth - container.clientWidth, 0);

      const refreshLayout = () => {
        ScrollTrigger.refresh();
      };

      const scrollTween = gsap.to(track, {
        x: () => -getMaxScroll(),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${getMaxScroll()}`,
          pin: true,
          scrub: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          fastScrollEnd: true,
          onUpdate: (self) => {
            if (progressRef.current) {
              progressRef.current.style.width = `${self.progress * 100}%`;
            }
          },
        },
      });

      window.addEventListener("resize", refreshLayout);

      const images = Array.from(track.querySelectorAll("img"));
      const pendingImages = images.filter((img) => !img.complete);

      pendingImages.forEach((img) =>
        img.addEventListener("load", refreshLayout, { once: true }),
      );

      if (document.fonts?.ready) {
        document.fonts.ready.then(refreshLayout).catch(() => {});
      }

      refreshLayout();

      return () => {
        window.removeEventListener("resize", refreshLayout);
        pendingImages.forEach((img) =>
          img.removeEventListener("load", refreshLayout),
        );
        scrollTween.scrollTrigger?.kill();
        scrollTween.kill();
      };
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="featured"
      className="relative bg-[#ECE7FF] h-screen overflow-hidden flex flex-col"
    >
      {/* Heading */}
      <div className="px-5 sm:px-8 lg:px-10 mt-10 sm:mt-16 lg:mt-10 mb-3 sm:mb-10 lg:mb-16">
        <h2 className="font-[Founders] text-center text-[#6F00FF] text-3xl sm:text-5xl lg:text-7xl leading-[1.15] sm:leading-[1.05] lg:leading-[0.95]">
          Selected projects & visual stories
          <span>.</span>
        </h2>

        <p className="font-nexa font-light text-sm sm:text-base lg:text-xl text-[#111111] max-w-[300px] sm:max-w-[600px] lg:max-w-[1100px] mx-auto mt-3 sm:mt-5 lg:mt-6 leading-6 sm:leading-7 lg:leading-8 text-center px-4">
          A curated collection of branding, digital experiences, and visual
          systems designed for modern brands across fashion, beauty, lifestyle,
          hospitality, and emerging businesses.
        </p>
      </div>

      {/* Cards */}
      <div
        ref={containerRef}
        className="flex-1 min-h-0 flex items-center overflow-hidden"
      >
        <div
          ref={trackRef}
          className="flex items-center gap-4 sm:gap-8 lg:gap-8 pl-[5vw] pr-[5vw] sm:pl-[11vw] sm:pr-[11vw] lg:pl-10 lg:pr-0 p-5 will-change-transform"
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative shrink-0
              w-[88vw] max-w-[420px] aspect-[4/3]
              sm:w-[78vw] sm:max-w-[680px] sm:aspect-[16/10]
              lg:w-[480px] lg:h-[340px] lg:aspect-auto lg:max-w-none
              rounded-[24px] sm:rounded-[28px] lg:rounded-[32px]
              overflow-hidden
              shadow-[0_20px_55px_rgba(111,0,255,0.10)]
              cursor-pointer
              transition-transform duration-300
              hover:-translate-y-2.5"
            >
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover duration-700 group-hover:scale-110"
              />

              {/* <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" /> */}

              <div className="absolute bottom-5 left-5 right-5 sm:bottom-6 sm:left-6 sm:right-6">
                <h3 className="font-[Founders] text-white text-xl sm:text-2xl lg:text-4xl mb-1.5 sm:mb-2 leading-tight">
                  {project.title}
                </h3>

                <p className="font-nexaw text-[#C7FF3F] text-sm sm:text-base leading-snug">
                  {project.category}
                </p>
              </div>

              <div className="absolute top-4 right-4 sm:top-5 sm:right-5 w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/20 backdrop-blur-xl flex items-center justify-center text-white/70 text-xs sm:text-sm">
                {String(index + 1).padStart(2, "0")}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Progress */}
      <div className="px-5 sm:px-8 lg:px-10 mt-3 sm:mt-5 lg:mt-4 pb-3 sm:pb-5">
        <div className="h-0.5 bg-black/10 rounded-full overflow-hidden">
          <div ref={progressRef} className="h-full w-0 bg-[#6F00FF]" />
        </div>

        {/* Button */}
        <div className="flex justify-center mt-4 sm:mt-5">
          <button
            onClick={() => navigate("/portfolio")}
            className="bg-[#7B68EE]
            hover:bg-[#6F00FF]
            text-white
            font-[Nexa]
            font-bold
            px-8 sm:px-10
            py-3.5 sm:py-4
            min-h-[44px]
            inline-flex
            items-center
            justify-center
            rounded-full
            shadow-[0_4px_14px_rgba(111,0,255,0.25)]
            hover:shadow-[0_6px_18px_rgba(111,0,255,0.35)]
            duration-300
            hover:scale-105
            cursor-pointer"
          >
            View All
          </button>
        </div>
      </div>
      {/*  */}
    </section>
  );
}
