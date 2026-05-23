const CTA = () => {
  return (
    <section id="cta" className="bg-white py-28 overflow-hidden">
      <div className="max-w-325 mx-auto px-6 sm:px-8 lg:px-12">
        <div className="relative overflow-hidden rounded-[40px] bg-[#6F00FF] px-8 sm:px-14 lg:px-20 py-20 shadow-[0_25px_80px_rgba(111,0,255,0.25)]">
          {/* Background Glow */}

          <div className="absolute -top-30 -left-20 w-65 h-65 bg-white/10 rounded-full blur-[90px]" />

          <div className="absolute -bottom-25 -right-15 w-60 h-60 bg-[#C0FF00]/15 rounded-full blur-[100px]" />

          {/* Content */}

          <div className="relative z-10 max-w-225 mx-auto text-center">
            <p className="font-[Nexa] uppercase tracking-[5px] text-white/80 text-sm mb-6">
              START YOUR JOURNEY
            </p>

            <h2 className="font-[Founders] text-white text-4xl sm:text-5xl lg:text-6xl leading-none mb-8">
              Let’s build something extraordinary together.
            </h2>

            <p className="font-[Nexa] text-white/85 text-lg leading-loose max-w-240 mx-auto mb-12">
              Whether you’re launching a new brand or redefining an existing
              one, CreativeLab Studio helps transform ideas into immersive
              visual experiences that stand apart.
            </p>

            <div className="flex flex-wrap justify-center gap-5">
              <button className="bg-white text-[#111111] hover:bg-[#ECE7FF] px-8 py-4 rounded-full font-[Nexa] font-semibold shadow-[0_15px_35px_rgba(255,255,255,0.18)] hover:shadow-[0_20px_45px_rgba(255,255,255,0.25)] duration-300 hover:scale-105 cursor-pointer">
                Book a Discovery Call
              </button>

              <button className="border border-white text-white hover:bg-white hover:text-[#6F00FF] px-8 py-4 rounded-full font-[Nexa] font-semibold shadow-[0_15px_35px_rgba(255,255,255,0.10)] hover:shadow-[0_20px_45px_rgba(255,255,255,0.18)] duration-300 hover:scale-105 cursor-pointer">
                Start Your Project
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
