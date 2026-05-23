const MarqueeStrip = () => {
  const items = [
    "LET'S CREATE NEW EXPERIENCES",
    "LET'S CREATE NEW EXPERIENCES",
    "LET'S CREATE NEW EXPERIENCES",
    "LET'S CREATE NEW EXPERIENCES",
  ];

  return (
    <section className="overflow-hidden bg-[#CCCCFF] border-y-4 border-[#FFD700]">
      <div className="flex whitespace-nowrap marquee-track">
        {[...Array(2)].map((_, block) => (
          <div key={block} className="flex shrink-0 items-center gap-10 ">
            {items.map((item, index) => (
              <div key={index} className="flex items-center gap-10">
                <span className="font-[Founders] text-[#000000] text-xl sm:text-xl lg:text-xl uppercase font-bold leading-none">
                  {item}
                </span>

                <span className="text-[#000000] text-xl sm:text-xl lg:text-[60px] leading-none">
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
