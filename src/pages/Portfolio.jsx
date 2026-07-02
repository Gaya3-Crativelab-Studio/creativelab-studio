import PageHero from "../components/shared/PageHero";
import MarqueeStrip from "../components/about/MarqueeStrip";
import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import portfolioData from "../data/portfolioData";
import {
  HiXMark,
  HiOutlineArrowLeft,
  HiOutlineArrowRight,
} from "react-icons/hi2";
import Footer from "../components/Footer";

const Portfolio = () => {
  const [active, setActive] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImage, setCurrentImage] = useState(0);
  const [isImageLoading, setIsImageLoading] = useState(true);
  const touchStartX = useRef(null);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = selectedProject ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedProject]);

  const nextImage = useCallback(() => {
    if (!selectedProject) return;

    setIsImageLoading(true);
    setCurrentImage((prev) =>
      prev + 1 >= selectedProject.images.length ? 0 : prev + 1,
    );
  }, [selectedProject]);

  const prevImage = useCallback(() => {
    if (!selectedProject) return;

    setIsImageLoading(true);
    setCurrentImage((prev) =>
      prev === 0 ? selectedProject.images.length - 1 : prev - 1,
    );
  }, [selectedProject]);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (!selectedProject) return;

      if (e.key === "ArrowRight") nextImage();

      if (e.key === "ArrowLeft") prevImage();

      if (e.key === "Escape") setSelectedProject(null);
    };

    window.addEventListener("keydown", handleKey);

    return () => window.removeEventListener("keydown", handleKey);
  }, [selectedProject, currentImage, nextImage, prevImage]);

  const categories = [
    "All",
    ...new Set(portfolioData.map((item) => item.category)),
  ];

  const filtered =
    active === "All"
      ? portfolioData
      : portfolioData.filter((item) => item.category === active);

  return (
    <>
      <PageHero />

      <section
        id="portfolio"
        className="bg-white py-28 overflow-hidden relative"
      >
        {/* Glow */}

        <div className="absolute top-0 -left-30 w-[320px] h-80 bg-[#6F00FF]/10 blur-[120px] rounded-full" />

        <div className="absolute bottom-0 -right-30 w-65 h-65 bg-[#C0FF00]/10 blur-[100px] rounded-full" />

        <div className="max-w-362.5 mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          {/* Heading */}

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-18"
          >
            <p className="font-[Nexa] uppercase tracking-[6px] text-[#6F00FF] text-sm mb-5">
              OUR PORTFOLIO
            </p>

            <h2 className="font-[Founders] text-[#111111] text-5xl lg:text-7xl leading-[0.95]">
              Crafting experiences
              <br />
              that inspire
              <span className="text-[#6F00FF]">.</span>
            </h2>

            <p className="font-[Nexa] text-[#555555] max-w-180 mx-auto mt-8 leading-8">
              Selected work built with strategy, creativity, and elevated visual
              storytelling.
            </p>
          </motion.div>

          {/* Filters */}

          <div className="flex flex-wrap justify-center gap-4 mb-18">
            {categories.map((item) => (
              <button
                key={item}
                onClick={() => setActive(item)}
                className={`px-7 py-3 rounded-full font-[Nexa] border duration-300 cursor-pointer ${
                  active === item
                    ? "bg-[#6F00FF] text-white border-[#6F00FF]"
                    : "bg-white text-black border-[#DDD6FE] hover:text-[#6F00FF] hover:bg-[#F3EEFF] hover:border-[#6F00FF]"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Grid */}

          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filtered.map((item) => (
                <motion.div
                  layout
                  key={item.id}
                  initial={{ opacity: 0, y: 60 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  onClick={() => {
                    setSelectedProject(item);
                    setCurrentImage(0);
                    setIsImageLoading(true);
                  }}
                  className="group relative overflow-hidden rounded-2xl cursor-pointer bg-[#F8F8F8] shadow-[0_12px_45px_rgba(0,0,0,0.08)] duration-500 hover:scale-[0.97]"
                >
                  <img
                    src={item.images?.[0] || item.image}
                    alt={item.title}
                    loading="lazy"
                    decoding="async"
                    className="h-87.5 w-full object-cover duration-700 group-hover:scale-110"
                  />

                  {/* Overlay */}

                  <div className="absolute inset-0 bg-linear-to-t from-black/95 via-black/35 to-transparent opacity-0 duration-500 group-hover:opacity-100" />

                  {/* Category */}

                  <span className="absolute top-6 left-6 bg-[#6F00FF] text-white px-5 py-2 rounded-full font-[Nexa] text-sm opacity-0 translate-y-4 duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                    {item.category}
                  </span>

                  {/* Title */}

                  <div className="absolute bottom-8 left-8 right-8 opacity-0 translate-y-10 duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                    <h3 className="font-[Founders] text-white text-3xl lg:text-4xl leading-tight">
                      {item.title}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 z-999 flex items-center justify-center overflow-y-auto bg-[rgba(12,12,18,0.75)] px-2 py-3 backdrop-blur-[18px] sm:px-3 sm:py-4 lg:px-4"
            >
              <button
                aria-label="Close preview"
                onClick={() => setSelectedProject(null)}
                className="absolute right-3 top-3 z-30 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-white/20 bg-white/10 text-white shadow-[0_12px_40px_rgba(0,0,0,0.25)] backdrop-blur-xl transition duration-300 hover:-rotate-6 hover:scale-105 hover:bg-white/20 sm:right-4 sm:top-4 sm:h-12 sm:w-12 md:h-14 md:w-14"
              >
                <HiXMark size={20} className="sm:size-22 md:size-24" />
              </button>

              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 140,
                  damping: 22,
                  mass: 0.8,
                }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-[95vw] max-w-275 overflow-hidden rounded-4xl border border-white/10 bg-[rgba(255,255,255,0.08)] p-2 shadow-[0_30px_120px_rgba(0,0,0,0.3)] backdrop-blur-xl sm:w-[90vw] sm:max-w-262.5 sm:p-3 md:max-w-275 lg:max-w-280 lg:p-3"
              >
                <div
                  className="relative flex flex-col gap-3"
                  onTouchStart={(e) => {
                    touchStartX.current = e.touches[0].clientX;
                  }}
                  onTouchEnd={(e) => {
                    if (touchStartX.current === null) return;
                    const delta =
                      e.changedTouches[0].clientX - touchStartX.current;
                    if (delta > 70) prevImage();
                    if (delta < -70) nextImage();
                    touchStartX.current = null;
                  }}
                >
                  <div className="relative h-[72vh] overflow-hidden rounded-[28px] bg-[#0F071F] sm:h-[74vh] md:h-[76vh]">
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={`${selectedProject.id}-${currentImage}`}
                        src={
                          selectedProject.images?.[currentImage] ||
                          selectedProject.image
                        }
                        alt={selectedProject.title}
                        initial={{ opacity: 0, scale: 1.02 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.02 }}
                        transition={{ duration: 0.35, ease: "easeOut" }}
                        onLoad={() => setIsImageLoading(false)}
                        className="h-full w-full object-cover"
                      />
                    </AnimatePresence>

                    {isImageLoading && (
                      <div className="absolute inset-0 animate-pulse bg-[#1f103a]" />
                    )}

                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.08)_0%,rgba(0,0,0,0.18)_35%,rgba(0,0,0,0.8)_100%)]" />

                    <div className="absolute inset-x-0 bottom-0 flex flex-col justify-end p-4 sm:p-5 lg:p-6">
                      <div className="mb-3 flex flex-wrap items-center gap-2 sm:gap-3">
                        <span className="rounded-full border border-white/20 bg-white/12 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.28em] text-white/90 backdrop-blur-md sm:text-[11px]">
                          {selectedProject.category}
                        </span>
                        <span className="rounded-full border border-white/15 bg-black/25 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.3em] text-white/80 backdrop-blur-md sm:text-[11px]">
                          {currentImage + 1} /{" "}
                          {selectedProject.images?.length || 1}
                        </span>
                      </div>

                      <div className="max-w-2xl">
                        <h3 className="font-[Founders] text-2xl leading-tight text-white sm:text-3xl lg:text-4xl">
                          {selectedProject.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  {selectedProject.images?.length > 1 && (
                    <div className="flex items-center justify-center gap-2 px-1 sm:gap-3">
                      <motion.button
                        whileHover={{ scale: 1.04, y: -1 }}
                        transition={{ duration: 0.2 }}
                        aria-label="Previous image"
                        onClick={prevImage}
                        className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white shadow-[0_12px_40px_rgba(0,0,0,0.2)] backdrop-blur-xl transition duration-300 hover:bg-white/20 sm:h-12 sm:w-12 md:h-14 md:w-14"
                      >
                        <HiOutlineArrowLeft
                          size={20}
                          className="sm:size-22 md:size-24"
                        />
                      </motion.button>

                      <div className="flex max-w-full items-center justify-center gap-2 overflow-x-auto px-1 pb-1 sm:gap-3">
                        {selectedProject.images.map((img, index) => (
                          <motion.button
                            key={index}
                            whileHover={{ scale: 1.03, y: -2 }}
                            transition={{ duration: 0.2 }}
                            onClick={() => {
                              setCurrentImage(index);
                              setIsImageLoading(true);
                            }}
                            className={`relative h-16 shrink-0 cursor-pointer overflow-hidden rounded-2xl border transition-all duration-300 sm:h-20 md:h-24 ${
                              currentImage === index
                                ? "w-20 border-[#6F00FF] shadow-[0_0_0_1px_rgba(111,0,255,0.2),0_10px_30px_rgba(111,0,255,0.18)] sm:w-24 md:w-28"
                                : "w-16 border-white/20 opacity-70 hover:opacity-100 sm:w-20 md:w-24"
                            }`}
                          >
                            <img
                              src={img}
                              alt=""
                              className="h-full w-full object-cover"
                            />
                          </motion.button>
                        ))}
                      </div>

                      <motion.button
                        whileHover={{ scale: 1.04, y: -1 }}
                        transition={{ duration: 0.2 }}
                        aria-label="Next image"
                        onClick={nextImage}
                        className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-white/20 bg-white/10 text-white shadow-[0_12px_40px_rgba(0,0,0,0.2)] backdrop-blur-xl transition duration-300 hover:bg-white/20 sm:h-12 sm:w-12 md:h-14 md:w-14"
                      >
                        <HiOutlineArrowRight
                          size={20}
                          className="sm:size-22 md:size-24"
                        />
                      </motion.button>
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      <MarqueeStrip />
      <Footer />
    </>
  );
};

export default Portfolio;
