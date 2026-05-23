import {
  HiOutlineDocumentText,
  HiOutlineCog6Tooth,
  HiOutlineCheckBadge,
  HiOutlineLightBulb,
  HiOutlineUserGroup,
  HiOutlineTrophy,
} from "react-icons/hi2";

const reasons = [
  {
    icon: HiOutlineDocumentText,
    title: "Authentic Storytelling",
  },

  {
    icon: HiOutlineCog6Tooth,
    title: "Tailored Strategies",
  },

  {
    icon: HiOutlineCheckBadge,
    title: "Multidisciplinary Expertise",
  },

  {
    icon: HiOutlineLightBulb,
    title: "Creative Satisfaction",
  },

  {
    icon: HiOutlineUserGroup,
    title: "Client-Centric",
  },

  {
    icon: HiOutlineTrophy,
    title: "Proven Results",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-white py-28 overflow-hidden">
      <div className="max-w-[1500px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Heading */}

        <div className="flex items-center justify-center mb-20">
          <h2 className="font-[Founders] text-[#111111] text-4xl sm:text-5xl lg:text-7xl leading-none text-center">
            Why Choose Us?
          </h2>

          <span className="text-[#C0FF00] text-5xl lg:text-7xl ml-3">✱</span>
        </div>

        {/* Cards */}

        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-6">
          {reasons.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group bg-white border border-[#CCCCFF] rounded-[32px] min-h-[260px] px-6 py-10 flex flex-col justify-center items-center text-center duration-500 hover:-translate-y-2 hover:border-[#6F00FF] hover:shadow-[0_20px_50px_rgba(111,0,255,0.12)] relative overflow-hidden"
              >
                {/* Glow */}

                <div className="absolute top-[-60px] right-[-60px] w-[140px] h-[140px] bg-[#6F00FF]/5 rounded-full blur-[60px] opacity-0 duration-500 group-hover:opacity-100" />

                {/* Icon */}

                <div className="w-20 h-20 rounded-[24px] bg-[#ECE7FF] flex items-center justify-center mb-7 duration-500 group-hover:bg-[#6F00FF]">
                  <Icon className="text-[#111111] text-[42px] duration-500 group-hover:text-white" />
                </div>

                {/* Title */}

                <h3 className="font-[Founders] text-[#111111] text-[26px] leading-[1.25]">
                  {item.title}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
