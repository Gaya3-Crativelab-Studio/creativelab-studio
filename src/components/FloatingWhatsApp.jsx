import { FaWhatsapp } from "react-icons/fa";

export default function FloatingWhatsApp({ message = "" }) {
  const phone = "918897986707";

  const text =
    message || "Hello CreativeLab Studio! I would like to discuss a project.";

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-8 right-8 z-999 group"
    >
      <div className="wa-pulse relative w-15 h-15 rounded-full bg-[#25D366] flex items-center justify-center shadow-[0_0_35px_rgba(37,211,102,0.45)] transition-all duration-300 hover:scale-110">
        <FaWhatsapp className="text-white text-[34px]" />
      </div>

      <span className="absolute right-[120%] top-1/2 -translate-y-1/2 bg-[#111111] border border-[#242424] text-white text-[13px] font-[Nexa] px-4 py-2 rounded-xl whitespace-nowrap opacity-0 group-hover:opacity-100 duration-300 pointer-events-none shadow-[0_0_25px_rgba(0,0,0,0.25)]">
        Chat with CreativeLab
      </span>
    </a>
  );
}
