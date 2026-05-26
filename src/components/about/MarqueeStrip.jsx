
const MarqueeStrip = () => {
  const items = [
    "LET'S CREATE NEW EXPERIENCES",
    "LET'S CREATE NEW EXPERIENCES",
    "LET'S CREATE NEW EXPERIENCES",
    "LET'S CREATE NEW EXPERIENCES",
  ];

  return (
    <section className="overflow-hidden bg-[#CCCCFF] border-y-2 border-[#FFD700] py-1">
      <div className="marquee-track flex whitespace-nowrap pl-10">
        {[...Array(2)].map((_, block) => (
          <div key={block} className="flex shrink-0 items-center gap-10">
            {items.map((item, index) => (
              <div key={index} className="flex items-center pl-10 gap-10">
                <span className="font-[Founders] text-black text-sm sm:text-lg lg:text-xl uppercase pt-2 font-normal leading-none">
                  {item}
                </span>

                <span className="text-black text-sm  leading-none">
                  ✱
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default MarqueeStrip;
