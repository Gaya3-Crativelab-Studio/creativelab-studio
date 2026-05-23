const ServiceCard = ({
  icon,
  title,
  items,
}) => {
  return (
    <div className="group relative overflow-hidden rounded-[32px] border border-white/20 bg-white/35 backdrop-blur-xl shadow-[0_15px_45px_rgba(111,0,255,0.08)] hover:shadow-[0_25px_70px_rgba(111,0,255,0.18)] hover:-translate-y-2 duration-500 p-8 min-h-[270px]">

      {/* Hover Gradient */}

      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 duration-500 bg-gradient-to-br from-[#6F00FF]/5 via-transparent to-[#C0FF00]/10" />

      {/* Top Border Glow */}

      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#6F00FF] to-transparent opacity-50" />

      {/* Content */}

      <div className="relative z-10">

        {/* Icon */}

        <div className="w-16 h-16 rounded-2xl bg-white/50 backdrop-blur-lg border border-white/30 flex items-center justify-center text-[#6F00FF] mb-7 group-hover:rotate-6 duration-500">

          {icon}

        </div>

        {/* Title */}

        <h3 className="font-[Founders] text-[#111111] text-2xl mb-6">

          {title}

        </h3>

        {/* Items */}

        <div className="grid grid-cols-2 gap-x-6 gap-y-3">

          {items.map((item,index)=>(

            <div
              key={index}
              className="font-[Nexa] text-[#4A4A4A] text-sm flex items-start gap-2"
            >

              <span className="w-[5px] h-[5px] rounded-full bg-[#6F00FF] mt-[9px] flex-shrink-0" />

              {item}

            </div>

          ))}

        </div>

      </div>

    </div>
  );
};

export default ServiceCard;