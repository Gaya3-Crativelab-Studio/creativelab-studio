import { motion } from "framer-motion";
import clients from "../../data/clients";

const Clients = () => {
  return (
    <section className="bg-white py-24 overflow-hidden">
      <div className="max-w-[1450px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="font-[Nexa] uppercase tracking-[6px] text-[#6F00FF] text-sm sm:text-base font-semibold mb-5">
            TRUSTED COLLABORATIONS
          </p>

          <h2 className="font-[Founders] text-[#111111] text-5xl lg:text-7xl leading-none">
            Our Clients
            <span className="text-[#6F00FF]">.</span>
          </h2>

          <p className="font-[Nexa] text-[#666666] text-lg mt-6 max-w-[700px] mx-auto">
            Partnerships built through creativity, strategy, and meaningful
            brand experiences.
          </p>
        </motion.div>
      </div>

      {/* Logo Marquee */}

      <div className="relative overflow-hidden py-4">
        {/* Fade Left */}
        <div className="absolute left-0 top-0 z-10 h-full w-28 bg-gradient-to-r from-white to-transparent" />

        {/* Fade Right */}
        <div className="absolute right-0 top-0 z-10 h-full w-28 bg-gradient-to-l from-white to-transparent" />

        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          {[...clients, ...clients].map((client, index) => (
            <div
              key={index}
              className="mx-6 sm:mx-8 lg:mx-12 shrink-0 flex items-center justify-center"
            >
              <div className="w-[220px] h-[180px] sm:w-[260px] sm:h-[220px] lg:w-[300px] lg:h-[260px] flex items-center justify-center">
                <img
                  src={client.logo}
                  alt={client.name}
                  className={`${client.logoClass || "max-w-[140px] max-h-[90px]"} object-contain transition-all duration-500 hover:scale-105`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
