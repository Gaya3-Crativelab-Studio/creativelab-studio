import { FiHeart } from "react-icons/fi";

const DevelopedByStaffArc = () => {
  return (
    <div className="flex items-center justify-center gap-2 text-sm md:text-base font-medium text-white/75">
      <span>Made with</span>
      <FiHeart className="text-red-600 text-lg" />
      <span>by</span>
      <img
        src="https://www.staffarc.in/_next/image?url=%2Fimages%2FStaffarc-logo.png&w=96&q=75"
        alt="StaffArc"
        className="h-6 w-auto object-contain"
      />
      <a
        href="https://www.staffarc.in"
        target="_blank"
        rel="noopener noreferrer"
        className="text-orange-500 font-semibold hover:underline transition-all duration-300"
      >
        StaffArc
      </a>
    </div>
  );
};

export default DevelopedByStaffArc;
