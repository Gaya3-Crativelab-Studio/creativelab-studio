import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const pageConfig = {
  "/about": { label: "About Us", bg: "#ECE7FF" },
  "/services": { label: "Services", bg: "#ECE7FF" },
  "/portfolio": { label: "Portfolio", bg: "#ECE7FF" },
  "/contact": { label: "Contact", bg: "#ECE7FF" },
  "/": { label: "Contact", bg: "#ECE7FF" },
  "/terms-and-conditions": { label: "Terms & Conditions", bg: "#ECE7FF" },
  "/privacy-policy": { label: "Privacy Policy", bg: "#ECE7FF" },
};

const PageHero = () => {
  const { pathname } = useLocation();
  const config = pageConfig[pathname] || { label: "Page", bg: "#ECE7FF" };

  return (
    <section
      className="relative overflow-hidden py-24 sm:py-22 text-center"
      style={{ backgroundColor: config.bg }}
    >
      {/* Purple Glow */}
      <motion.div
        className="absolute -top-24 -left-24 w-[340px] h-[340px] rounded-full bg-[#6F00FF]/18 blur-[120px] pointer-events-none"
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Lime Glow */}
      <motion.div
        className="absolute bottom-[-80px] right-[-80px] w-[260px] h-[260px] rounded-full bg-[#C0FF00]/20 blur-[100px] pointer-events-none"
        animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.7, 0.3] }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Soft Grid */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle,#6F00FF 1px,transparent 1px)",
          backgroundSize: "38px 38px",
        }}
      />

      <div className="relative z-10 max-w-250 mx-auto px-6 pt-8">
        {/* Breadcrumb */}
        <motion.div
          className="flex items-center justify-center gap-2 mb-8"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            to="/"
            className="font-[Nexa] text-[#6F00FF]/50 text-sm tracking-[4px] uppercase hover:text-[#6F00FF] transition-colors duration-200"
          >
            Home
          </Link>
          <span className="text-[#6F00FF]/40 text-sm">/</span>
          <span className="font-[Nexa] text-[#6F00FF] text-sm tracking-[4px] uppercase">
            {config.label}
          </span>
        </motion.div>

        {/* Heading — character stagger */}
        <motion.h1
          className="font-[Founders] text-[#6F00FF] leading-[0.9] text-5xl sm:text-6xl lg:text-[4rem]"
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.05, delayChildren: 0.2 } },
          }}
        >
          {config.label.split("").map((char, index) => (
            <motion.span
              key={index}
              className="inline-block"
              variants={{
                hidden: { y: 120, opacity: 0 },
                show: {
                  y: 0,
                  opacity: 1,
                  transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
                },
              }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h1>

        {/* Label */}
        <motion.p
          className="font-[Nexa] uppercase tracking-[6px] text-[#6F00FF] text-xs mt-7"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          CreativeLab Studio
        </motion.p>

        {/* Animated Line */}
        <motion.div
          className="mx-auto mt-8 h-[2px] rounded-full bg-gradient-to-r from-transparent via-[#6F00FF] to-transparent"
          initial={{ width: 0 }}
          animate={{ width: "260px" }}
          transition={{ delay: 1.1, duration: 1 }}
        />
      </div>
    </section>
  );
};

export default PageHero;
