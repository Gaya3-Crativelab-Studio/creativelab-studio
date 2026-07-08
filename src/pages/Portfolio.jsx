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

        {/* ============ LIGHTBOX-STYLE PREVIEW MODAL ============ */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 z-999 flex items-center justify-center px-4 sm:px-6"
              style={{ backgroundColor: "rgba(10,10,15,0.82)" }}
            >
              {/* Close button - top right, page level */}
              <motion.button
                whileHover={{ scale: 1.08, backgroundColor: "#6F00FF" }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                aria-label="Close preview"
                onClick={() => setSelectedProject(null)}
                className="absolute right-5 top-5 z-30 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full text-white sm:right-8 sm:top-8 sm:h-12 sm:w-12"
                style={{ backgroundColor: "rgba(20,20,25,0.55)" }}
              >
                <HiXMark size={22} className="text-white" />
              </motion.button>

              {/* Prev - floats at far edge of viewport */}
              {selectedProject.images?.length > 1 && (
                <motion.button
                  whileHover={{ scale: 1.08, backgroundColor: "#6F00FF" }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  aria-label="Previous image"
                  onClick={(e) => {
                    e.stopPropagation();
                    prevImage();
                  }}
                  className="absolute left-3 top-1/2 z-30 flex h-12 w-12 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full text-white sm:left-6 sm:h-14 sm:w-14 lg:left-10"
                  style={{ backgroundColor: "rgba(20,20,25,0.55)" }}
                >
                  <HiOutlineArrowLeft size={22} className="text-white" />
                </motion.button>
              )}

              {/* Next - floats at far edge of viewport */}
              {selectedProject.images?.length > 1 && (
                <motion.button
                  whileHover={{ scale: 1.08, backgroundColor: "#6F00FF" }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  aria-label="Next image"
                  onClick={(e) => {
                    e.stopPropagation();
                    nextImage();
                  }}
                  className="absolute right-3 top-1/2 z-30 flex h-12 w-12 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full text-white sm:right-6 sm:h-14 sm:w-14 lg:right-10"
                  style={{ backgroundColor: "rgba(20,20,25,0.55)" }}
                >
                  <HiOutlineArrowRight size={22} className="text-white" />
                </motion.button>
              )}

              {/* Image stage - large, centered, contained, no crop */}
              <motion.div
                initial={{ scale: 0.96, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.96, opacity: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 160,
                  damping: 24,
                  mass: 0.8,
                }}
                onClick={(e) => e.stopPropagation()}
                className="relative flex h-[88vh] w-auto max-w-[85vw] items-center justify-center"
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
                <AnimatePresence mode="wait">
                  <motion.img
                    key={`${selectedProject.id}-${currentImage}`}
                    src={
                      selectedProject.images?.[currentImage] ||
                      selectedProject.image
                    }
                    alt={selectedProject.title}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    onLoad={() => setIsImageLoading(false)}
                    className="max-h-[88vh] max-w-[85vw] rounded-2xl object-contain shadow-[0_30px_90px_rgba(0,0,0,0.5)]"
                  />
                </AnimatePresence>

                {isImageLoading && (
                  <div className="absolute inset-0 animate-pulse rounded-2xl bg-[#15151C]" />
                )}
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