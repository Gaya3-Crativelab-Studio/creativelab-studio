import { motion } from "framer-motion";
import Footer from "../components/Footer";
import PageHero from "../components/shared/PageHero";

const sections = [
  {
    title: "Information We Collect",
    content:
      "CreativeLab Studio may collect personal information including name, email address, phone number, company information, and project details submitted through forms or communication channels.",
  },

  {
    title: "How We Use Information",
    content:
      "Collected information is used to provide services, communicate project updates, schedule discovery calls, improve experiences, and deliver creative solutions.",
  },

  {
    title: "Discovery Call & Contact Forms",
    content:
      "Information submitted through Contact Forms and Discovery Call booking forms may be securely stored for communication, project management, and client relationship purposes.",
  },

  {
    title: "Data Protection",
    content:
      "We implement reasonable security practices to protect personal information from unauthorized access, disclosure, or misuse.",
  },

  {
    title: "Cookies & Analytics",
    content:
      "Our website may use cookies and analytics tools to understand visitor interactions and improve overall performance and user experience.",
  },

  {
    title: "Third Party Services",
    content:
      "CreativeLab Studio may use trusted third-party platforms such as Firebase, analytics services, hosting providers, or communication tools where necessary.",
  },

  {
    title: "Information Sharing",
    content:
      "We do not sell or distribute personal information to external organizations except where required for service delivery or legal obligations.",
  },

  {
    title: "Your Rights",
    content:
      "You may request updates, corrections, or removal of personal information by contacting CreativeLab Studio directly.",
  },

  {
    title: "Policy Updates",
    content:
      "CreativeLab Studio may revise this Privacy Policy periodically. Updated policies will appear on this page.",
  },
];

const PrivacyPolicy = () => {
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
              Privacy
              <span className="text-[#6F00FF]"> Policy</span>
            </h1>

            <p className="font-[Nexa] text-[#666666] max-w-[700px] mx-auto mt-6 leading-8">
              Your privacy matters to us. Learn how CreativeLab Studio collects,
              stores, and protects your information.
            </p>
          </motion.div>

          {/* Policy Sections */}

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
                hover:shadow-[0_18px_45px_rgba(111,0,255,0.08)]
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

          {/* Footer */}

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

export default PrivacyPolicy;
