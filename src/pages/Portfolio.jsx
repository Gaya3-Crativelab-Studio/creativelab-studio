import PageHero from "../components/shared/PageHero";
import MarqueeStrip from "../components/about/MarqueeStrip";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import portfolioData from "../data/portfolioData";
import { HiOutlineXMark } from "react-icons/hi2";
import Footer from "../components/Footer";

const Portfolio = () => {
  const [active, setActive] = useState("All");
  const [selected, setSelected] = useState(null);

  // Lock background scroll when modal opens
  useEffect(() => {
    if (selected) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selected]);

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
        {/* Glow Effects */}

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
                    : "bg-white text-black border-[#DDD6FE] hover:text-[#6F00FF] hover:bg-[#CCCCFF] hover:border-[#6F00FF]"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Portfolio Grid */}

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
                  onClick={() => setSelected(item)}
                  className="group relative overflow-hidden rounded-2xl cursor-pointer bg-[#F8F8F8] shadow-[0_12px_45px_rgba(0,0,0,0.08)] duration-500 hover:scale-[0.97]"
                >
                  <img
                    src={item.image}
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

        <AnimatePresence>
          {selected && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
              className="fixed inset-0 z-[999] bg-black/90 backdrop-blur-md flex items-center justify-center p-6"
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-8 right-8 text-white z-10 cursor-pointer"
              >
                <HiOutlineXMark size={42} />
              </button>

              <motion.div
                initial={{ scale: 0.92 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.92 }}
                transition={{ duration: 0.25 }}
                onClick={(e) => e.stopPropagation()}
                className="max-w-[1100px] w-full"
              >
                <img
                  src={selected.image}
                  alt={selected.title}
                  className="rounded-[28px] w-full max-h-[85vh] object-contain"
                />

                <h3 className="font-[Founders] text-white text-4xl lg:text-5xl mt-6">
                  {selected.title}
                </h3>
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
