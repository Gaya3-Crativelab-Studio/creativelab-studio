import { motion } from "framer-motion";
import { ArrowUpRight, Plus } from "lucide-react";
import { useState } from "react";

export default function TeamCard({ member, index, size = "default" }) {
  const [isTapped, setIsTapped] = useState(false);
  const isOffset = index % 2 === 1; // 2nd, 4th cards shift down
  const isSmall = size === "sm";

  // Check if device is mobile
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  // Handle card tap/click
  const handleCardClick = () => {
    if (isMobile) {
      setIsTapped(!isTapped);
    }
  };

  // Handle mouse leave (reset on desktop)
  const handleMouseLeave = () => {
    if (!isMobile) {
      setIsTapped(false);
    }
  };

  // ================= ANIMATION CONFIG =================
  const springTransition = {
    type: "spring",
    stiffness: 100,
    damping: 15,
  };

  // ================= FRAMER MOTION VARIANTS =================
  const parentVariants = {
    initial: {
      y: 0,
      boxShadow: "0 20px 60px rgba(0,0,0,0.08)",
    },
    hover: {
      y: -15,
      boxShadow: "0 35px 80px rgba(111,0,255,0.18)",
      transition: {
        ...springTransition,
        staggerChildren: 0.07,
        delayChildren: 0.05,
      },
    },
  };

  const glowVariants = {
    initial: { opacity: 0 },
    hover: { opacity: 1, transition: springTransition },
  };

  // Only the IMAGE fades out on hover — name/role live outside this layer.
  const imageLayerVariants = {
    initial: {
      opacity: 1,
      zIndex: 20,
      transition: springTransition,
    },
    hover: {
      opacity: 0,
      zIndex: 20,
      pointerEvents: "none",
      transition: springTransition,
    },
  };

  const imageVariants = {
    initial: { opacity: 1, scale: 1 },
    hover: { opacity: 0, scale: 1.08, transition: springTransition },
  };

  const plusButtonVariants = {
    initial: { rotate: 0, opacity: 1 },
    hover: {
      rotate: 45,
      opacity: 0,
      transition: { type: "spring", stiffness: 260 },
    },
  };

  // Description layer now lives inside the CONTENT area only (below the
  // header, which is in normal flow) so it can never overlap the header
  // regardless of how many lines the name/role wrap to.
  const hoverLayerVariants = {
    initial: {
      opacity: 0,
      y: 20,
      zIndex: 30,
      pointerEvents: "none",
      transition: springTransition,
    },
    hover: {
      opacity: 1,
      y: 0,
      zIndex: 30,
      pointerEvents: "auto",
      transition: {
        ...springTransition,
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const descriptionItemVariants = {
    initial: { opacity: 0, y: 30 },
    hover: { opacity: 1, y: 0, transition: springTransition },
  };

  const ctaButtonVariants = {
    initial: { opacity: 0, y: 20 },
    hover: { opacity: 1, y: 0, transition: springTransition },
  };

  // ================= SIZE-DEPENDENT CLASSES =================
  const cardSizeClass = isSmall
    ? "w-[108px] h-[240px] rounded-t-[80px] rounded-b-[80px]"
    : "w-[260px] h-[560px] rounded-t-[180px] rounded-b-[180px]";

  const offsetClass = !isSmall && isOffset ? "mt-20" : "mt-0";

  const headerPadClass = isSmall ? "pt-4 px-3 pb-1" : "pt-8 px-8 pb-2";
  const nameTextClass = isSmall
    ? "text-[12px] leading-[1.1] font-bold tracking-tight line-clamp-1"
    : "text-[26px] leading-[1.05] font-bold tracking-tight";
  const roleTextClass = isSmall
    ? "text-[9px] mt-0.5 leading-tight line-clamp-2"
    : "text-[15px] mt-1";
  const dividerClass = isSmall
    ? "w-6 h-[1.5px] mt-2 mx-auto"
    : "w-10 h-[2px] mt-4 mx-auto";

  // Image now fills its CONTENT wrapper (not the whole card), so it no
  // longer needs to be told how far down to sit — the wrapper below the
  // header already starts it in the right place.
  const imageClass = isSmall
    ? "absolute inset-0 w-full h-full object-cover object-top rounded-t-[60px] contrast-[1.05] pointer-events-none select-none"
    : "absolute inset-0 w-full h-full object-cover object-top rounded-t-[140px] contrast-[1.05] pointer-events-none select-none";

  const plusButtonClass = isSmall
    ? "absolute bottom-2.5 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white shadow-xl flex items-center justify-center"
    : "absolute bottom-6 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-white shadow-xl flex items-center justify-center";

  const plusIconSize = isSmall ? 14 : 26;

  const descLayerClass = isSmall
    ? "absolute inset-0 z-30 flex flex-col items-center justify-between px-3 py-2"
    : "absolute inset-0 z-30 flex flex-col items-center justify-between px-8 py-6";

  const descTextClass = isSmall
    ? "font-[Nexa] text-[9px] leading-4 text-[#444] text-center line-clamp-6"
    : "font-[Nexa] text-[15px] leading-7 text-[#444] text-center";

  const ctaButtonClass = isSmall
    ? "flex items-center justify-center gap-1 h-6 px-2 rounded-full border border-[#6F00FF]/20 bg-white/80 backdrop-blur-xl font-[Nexa] text-[9px] text-[#6F00FF] font-semibold hover:bg-[#6F00FF] hover:text-white transition-colors"
    : "flex items-center justify-center gap-2 h-12 rounded-full border border-[#6F00FF]/20 bg-white/80 backdrop-blur-xl font-[Nexa] text-sm text-[#6F00FF] font-semibold hover:bg-[#6F00FF] hover:text-white transition-colors";

  const ctaIconSize = isSmall ? 12 : 16;

  return (
    <motion.div
      initial="initial"
      whileInView="initial"
      animate={isTapped ? "hover" : "initial"}
      whileHover={isMobile ? undefined : "hover"}
      variants={parentVariants}
      viewport={{ once: true }}
      onClick={handleCardClick}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden cursor-pointer flex-shrink-0 flex flex-col ${cardSizeClass} ${offsetClass}`}
      style={{
        background: member.bg,
      }}
    >
      {/* Glow */}
      <motion.div
        variants={glowVariants}
        className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white/10 pointer-events-none z-10"
      />

      {/* ================= HEADER — normal flow, height grows with content, never overlapped ================= */}
      <div
        className={`relative z-40 shrink-0 pointer-events-none text-center ${headerPadClass}`}
      >
        <h3 className={`font-[Founders] text-[#111] ${nameTextClass} mt-2`}>
          {member.name}
        </h3>
        <p className={`font-[Nexa] text-[#555] ${roleTextClass}`}>
          {member.role}
        </p>
        <div className={`bg-black/20 rounded-full ${dividerClass}`} />
      </div>

      {/* ================= CONTENT AREA — takes remaining space below header ================= */}
      <div className="relative flex-1 overflow-hidden">
        {/* ================= IMAGE LAYER — fades out on hover ================= */}
        <motion.div variants={imageLayerVariants} className="absolute inset-0">
          <motion.img
            src={member.image}
            alt={member.name}
            variants={imageVariants}
            className={imageClass}
          />

          <motion.div
            variants={plusButtonVariants}
            className={`${plusButtonClass} hidden`}
          >
            <Plus size={plusIconSize} strokeWidth={1.5} />
          </motion.div>
        </motion.div>

        {/* ================= DESCRIPTION LAYER — replaces image on hover ================= */}
        <motion.div variants={hoverLayerVariants} className={descLayerClass}>
          <motion.p
            variants={descriptionItemVariants}
            className={descTextClass}
          >
            {member.description}
          </motion.p>

          <motion.button
            variants={ctaButtonVariants}
            whileTap={{ scale: 0.98 }}
            className={`${ctaButtonClass} mt-3 mb-1 md:px-5 cursor-pointer`}
          >
            View Profile
            <ArrowUpRight size={ctaIconSize} />
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
}
