import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Discovery",
    desc: "Understanding brand goals, audience, positioning, and vision to uncover the true essence of your brand.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="14" cy="14" r="7" stroke="#6F00FF" strokeWidth="1.5" />
        <path
          d="M19.5 19.5l5 5"
          stroke="#6F00FF"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="14" cy="14" r="3" stroke="#C0FF00" strokeWidth="1.5" />
        <path
          d="M14 11v3M14 17v.3"
          stroke="#6F00FF"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Strategy",
    desc: "Building creative direction, visual systems, and experience planning aligned with your brand's vision.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path
          d="M4 24l7-7 4 4 8-10 5 6"
          stroke="#6F00FF"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="26" cy="6" r="2" fill="#C0FF00" />
        <path
          d="M4 28h24"
          stroke="#6F00FF"
          strokeWidth="1.2"
          strokeLinecap="round"
          opacity="0.3"
        />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Design & Dev",
    desc: "Crafting immersive visuals, cinematic websites, and creative assets with precision and artistry.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect
          x="4"
          y="4"
          width="24"
          height="24"
          rx="4"
          stroke="#6F00FF"
          strokeWidth="1.5"
        />
        <circle cx="10" cy="10" r="2" stroke="#C0FF00" strokeWidth="1.5" />
        <path d="M4 16h24" stroke="#6F00FF" strokeWidth="1.2" opacity="0.3" />
        <path
          d="M10 22l4-4 3 3 4-5"
          stroke="#6F00FF"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Refine & Launch",
    desc: "Polishing every detail and delivering impactful, cohesive brand experiences ready for the world.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path
          d="M16 4l2.5 7.5H26l-6 4.5 2.5 7.5L16 19l-6.5 4.5 2.5-7.5L6 11.5h7.5z"
          stroke="#6F00FF"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M16 22v7M12 26l4 3 4-3"
          stroke="#C0FF00"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      delay: i * 0.15,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

const Process = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative bg-[#ECE7FF] py-24 sm:py-32 overflow-hidden">
      {/* Floating blur blobs */}
      <motion.div
        className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-[#6F00FF]/8 blur-[130px] pointer-events-none"
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-32 -right-32 w-[400px] h-[400px] rounded-full bg-[#C0FF00]/10 blur-[120px] pointer-events-none"
        animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-[#7B68EE]/5 blur-[100px] pointer-events-none"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <div className="relative z-10 max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-16">
        {/* ── Header ── */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-20 sm:mb-24"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.15 } },
          }}
        >
          <motion.p
            className="font-[Nexa] uppercase tracking-[6px] text-[#6F00FF] text-xs sm:text-sm mb-5"
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
          >
            Our Process
          </motion.p>

          <motion.h2
            className="font-[Founders] text-[#111] text-4xl sm:text-5xl lg:text-6xl leading-[1.02] mb-6"
            variants={{
              hidden: { opacity: 0, y: 30 },
              show: { opacity: 1, y: 0, transition: { duration: 0.75 } },
            }}
          >
            How ideas become{" "}
            <span className="italic text-[#6F00FF]">meaningful</span>
            <br />
            experiences
            <span className="text-[#6F00FF]">.</span>
          </motion.h2>

          <motion.p
            className="font-[Nexa] text-[#555] text-base sm:text-lg leading-[1.9]"
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
            }}
          >
            Our process blends strategy, storytelling, and design thinking into
            experiences that feel elevated, intentional, and memorable.
          </motion.p>
        </motion.div>

        {/* ── Timeline connector — desktop only ── */}
        <div className="hidden lg:block relative mb-[-28px] z-10 px-[calc(1400px/8)]">
          <div className="mx-auto max-w-[1400px] px-16">
            <motion.div
              className="h-[1px] bg-gradient-to-r from-transparent via-[#CCCCFF] to-transparent"
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
            />
          </div>
        </div>

        {/* ── Cards ── */}
        <div
          ref={ref}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6"
        >
          {steps.map((step, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              whileHover={{
                y: -10,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              className="relative bg-white/60 backdrop-blur-[20px] border border-white/80 rounded-[32px] p-8 sm:p-9 flex flex-col gap-6 shadow-[0_8px_40px_rgba(111,0,255,0.07)] hover:shadow-[0_24px_60px_rgba(111,0,255,0.14)] transition-shadow duration-500 overflow-hidden group"
            >
              {/* Card inner glow on hover */}
              <motion.div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-[#6F00FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Top — number + icon */}
              <div className="flex items-start justify-between">
                {/* Premium large number */}
                <span
                  className="font-[Founders] text-[#6F00FF]/10 leading-none select-none pointer-events-none"
                  style={{ fontSize: "5.5rem" }}
                >
                  {step.number}
                </span>

                {/* Icon box */}
                <motion.div
                  className="w-[56px] h-[56px] rounded-2xl bg-[#ECE7FF] border border-[#CCCCFF] flex items-center justify-center flex-shrink-0 mt-2 shadow-[0_4px_16px_rgba(111,0,255,0.1)]"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  {step.icon}
                </motion.div>
              </div>

              {/* Step label */}
              <div className="flex items-center gap-3 -mt-3">
                <motion.div
                  className="h-[2px] bg-gradient-to-r from-[#6F00FF] to-[#C0FF00] rounded-full"
                  initial={{ width: 0 }}
                  animate={inView ? { width: "2rem" } : {}}
                  transition={{ duration: 0.8, delay: i * 0.15 + 0.5 }}
                />
                <span className="font-[Nexa] text-[#6F00FF] text-xs tracking-[4px] uppercase">
                  Step {step.number}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-[Founders] text-[#111] text-2xl sm:text-3xl leading-[1.05] -mt-2">
                {step.title}
              </h3>

              {/* Desc */}
              <p className="font-[Nexa] text-[#555] text-sm sm:text-base leading-[1.85]">
                {step.desc}
              </p>

              {/* Bottom lime dot accent */}
              <div className="mt-auto flex items-center gap-2">
                <motion.div
                  className="w-2 h-2 rounded-full bg-[#C0FF00]"
                  animate={{ scale: [1, 1.4, 1], opacity: [0.6, 1, 0.6] }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.4,
                  }}
                />
                <motion.div
                  className="h-[1px] bg-gradient-to-r from-[#C0FF00]/40 to-transparent flex-1"
                  initial={{ scaleX: 0, originX: 0 }}
                  animate={inView ? { scaleX: 1 } : {}}
                  transition={{ duration: 0.8, delay: i * 0.15 + 0.6 }}
                />
              </div>

              {/* Bottom sweep border */}
              <motion.div
                className="absolute bottom-0 left-0 h-[3px] rounded-b-[32px] bg-gradient-to-r from-[#6F00FF] to-[#C0FF00]"
                initial={{ width: "0%" }}
                animate={inView ? { width: "100%" } : {}}
                transition={{
                  duration: 1,
                  delay: i * 0.2 + 0.4,
                  ease: "easeOut",
                }}
              />

              {/* Connector dot — desktop only */}
              {i < steps.length - 1 && (
                <div className="hidden lg:flex absolute -right-3.5 top-8 z-20 w-7 h-7 rounded-full bg-white border-2 border-[#CCCCFF] items-center justify-center shadow-[0_4px_12px_rgba(111,0,255,0.12)]">
                  <div className="w-2 h-2 rounded-full bg-[#6F00FF]" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
