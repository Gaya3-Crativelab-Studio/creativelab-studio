import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { HiArrowLeft, HiOutlineSparkles } from "react-icons/hi2";
import rocket from "../assets/images/Rocket.png";
import astronaut from "../assets/images/astronaut.png";
import { useState, useEffect } from "react";

const stars = Array.from({ length: 80 });

const PageNotFound = () => {
  const navigate = useNavigate();

  const [astronautPos, setAstronautPos] = useState({
    x: 100,
    y: 400,
    rotate: 0,
  });

  useEffect(() => {
    const moveAstronaut = () => {
      const maxX = window.innerWidth - 180;
      const maxY = window.innerHeight - 180;

      setAstronautPos({
        x: Math.random() * maxX,
        y: Math.random() * maxY,
        rotate: Math.random() * 360,
      });
    };

    moveAstronaut();

    const interval = setInterval(moveAstronaut, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050314] text-white flex items-center justify-center px-6 py-24">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(111,0,255,0.12),transparent_60%)]" />

      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-[#6F00FF]/20 blur-[180px]" />

      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-[#8B5CF6]/20 blur-[180px]" />

      {/* Stars */}
      <div className="absolute inset-0 overflow-hidden">
        {stars.map((_, i) => (
          <motion.div
            key={i}
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.4, 1],
            }}
            transition={{
              duration: 2 + (i % 3),
              repeat: Infinity,
              delay: i * 0.05,
            }}
            className="absolute bg-white rounded-full"
            style={{
              width: `${(i % 3) + 1}px`,
              height: `${(i % 3) + 1}px`,
              top: `${(i * 37) % 100}%`,
              left: `${(i * 17) % 100}%`,
            }}
          />
        ))}
      </div>

      {/* Shooting Star */}
      <motion.div
        animate={{
          x: [-200, 600],
          y: [0, 250],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatDelay: 4,
        }}
        className="absolute top-32 left-20 w-32 h-[2px] bg-gradient-to-r from-white to-transparent rotate-[25deg]"
      />

      {/* Left Planet */}
      <div className="absolute -left-52 -top-52 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#7C3AED] to-[#1E0A3C] opacity-40 blur-sm" />

      {/* Right Planet */}
      <div className="absolute -right-40 bottom-[-100px] w-[350px] h-[350px] rounded-full bg-gradient-to-br from-[#6F00FF] to-[#16042C] opacity-40" />

      {/* Small Planet */}
      <div className="absolute right-24 top-44 w-24 h-24 rounded-full border border-[#8B5CF6]/40 bg-[#8B5CF6]/10" />

      {/* Floating Sparkles */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 15, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="absolute left-24 top-44 text-[#A855F7]/40"
      >
        <HiOutlineSparkles className="text-6xl" />
      </motion.div>

      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [0, -15, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        className="absolute right-32 top-64 text-[#A855F7]/40"
      >
        <HiOutlineSparkles className="text-5xl" />
      </motion.div>

      {/* Astronaut */}

      <motion.img
        src={astronaut}
        alt="Astronaut"
        animate={{
          x: astronautPos.x,
          y: astronautPos.y,
          rotate: astronautPos.rotate,
        }}
        transition={{
          duration: 8,
          ease: "easeInOut",
        }}
        className="fixed top-0 left-0 w-[120px] md:w-[160px] z-20 pointer-events-none select-none"
        style={{
          filter: "drop-shadow(0 0 20px rgba(168,85,247,0.5))",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-[900px] mx-auto text-center">
        {/* Rocket */}
        <motion.img
          src={rocket}
          alt="Rocket"
          initial={{ opacity: 0, y: 100, scale: 0.9 }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
          className="w-[260px] sm:w-[340px] md:w-[420px] mx-auto mb-8 select-none"
        />

        {/* Rocket Glow */}
        <div className="absolute left-1/2 top-16 -translate-x-1/2 w-[250px] h-[250px] bg-[#6F00FF]/20 rounded-full blur-[120px] -z-10" />

        {/* 404 */}
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="font-[Founders] text-5xl sm:text-6xl lg:text-7xl leading-[0.95] mb-8"
        >
          Oops! You entered
          <br />
          into{" "}
          <span className="bg-gradient-to-r from-[#C084FC] to-[#6F00FF] bg-clip-text text-transparent">
            space.
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 0.8,
            delay: 0.15,
            ease: "easeOut",
          }}
          className="max-w-[750px] mx-auto text-lg md:text-xl text-white/70 leading-9 mb-12 font-[Nexa]"
        >
          The page you're looking for has drifted beyond our creative universe.
          While our team tracks the signal, let's get you back to something
          extraordinary.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 0.8,
            delay: 0.3,
            ease: "easeOut",
          }}
          className="flex flex-col sm:flex-row gap-5 justify-center"
        >
          <button
            onClick={() => navigate("/")}
            className="group px-10 py-4 rounded-full bg-gradient-to-r from-[#6F00FF] to-[#9D4DFF] text-white font-semibold shadow-[0_0_50px_rgba(111,0,255,0.45)] hover:scale-105 duration-300 flex items-center justify-center gap-3 cursor-pointer"
          >
            <HiArrowLeft className="group-hover:-translate-x-1 duration-300" />
            Back Home
          </button>

          <button
            onClick={() => navigate("/contact")}
            className="px-10 py-4 rounded-full border border-white/15 bg-white/5 backdrop-blur-xl text-white hover:bg-white/10 hover:border-[#6F00FF] hover:shadow-[0_0_25px_rgba(111,0,255,0.4)] transition-all duration-300 cursor-pointer"
          >
            Contact Us
          </button>
        </motion.div>
      </div>

      {/* Nebula */}
      <div className="absolute bottom-0 left-0 w-full h-[300px] bg-gradient-to-t from-[#6F00FF]/10 to-transparent pointer-events-none" />
    </section>
  );
};

export default PageNotFound;
