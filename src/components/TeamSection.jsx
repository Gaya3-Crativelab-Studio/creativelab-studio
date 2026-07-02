import { motion } from "framer-motion";
import TeamCard from "./TeamCard";
import team from "../data/team";

export default function TeamSection() {
  const topRow = team.slice(0, 3);
  const bottomRow = team.slice(3, 5);

  return (
    <section
      id="team"
      className="relative overflow-hidden bg-white py-28 lg:py-36"
    >
      {/* Background Decorations */}
      <div className="absolute -top-32 -left-32 w-80 h-80 rounded-full bg-[#F9D8E5]/40 blur-[120px]" />
      <div className="absolute top-1/2 -right-24 w-72 h-72 rounded-full bg-[#E5F7F6]/50 blur-[120px]" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[250px] bg-[#6F00FF]/5 blur-[120px]" />

      <div className="relative max-w-[1500px] mx-auto px-6 lg:px-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <span className="font-[Nexa] uppercase tracking-[6px] text-[#6F00FF] font-bold text-sm">
            OUR TEAM
          </span>

          <h2 className="font-[Founders] text-[#111] text-5xl lg:text-7xl mt-6 leading-none">
            Meet the Creative Minds
            <span className="text-[#6F00FF]">.</span>
          </h2>

          <p className="font-[Nexa] text-[#666] text-lg leading-8 max-w-[720px] mx-auto mt-7">
            Behind every successful brand is a passionate team of creatives,
            strategists, designers, developers and storytellers dedicated to
            crafting meaningful experiences.
          </p>
        </motion.div>

        {/* Team Cards */}
        <div className="mt-24">
          {/* Desktop */}
          <div className="hidden lg:flex justify-center items-start gap-6">
            {team.map((member, index) => (
              <TeamCard key={member.id} member={member} index={index} />
            ))}
          </div>

          {/* Tablet */}
          <div className="hidden md:grid lg:hidden grid-cols-2 gap-x-8 gap-y-16 place-items-center">
            {team.map((member, index) => (
              <TeamCard key={member.id} member={member} index={index} />
            ))}
          </div>

          {/* Mobile — 3 cards on top row, 2 cards on bottom row, smaller size */}
          <div className="grid md:hidden gap-y-6">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex justify-center gap-3"
            >
              {topRow.map((member, index) => (
                <TeamCard
                  key={member.id}
                  member={member}
                  index={index}
                  size="sm"
                />
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex justify-center gap-3"
            >
              {bottomRow.map((member, index) => (
                <TeamCard
                  key={member.id}
                  member={member}
                  index={index + 3}
                  size="sm"
                />
              ))}
            </motion.div>
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mt-28 text-center"
        >
          <p className="font-[Nexa] text-[#555] text-lg">
            Collaboration. Creativity. Innovation.
          </p>

          <h3 className="font-[Founders] text-4xl lg:text-5xl mt-5 text-[#111]">
            Let's build something extraordinary together.
          </h3>

          <button className="mt-10 bg-[#6F00FF] hover:bg-[#5A00D6] text-white font-[Nexa] font-semibold px-10 py-4 rounded-full shadow-[0_20px_50px_rgba(111,0,255,0.25)] hover:shadow-[0_30px_60px_rgba(111,0,255,0.35)] hover:scale-105 transition-all duration-300">
            Meet Our Team
          </button>
        </motion.div>
      </div>
    </section>
  );
}
