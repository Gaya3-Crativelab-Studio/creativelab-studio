import { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { RiDoubleQuotesL } from "react-icons/ri";
import testimonialsData from "../data/testimonialsData";

const ITEMS_PER_PAGE = 3;

const Testimonials = () => {
  const [currentGroup, setCurrentGroup] = useState(0);

  const totalGroups = Math.ceil(testimonialsData.length / ITEMS_PER_PAGE);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGroup((prev) => (prev + 1 >= totalGroups ? 0 : prev + 1));
    }, 15000);

    return () => clearInterval(interval);
  }, [totalGroups]);

  const visibleTestimonials = testimonialsData.slice(
    currentGroup * ITEMS_PER_PAGE,
    currentGroup * ITEMS_PER_PAGE + ITEMS_PER_PAGE,
  );

  return (
    <section id="testimonials" className="bg-white py-22 overflow-hidden">
      <div className="max-w-350 mx-auto px-10 mb-5 mt-5 sm:px-8 lg:px-12">
        {/* Heading */}

        <div className="text-center mb-24">
          <h2 className="font-[Founders] text-[#6F00FF] text-4xl sm:text-5xl lg:text-6xl leading-none">
            Words from our clients
            <span className="text-[#6F00FF]">.</span>
          </h2>
        </div>

        {/* Cards */}

        <div className="grid lg:grid-cols-3 gap-8">
          {visibleTestimonials.map((item) => (
            <div
              key={item.id}
              className="group relative bg-[#FBFAFF] border border-[#ECE2FF] rounded-2xl p-10 lg:p-12 overflow-hidden duration-500 hover:-translate-y-3 hover:shadow-[0_35px_80px_rgba(111,0,255,0.12)]"
            >
              {/* Glow */}

              <div className="absolute -top-20 -right-20 w-55 h-55 bg-[#6F00FF]/5 rounded-full blur-[80px]" />

              {/* Quote */}

              <RiDoubleQuotesL className="absolute top-8 right-8 text-[70px] text-[#6F00FF]/10 duration-500 group-hover:scale-110" />

              {/* Profile */}

              <div className="flex items-center gap-4 mb-10">
                <div className="w-16 h-16 rounded-full bg-[#6F00FF]/10 flex items-center justify-center border border-[#E4D8FF] overflow-hidden">
                  {item.logo ? (
                    <img
                      src={item.logo}
                      alt={item.name}
                      className="max-w-[85%] max-h-[85%] object-contain"
                    />
                  ) : (
                    <FaUserCircle className="text-[#6F00FF] text-[38px]" />
                  )}
                </div>

                <div>
                  <h4 className="font-[Founders] text-[#111111] text-xl">
                    {item.name}
                  </h4>

                  <p className="font-[Nexa] text-[#777777] text-sm">
                    {item.role}
                  </p>
                </div>
              </div>

              {/* Testimonial */}

              <p className="font-[Nexa] font-[100] text-[#444444] text-sm leading-loose relative z-10">
                "{item.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
