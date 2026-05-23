import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

// ── CountUp Hook ──────────────────────────
function useCountUp(end, duration = 2000, trigger = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!trigger) return;
    let start = null;
    const step = (ts) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(Math.floor(eased * end));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [end, duration, trigger]);
  return count;
}

// ── Stat Card ─────────────────────────────
function StatCard({ value, suffix, label, delay, trigger }) {
  const count = useCountUp(value, 2000, trigger);

  return (
    <motion.div
      className="relative flex flex-col items-center text-center py-6 px-4 border-r border-[#ECE7FF] last:border-r-0 overflow-hidden group"
      initial={{ opacity: 0, y: 20 }}
      animate={trigger ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {/* Hover glow */}
      <div className="absolute inset-0 bg-[#6F00FF]/0 group-hover:bg-[#6F00FF]/3 transition-colors duration-300" />

      <span
        className="font-[Founders] text-[#6F00FF] leading-none mb-2"
        style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
      >
        {count}
        {suffix}
      </span>
      <span className="font-[Nexa] text-[#999] text-xs tracking-[2px] uppercase leading-5">
        {label}
      </span>

      {/* Animated bottom bar */}
      <motion.div
        className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-[#6F00FF] to-[#C0FF00]"
        initial={{ width: "0%" }}
        animate={trigger ? { width: "100%" } : {}}
        transition={{ duration: 1.2, delay: delay + 0.3, ease: "easeOut" }}
      />
    </motion.div>
  );
}

// ── Variants ──────────────────────────────
const fadeLeft = {
  hidden: { opacity: 0, x: -50 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};
const fadeRight = {
  hidden: { opacity: 0, x: 50 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14, delayChildren: 0.1 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const paragraphs = [
  "At CreativeLab Studio, we believe design should do more than simply look beautiful — it should communicate, connect, and create emotion.",
  "We work closely with brands to craft identities and experiences that feel elevated, memorable, and strategically aligned with their vision.",
  "From visual identity systems to cinematic websites and creative campaigns, every detail is carefully designed to reflect authenticity, sophistication, and impact.",
];

const stats = [
  { value: 120, suffix: "+", label: "Projects\nCrafted", delay: 0 },
  { value: 45, suffix: "+", label: "Brands\nCollaborated", delay: 0.12 },
  { value: 5, suffix: "+", label: "Creative\nIndustries", delay: 0.24 },
  { value: 999, suffix: "+", label: "Ideas & Possibilitiees", delay: 0.24 },
];

// ── Main Component ────────────────────────
const StandOut = () => {
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-80px" });

  return (
    <section className="bg-white py-20 sm:py-28 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-16">
        {/* Section headline */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mb-12 lg:mb-16"
        >
          <motion.h2
            variants={fadeUp}
            className="font-[Founders] text-[#111] leading-[1] max-w-3xl"
            style={{ fontSize: "clamp(2.2rem, 5vw, 3.8rem)" }}
          >
            Creativity with purpose.{" "}
            <motion.span
              className="text-[#6F00FF] text-bold inline-block"
              animate={{ rotate: [0, 15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              ✳ 
            </motion.span>
              Design with meaning.
          </motion.h2>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* LEFT — image with video badge */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="relative"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
              className="rounded-[24px] overflow-hidden aspect-[4/3] bg-[#ECE7FF]"
            >
              <img
                src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1200"
                alt="Creative team at work"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Video / Story badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: 0.5,
                ease: [0.34, 1.56, 0.64, 1],
              }}
              whileHover={{ scale: 1.05 }}
              className="absolute -bottom-5 -right-5 bg-[#6F00FF] rounded-[16px] px-5 py-3.5 flex items-center gap-3 shadow-[0_12px_32px_rgba(111,0,255,0.35)] cursor-pointer"
            >
              <motion.div
                className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {/* Play icon */}
                <svg width="10" height="13" viewBox="0 0 10 13" fill="white">
                  <path d="M1 1.5l8 4.5-8 4.5V1.5z" />
                </svg>
              </motion.div>
              <span className="font-[Nexa] text-white text-xs tracking-[2px] uppercase">
                Watch our story
              </span>
            </motion.div>
          </motion.div>

          {/* RIGHT — body text + stats */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
          >
            {/* Label */}
            <motion.p
              className="font-[Nexa] text-[#6F00FF] text-xs tracking-[4px] uppercase mb-5 flex items-center gap-3"
              variants={fadeUp}
            >
              <span className="w-6 h-px bg-[#6F00FF] inline-block" />
              About CreativeLab
            </motion.p>

            {/* Paragraphs */}
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {paragraphs.map((text, i) => (
                <motion.p
                  key={i}
                  variants={fadeUp}
                  className="font-[Nexa] text-[#555] text-base sm:text-lg leading-[1.95] mb-5 last:mb-0"
                >
                  {text}
                </motion.p>
              ))}
            </motion.div>

            {/* Stats block */}
            <motion.div
              ref={statsRef}
              className="mt-10 grid grid-cols-3 border border-[#ECE7FF] rounded-[20px] overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {stats.map((s, i) => (
                <StatCard key={i} {...s} trigger={statsInView} />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StandOut;
