import { motion } from "framer-motion";

const Story = () => {
  return (
    <section className="bg-[#F8F7F2] py-24 lg:py-32 overflow-hidden">
      <div className="max-w-362.5 mx-auto px-6 lg:px-12">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-262.5 mx-auto text-center"
        >
          <h2 className="font-[Founders] text-[#111111] text-xl sm:text-6xl lg:text-7xl leading-[0.95] tracking-[-0.04em]">
            We believe creativity is more than design
            <br />
            <span className="text-[#6F00FF]"> it’s an experience </span>
            worth feeling.
          </h2>

          <p className="font-[Nexa] text-[#555555] text-lg lg:text-xl leading-[1.9] max-w-237 mx-auto mt-8">
            At CreativeLab Studio, we craft bold visual identities, immersive
            brand experiences, and emotionally driven storytelling that leave a
            lasting impression. Founded with a passion for design innovation and
            artistic thinking, our studio blends strategy, aesthetics, and
            modern culture to create work that feels timeless yet unforgettable.
            From branding and digital experiences to cinematic visuals and
            creative campaigns, we transform ideas into meaningful visual
            stories that connect brands with people in a powerful way.
          </p>
        </motion.div>

        {/* Content Grid */}

        <div className="mt-24 grid lg:grid-cols-12 gap-6">
          {/* Main Image */}

          <motion.div
            initial={{ opacity: 0, x: -45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-8"
          >
            <div className="overflow-hidden w-223 rounded-3xl border border-[#D7D7D7]">
              <img
                src="/images/story-main.jpg"
                alt="CreativeLab Studio"
                className="w-full h-135 object-cover"
              />
            </div>
          </motion.div>

          {/* Mission */}

          <motion.div
            initial={{ opacity: 0, x: 45 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-4"
          >
            <div className="h-full rounded-3xl border border-[#D7D7D7] bg-white/70 backdrop-blur-sm p-10">
              <h3 className="font-[Founders] text-[#6F00FF] text-4xl mb-6">
                Our Mission
              </h3>

              <p className="font-[Nexa] text-[#555555] leading-loose text-lg">
                At CreativeLab Studio, our mission is to create visually
                intelligent experiences that inspire emotion, build identity,
                and elevate brands beyond trends. We believe every brand has a
                unique voice waiting to be expressed through thoughtful design,
                storytelling, and innovation. Our focus is not only on creating
                beautiful visuals, but crafting experiences that feel authentic,
                memorable, and strategically impactful. Through creativity,
                collaboration, and detail-driven execution, we turn ideas into
                brands people genuinely connect with.
              </p>
            </div>
          </motion.div>

          {/* Vision */}

          <motion.div
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-4"
          >
            <div className="h-full rounded-[24px] border border-[#D7D7D7] bg-white/70 backdrop-blur-sm p-10">
              <h3 className="font-[Founders] text-[#6F00FF] text-4xl mb-6">
                Our Vision
              </h3>

              <p className="font-[Nexa] text-[#555555] leading-[2] text-lg">
                We envision CreativeLab Studio as a modern creative house where
                art, design, culture, and storytelling merge into one powerful
                language. Our goal is to build brands that stand out with
                originality, elegance, and emotional depth. We aspire to push
                creative boundaries, explore new visual possibilities, and
                create work that feels artistically bold and commercially
                meaningful. Driven by imagination and innovation, we shape
                experiences that inspire audiences and redefine modern
                creativity.
              </p>
            </div>
          </motion.div>

          {/* Team Image */}

          <motion.div
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-8"
          >
            <div className="overflow-hidden rounded-3xl border border-[#D7D7D7]">
              <img
                src="/images/team-photo.jpg"
                alt="CreativeLab Team"
                className="w-full h-105 object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Story;
