import {
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaPaperPlane,
} from "react-icons/fa";
import DevelopedByStaffArc from "./DevelopedByStaffArc";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="bg-linear-to-br from-[#5B21B6] via-[#6F00FF] to-[#7C3AED] border-t border-purple-300/20 text-white overflow-hidden relative"
    >
      <div className="absolute -top-30 -left-25 w-[320px] h-80 bg-white/10 rounded-full blur-[120px]" />

      <div className="absolute bottom-37.5 right-30 w-87.5 h-87.5 bg-[#C0FF00]/10 rounded-full blur-[140px]" />

      <div className="max-w-350 mx-auto px-6 sm:px-8 lg:px-12 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20">
          {/* Left */}

          <div>
            <p className="text-[#E7DBFF] tracking-[3px] uppercase text-sm mb-6 font-[Nexa]">
              Let's Connect
            </p>

            <h2 className="font-[Founders] text-4xl sm:text-5xl lg:text-6xl leading-[1.05] mb-8">
              Let's build something extraordinary together.
            </h2>

            <p className="font-[Nexa] text-purple-100/80 leading-8 max-w-137.5 mb-10">
             CreativeLab Studio is a boutique creative studio specializing in branding, digital experiences, visual storytelling, and modern design systems.
            </p>

            <div className="space-y-7">
              <div>
                <h3 className="text-[#C0FF00] text-2xl font-semibold mb-2">
                  Reach us by phone
                </h3>

                <div className="flex items-center gap-3 text-purple-100">
                  <FaPhoneAlt />

                  <span>+91 88979 86707</span>
                </div>
              </div>

              <div>
                <h3 className="text-[#C0FF00] text-2xl font-semibold mb-2">
                  Drop us a line
                </h3>

                <div className="flex items-center gap-3 text-purple-100">
                  <FaEnvelope />

                  <span>hey@creativelabstudio.in</span>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-10">
              {[<FaInstagram />, <FaLinkedinIn />].map((icon, index) => (
                <button
                  key={index}
                  className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-[#6F00FF] duration-300 backdrop-blur-md cursor-pointer"
                >
                  {icon}
                </button>
              ))}
            </div>
          </div>

          {/* Right */}

          <div>
            <h3 className="font-[Founders] text-3xl mb-8">Get in touch</h3>

            <form className="space-y-5">
              <input
                type="text"
                placeholder="Your name"
                className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-5 outline-none text-white placeholder:text-purple-100/70 focus:border-white duration-300"
              />

              <input
                type="email"
                placeholder="Your email address"
                className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-5 outline-none text-white placeholder:text-purple-100/70 focus:border-white duration-300"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-5 outline-none text-white placeholder:text-purple-100/70 focus:border-white duration-300"
              />

              <textarea
                rows="5"
                placeholder="Tell us about your vision..."
                className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-[28px] px-6 py-5 outline-none resize-none text-white placeholder:text-purple-100/70 focus:border-white duration-300"
              />

              <button className="flex items-center gap-3 bg-white text-[#6F00FF] hover:bg-[#F5F0FF] px-8 py-4 rounded-full duration-300 hover:scale-105 font-semibold">
                <FaPaperPlane />
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/20 mt-20 pt-8 flex flex-col md:flex-row justify-between gap-5 text-purple-100/70">
          <p>© 2026 CreativeLab Studio. Crafted with intention.</p>

          <div><DevelopedByStaffArc/></div>

          <div className="flex gap-6">
            <p className="hover:text-white duration-300 cursor-pointer">
              Terms & Conditions
            </p>

            <p className="hover:text-white duration-300 cursor-pointer">
              Privacy Policy
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
