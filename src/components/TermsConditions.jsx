import { motion } from "framer-motion";
import Footer from "../components/Footer";
import PageHero from "../components/shared/PageHero";

const sections = [
  {
    title: "Acceptance of Terms",
    content:
      "By accessing CreativeLab Studio services, you agree to comply with these Terms and Conditions and all applicable laws and regulations.",
  },

  {
    title: "Services",
    content:
      "CreativeLab Studio provides branding, digital experiences, creative production, design solutions, and related professional services.",
  },

  {
    title: "Project Scope",
    content:
      "Project requirements, timelines, deliverables, and revisions will be defined before execution. Additional requirements may involve revised estimates.",
  },

  {
    title: "Payments",
    content:
      "Payments must be completed according to agreed milestones. Delayed payments may impact project timelines.",
  },

  {
    title: "Intellectual Property",
    content:
      "Ownership rights transfer after final payment unless specified otherwise in written agreements.",
  },

  {
    title: "Client Responsibilities",
    content:
      "Clients must provide accurate information, required assets, approvals, and timely communication.",
  },

  {
    title: "Limitation of Liability",
    content:
      "CreativeLab Studio is not responsible for indirect damages arising from service usage or third-party platforms.",
  },

  {
    title: "Termination",
    content:
      "Either party may terminate agreements under mutually accepted conditions.",
  },

  {
    title: "Changes to Terms",
    content:
      "CreativeLab Studio reserves the right to update these terms when necessary.",
  },
];

const TermsConditions = () => {
  return (
    <>
      <PageHero />

      <section className="bg-white py-24 overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12">
          {/* Heading */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-20"
          >
            <p className="font-[Nexa] uppercase tracking-[5px] text-[#6F00FF] text-sm mb-5">
              LEGAL
            </p>

            <h1 className="font-[Founders] text-[#111111] text-5xl lg:text-7xl leading-[0.95]">
              Terms &<span className="text-[#6F00FF]"> Conditions</span>
            </h1>

            <p className="font-[Nexa] text-[#666666] max-w-[700px] mx-auto mt-6 leading-8">
              Please review these terms carefully before using CreativeLab
              Studio services.
            </p>
          </motion.div>

          {/* Terms Cards */}

          <div className="space-y-8">
            {sections.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                }}
                className="
                bg-[#FAF9FF]
                border
                border-[#DDD6FE]
                rounded-[28px]
                p-8
                lg:p-10
                hover:shadow-[0_15px_40px_rgba(111,0,255,0.08)]
                duration-300
                "
              >
                <div className="flex gap-5">
                  <div
                    className="
                  w-12
                  h-12
                  rounded-full
                  bg-[#6F00FF]
                  text-white
                  flex
                  items-center
                  justify-center
                  font-bold
                  flex-shrink-0
                  "
                  >
                    {index + 1}
                  </div>

                  <div>
                    <h3
                      className="
                    font-[Founders]
                    text-[#111111]
                    text-3xl
                    mb-4
                    "
                    >
                      {item.title}
                    </h3>

                    <p
                      className="
                    font-[Nexa]
                    text-[#555555]
                    leading-8
                    "
                    >
                      {item.content}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Footer Note */}

          <div
            className="
          mt-20
          text-center
          border-t
          border-[#ECECEC]
          pt-10
          "
          >
            <p
              className="
            font-[Nexa]
            text-[#777777]
            "
            >
              Last updated: May 2026
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default TermsConditions;
