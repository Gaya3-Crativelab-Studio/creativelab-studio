import { useRef, useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import projects from "../data/projects";

gsap.registerPlugin(ScrollTrigger);

export default function FeatureProject() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null); // the clipped viewport the cards scroll inside
  const trackRef = useRef(null); // the flex row of cards being translated
  const progressRef = useRef(null);
  const navigate = useNavigate();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const section = sectionRef.current;
      const container = containerRef.current;
      const track = trackRef.current;
      if (!section || !container || !track) return;

      // Distance = how much wider the track is than the container that
      // actually clips it — NOT the browser window. This is what makes the
      // last card's right edge land exactly on the container's right edge,
      // with no trailing spacer needed.
      const getMaxScroll = () =>
        Math.max(track.scrollWidth - container.clientWidth, 0);

      const updateHeight = () => {
        const maxScroll = getMaxScroll();
        section.style.height = `${window.innerHeight + maxScroll}px`;
        // console.log({
        //   trackWidth: track.scrollWidth,
        //   containerWidth: container.clientWidth,
        //   maxScroll,
        //   sectionHeight: section.offsetHeight,
        //   viewportHeight: window.innerHeight,
        // });
      };

      const updateLayout = () => {
        updateHeight();
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
          onUpdate: (self) => {
            if (progressRef.current) {
              progressRef.current.style.width = `${self.progress * 100}%`;
            }
          },
        },
      });

      window.addEventListener("resize", updateLayout);

      const images = Array.from(track.querySelectorAll("img"));
      const pendingImages = images.filter((img) => !img.complete);
      pendingImages.forEach((img) =>
        img.addEventListener("load", updateLayout, { once: true }),
      );

      // Web fonts swapping in can change text width/wrapping inside the
      // cards, which changes track.scrollWidth — refresh once they land.
      if (document.fonts?.ready) {
        document.fonts.ready.then(updateLayout).catch(() => {});
      }

      updateLayout();

      return () => {
        window.removeEventListener("resize", updateLayout);
        pendingImages.forEach((img) =>
          img.removeEventListener("load", updateLayout),
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
      <div className="px-6 lg:px-10 mt-18 lg:mt-10 mb-8 lg:mb-16">
        <h2 className="font-[Founders] text-center text-[#6F00FF] text-4xl sm:text-6xl lg:text-7xl leading-[0.95]">
          Selected projects & visual stories
          <span>.</span>
        </h2>

        <p className="font-nexa font-light text-sm sm:text-base lg:text-xl text-[#111111] max-w-[320px] sm:max-w-[650px] lg:max-w-[1100px] mx-auto mt-5 lg:mt-6 leading-7 sm:leading-8 text-center px-4">
          A curated collection of branding, digital experiences, and visual
          systems designed for modern brands across fashion, beauty, lifestyle,
          hospitality, and emerging businesses.
        </p>
      </div>

      {/* Cards */}
      <div
        ref={containerRef}
        className="flex-1 flex items-center overflow-hidden"
      >
        <div
          ref={trackRef}
          className="flex gap-6 lg:gap-8 pl-6 lg:pl-10 will-change-transform"
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative shrink-0
              w-[280px] sm:w-[420px] lg:w-[480px]
              h-[320px] sm:h-[340px]
              rounded-[32px]
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

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="font-[Founders] text-white text-3xl lg:text-4xl mb-2">
                  {project.title}
                </h3>

                <p className="font-nexaw text-[#C7FF3F]">{project.category}</p>
              </div>

              <div className="absolute top-5 right-5 w-10 h-10 rounded-full border border-white/20 backdrop-blur-xl flex items-center justify-center text-white/70 text-sm">
                {String(index + 1).padStart(2, "0")}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Progress */}
      <div className="px-6 lg:px-10 mt-4">
        <div className="h-0.5 bg-black/10 rounded-full overflow-hidden">
          <div ref={progressRef} className="h-full w-0 bg-[#6F00FF]" />
        </div>

        {/* Button */}
        <div className="flex justify-center mt-5 mb-6">
          <button
            onClick={() => navigate("/portfolio")}
            className="bg-[#7B68EE]
            hover:bg-[#6F00FF]
            text-white
            font-[Nexa]
            font-bold
            px-10
            py-4
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
    </section>
  );
}
