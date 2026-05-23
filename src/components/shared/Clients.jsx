import { motion } from "framer-motion";
import clients from "../../data/clients";

const Clients = () => {
  return (
    <section className="bg-white py-28 overflow-hidden">
      <div className="max-w-362.5 mx-auto px-6 sm:px-8 lg:px-12">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-18"
        >
          <p className="font-[Nexa] uppercase tracking-[6px] text-[#6F00FF] text-xl text-bold mb-5">
            TRUSTED COLLABORATIONS
          </p>

          <h2 className="font-[Founders] text-[#111111] text-5xl lg:text-7xl leading-[0.95]">
            Our Clients
            <span className="text-[#6F00FF]">.</span>
          </h2>

          <p className="font-[Nexa] text-[#666666] text-lg mt-6 max-w-162.5 mx-auto">
            Partnerships built through creativity, strategy, and meaningful
            brand experiences.
          </p>
        </motion.div>
      </div>

      {/* Logo Marquee */}

      <div className="relative overflow-hidden">
        {/* Left Fade */}

        <div className="absolute left-0 top-0 z-10 h-full w-28 bg-linear-to-r from-white to-transparent" />

        {/* Right Fade */}

        <div className="absolute right-0 top-0 z-10 h-full w-28 bg-linear-to-l from-white to-transparent" />

        <div className="flex animate-[marquee_25s_linear_infinite] whitespace-nowrap">
          {[...clients, ...clients].map((client, index) => (
            <div key={index} className="mx-8 shrink-0">
              <div className="w-28 h-28 rounded-full border border-[#DDD6FE] bg-[#FAF9FF] flex items-center justify-center">
                <span className="font-[Founders] text-[#6F00FF] text-3xl">
                  {client.logo}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
