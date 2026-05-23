import {
  HiOutlineSparkles,
  HiOutlineGlobeAlt,
  HiOutlinePhoto,
  HiOutlinePresentationChartLine,
} from "react-icons/hi2";

const services = [
  {
    id: "01",
    title: "Brand Identity",
    description:
      "Distinctive visual systems designed to shape how your audience sees, feels, and remembers your brand.",
    icon: HiOutlineSparkles,
    gradient: "from-[#6F00FF] to-[#8B5CF6]",
  },

  {
    id: "02",
    title: "Website Design",
    description:
      "Luxury-inspired digital experiences crafted to feel immersive, seamless, and visually intelligent.",
    icon: HiOutlineGlobeAlt,
    gradient: "from-[#C0FF00] to-[#A3E635]",
  },

  {
    id: "03",
    title: "Creative Direction",
    description:
      "Strategic visual storytelling designed to align every touchpoint with a cohesive visual vision.",
    icon: HiOutlinePhoto,
    gradient: "from-[#8B5CF6] to-[#7C3AED]",
  },

  {
    id: "04",
    title: "Campaign Design",
    description:
      "Thoughtfully designed content systems created for modern digital audiences and ambitious brands.",
    icon: HiOutlinePresentationChartLine,
    gradient: "from-[#D946EF] to-[#C026D3]",
  },
];

const Services = () => {
  return (
    <section id="services" className="bg-white py-24 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Heading */}

        <div className="text-center mb-20">
          <p className="font-[Nexa] uppercase tracking-[5px] text-[#6F00FF] text-2xl text-bold mb-5">
            WHAT WE CREATE
          </p>

          <h2 className="font-[Founders] text-[#111111] leading-[1.08] text-3xl sm:text-5xl lg:text-6xl max-w-[950px] mx-auto">
            Immersive visual experiences tailored for ambitious brands that want
            to stand apart with clarity, elegance, and purpose
            <span className="text-[#6F00FF]">.</span>
          </h2>
        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.id}
                className="group relative overflow-hidden bg-white border border-[#DDD6FE] rounded-3xl p-7 duration-500 hover:-translate-y-2 hover:shadow-[0_25px_80px_rgba(111,0,255,0.12)]"
              >
                {/* Glow */}

                <div className="absolute top-[-80px] right-[-80px] w-[180px] h-[180px] rounded-full bg-[#6F00FF]/5 blur-[80px] opacity-0 duration-500 group-hover:opacity-100" />

                {/* Icon */}

                <div
                  className={`w-22 h-22 bg-linear-to-br ${service.gradient} rounded-[28px] flex items-center justify-center mb-5 shadow-[0_15px_40px_rgba(111,0,255,0.18)] duration-300 group-hover:scale-105`}
                >
                  <Icon className="text-white text-4xl" />
                </div>

                {/* Title */}

                <h3 className="font-[Founders] text-[#111111] text-3xl lg:text-4xl mb-3">
                  {service.title}
                </h3>

                {/* Description */}

                <p className="font-[Nexa] text-[#555555] leading-8 mb-8 max-w-130">
                  {service.description}
                </p>

                {/* Button */}

                <button className="bg-[#6F00FF] hover:bg-[#875BFF] text-white px-7 py-3 rounded-full shadow-[0_10px_25px_rgba(111,0,255,0.25)] duration-300 hover:scale-105 cursor-pointer">
                  View Service
                </button>
              </div>
            );
          })}
        </div>

        {/* Bottom Button */}

        <div className="flex justify-center mt-14">
          <button className="bg-[#7B68EE] hover:bg-[#6F00FF] border border-white/90 text-white font-[Nexa] font-bold px-10 py-4 rounded-full shadow-[0_0_0_1px_rgba(255,255,255,0.15),0_12px_35px_rgba(123,104,238,0.30),0_0_25px_rgba(123,104,238,0.18)] hover:shadow-[0_0_0_1px_rgba(255,255,255,0.2),0_18px_45px_rgba(111,0,255,0.40)] duration-300 hover:scale-105 cursor-pointer">
            View All
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
