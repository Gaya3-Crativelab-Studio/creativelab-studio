import { motion } from "framer-motion";

const Story = () => {
  return (
    <section className="bg-[#F8F7F2] py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="w-full mx-auto text-center"
        >
          <h2 className="font-[Founders] text-[#111111] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[0.95] tracking-[-0.04em]">
            We create premium brand experiences that turn strategy into
            <span className="text-[#6F00FF]"> elegant visuals</span> and lasting
            recognition.
          </h2>

          <p className="font-[Nexa] text-[#555555] text-base sm:text-lg md:text-lg lg:text-xl leading-[1.7] sm:leading-[1.8] md:leading-[1.9] max-w-3xl mx-auto mt-6 sm:mt-8 md:mt-8 lg:mt-8">
            CreativeLab Studio partners with founders and modern businesses to
            shape brand identities, website experiences, digital marketing
            campaigns, and creative production that feel elevated, intentional,
            and built to endure. Our process blends strategy, storytelling, and
            design so every touchpoint reflects a confident and memorable brand
            presence.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="mt-12 sm:mt-16 md:mt-20 lg:mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-5 md:gap-6 lg:gap-6">
          {/* Main Image */}
          <motion.div
            initial={{ opacity: 0, x: -45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="col-span-1 md:col-span-2 lg:col-span-8"
          >
            <div className="overflow-hidden w-full rounded-2xl sm:rounded-2xl md:rounded-3xl lg:rounded-3xl border border-[#D7D7D7]">
              <img
                src="https://res.cloudinary.com/dcnmzhp9k/image/upload/v1779810372/sweet-life-npQNtKDR21o-unsplash_j5otgr.jpg"
                alt="CreativeLab Studio team crafting premium branding and digital design concepts"
                className="w-full h-auto aspect-video sm:aspect-video md:aspect-video lg:aspect-[16/9] object-cover"
              />
            </div>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: 45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="col-span-1 md:col-span-1 lg:col-span-4"
          >
            <div className="w-full h-auto md:min-h-80 lg:h-full rounded-2xl sm:rounded-2xl md:rounded-3xl lg:rounded-3xl border border-[#D7D7D7] bg-white/70 backdrop-blur-sm p-6 sm:p-7 md:p-8 lg:p-10 flex flex-col justify-start lg:justify-between">
              <div>
                <h3 className="font-[Founders] text-[#6F00FF] text-2xl sm:text-3xl md:text-3xl lg:text-4xl mb-4 sm:mb-5 md:mb-6 lg:mb-6">
                  Our Mission
                </h3>

                <p className="font-[Nexa] text-[#555555] leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-loose text-base sm:text-base md:text-base lg:text-lg">
                  Our mission is to shape premium brand experiences through
                  strategic creativity, refined visual systems, and meaningful
                  storytelling.
                  <br />
                  We help businesses communicate with clarity, build trust
                  through design, and create memorable digital touchpoints that
                  support visibility, engagement, and long-term growth.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="col-span-1 md:col-span-1 lg:col-span-4"
          >
            <div className="w-full h-auto md:min-h-80 lg:h-full rounded-2xl sm:rounded-2xl md:rounded-3xl lg:rounded-[24px] border border-[#D7D7D7] bg-white/70 backdrop-blur-sm p-6 sm:p-7 md:p-8 lg:p-10 flex flex-col justify-start lg:justify-between">
              <div>
                <h3 className="font-[Founders] text-[#6F00FF] text-2xl sm:text-3xl md:text-3xl lg:text-4xl mb-4 sm:mb-5 md:mb-6 lg:mb-6">
                  Our Vision
                </h3>

                <p className="font-[Nexa] text-[#555555] leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-[2] text-base sm:text-base md:text-base lg:text-lg">
                  We envision CreativeLab Studio as a globally trusted creative
                  agency known for premium branding, immersive websites, and
                  high-impact digital campaigns.
                  <br />
                  Our goal is to shape modern brand identities that remain
                  elegant, emotionally resonant, and commercially effective in a
                  fast-moving digital landscape.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Team Image */}
          <motion.div
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="col-span-1 md:col-span-2 lg:col-span-8"
          >
            <div className="overflow-hidden w-full rounded-2xl sm:rounded-2xl md:rounded-3xl lg:rounded-3xl border border-[#D7D7D7]">
              <img
                src="https://res.cloudinary.com/dcnmzhp9k/image/upload/v1779810375/van-tay-media-YK1AJT_5e5Q-unsplash_nb2dia.jpg"
                alt="CreativeLab Studio team working on branding, website design, and motion content"
                className="w-full h-auto aspect-video sm:aspect-video md:aspect-video lg:aspect-[16/9] object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Story;
