import PageHero from "../components/shared/PageHero";
import MarqueeStrip from "../components/about/MarqueeStrip";
import { useState, useEffect, useCallback } from "react";
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

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = selectedProject ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedProject]);

  const nextImage = useCallback(() => {
    if (!selectedProject) return;

    setCurrentImage((prev) =>
      prev + 1 >= selectedProject.images.length ? 0 : prev + 1,
    );
  }, [selectedProject]);

  const prevImage = useCallback(() => {
    if (!selectedProject) return;

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

        {/* Modal */}

        {/* Modal */}

        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 z-[999] bg-white/20 backdrop-blur-xl flex items-center justify-center p-3 lg:p-8"
            >
              {/* Close */}

              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 lg:top-8 lg:right-8 bg-black/50 hover:bg-[#6F00FF] rounded-full shadow-md text-white z-30 cursor-pointer hover:rotate-90 duration-300"
              >
                <HiXMark size={40}/>
              </button>

              <motion.div
                initial={{ scale: 0.94, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.94, opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
                className="w-full max-w-[1100px] flex flex-col items-center"
              >
                {/* Main Image */}

                {/* Main Image */}

                <div className="relative w-full h-[65vh] flex items-center justify-center">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={currentImage}
                      src={
                        selectedProject.images?.[currentImage] ||
                        selectedProject.image
                      }
                      alt={selectedProject.title}
                      initial={{ opacity: 0, scale: 0.97 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.97 }}
                      transition={{ duration: 0.35 }}
                      className=" w-auto max-w-[92vw] max-h-full  lg:max-w-[80vw] lg:max-h-[72vh] object-contain rounded-[28px] bg-[#111111] shadow-[0_20px_80px_rgba(0,0,0,0.45)]"
                    />
                  </AnimatePresence>

                  {/* Left Arrow */}

                  {selectedProject.images?.length > 1 && (
                    <button
                      onClick={prevImage}
                      className="absolute left-2 lg:left-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 lg:w-14 lg:h-14 rounded-full bg-black/50 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white hover:bg-[#6F00FF] duration-300 cursor-pointer"
                    >
                      <HiOutlineArrowLeft size={24} />
                    </button>
                  )}

                  {/* Right Arrow */}

                  {selectedProject.images?.length > 1 && (
                    <button
                      onClick={nextImage}
                      className="absolute right-2 lg:right-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 lg:w-14 lg:h-14 rounded-full bg-black/50 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white hover:bg-[#6F00FF] duration-300 cursor-pointer"
                    >
                      <HiOutlineArrowRight size={24} />
                    </button>
                  )}
                </div>

                {/* Thumbnails */}

                {selectedProject.images?.length > 1 && (
                  <div className="flex gap-3 mt-6 overflow-x-auto max-w-full pb-2 px-1 scrollbar-hide">
                    {selectedProject.images.map((img, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImage(index)}
                        className={`relative shrink-0 min-w-[90px] lg:min-w-[110px] h-20 lg:h-24 rounded-2xl overflow-hidden border-2 duration-300 ${
                          currentImage === index
                            ? "border-[#6F00FF] scale-105"
                            : "border-transparent opacity-50 hover:opacity-100"
                        }`}
                      >
                        <img
                          src={img}
                          alt=""
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}

                {/* Title */}

                <div className="mt-8 text-center">
                  <h3 className="font-[Founders] text-black text-3xl lg:text-5xl leading-tight">
                    {selectedProject.title}
                  </h3>

                  <p className="font-[Nexa] text-purple-500 mt-3 text-base lg:text-lg tracking-wide">
                    {selectedProject.category}
                  </p>
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
