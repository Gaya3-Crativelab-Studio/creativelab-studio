import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navigate = useNavigate();

  const navItems = [
    { name: "HOME", path: "/" },
    { name: "ABOUT", path: "/about" },
    { name: "SERVICES", path: "/services" },
    { name: "PORTFOLIO", path: "/portfolio" },
  ];

  const logo =
    "https://res.cloudinary.com/dcnmzhp9k/image/upload/v1779779956/Creative_Lab_v0xrl3.svg";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/90 backdrop-blur-2xl shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
            : "bg-white/10 backdrop-blur-xl"
        }`}
      >
        <div className="absolute inset-0 bg-linear-to-r from-[#6F00FF]/5 via-transparent to-[#C0FF00]/5 pointer-events-none" />

        <nav className="max-w-350 mx-auto px-5 sm:px-8 lg:px-12 h-26 flex items-center justify-between relative">
          {/* Logo */}

          <NavLink to="/">
            <img
              src={logo}
              alt="CreativeLab Studio"
              className="h-18 sm:h-28 object-contain"
            />
          </NavLink>

          {/* Desktop Nav */}

          <ul className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `relative text-sm tracking-wide pb-2 transition-all duration-300 ${
                      isActive
                        ? "text-[#6F00FF]"
                        : "text-[#111111] hover:text-[#6F00FF]"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {item.name}

                      <span
                        className={`absolute left-0 bottom-0 h-0.5 rounded-full bg-[#6F00FF] transition-all duration-500 ${
                          isActive ? "w-full" : "w-0"
                        }`}
                      />
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}

          <button
            onClick={() => navigate("/contact")}
            className="hidden lg:flex px-7 py-3 rounded-full bg-[#6F00FF] hover:bg-[#7B68EE] text-white font-semibold shadow-[0_15px_35px_rgba(111,0,255,0.25)] hover:scale-105 duration-300 cursor-pointer"
          >
            Contact Us
          </button>

          {/* Mobile Menu Button */}

          <button
            onClick={() => setIsOpen(true)}
            className="lg:hidden text-[#111111] text-4xl z-[1001]"
          >
            <FiMenu />
          </button>
        </nav>
      </header>

      {/* Overlay */}

      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 bg-black/45 backdrop-blur-md z-[998] lg:hidden transition-all duration-500 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* Mobile Menu */}

      <div
        className={`fixed top-0 right-0 h-screen w-full max-w-100
        bg-white/95 backdrop-blur-2xl
        border-l border-[#6F00FF]/10
        shadow-[-10px_0_40px_rgba(0,0,0,0.15)]
        z-[999]
        transition-all duration-500
        lg:hidden
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Header */}

        <div className="flex justify-between items-center px-6 py-5 border-b border-[#ECECEC]">
          <img src={logo} alt="CreativeLab" className="h-20 object-contain" />

          <button
            onClick={() => setIsOpen(false)}
            className="text-4xl text-[#111111] cursor-pointer"
          >
            <FiX />
          </button>
        </div>

        {/* Nav Items */}

        <div className="flex flex-col px-8 pt-10">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `font-[Founders]
                text-xl
                py-3
                duration-300
                ${isActive ? "text-[#6F00FF]" : "text-[#111111]"}`
              }
            >
              {item.name}
            </NavLink>
          ))}

          <button
            onClick={() => {
              navigate("/contact");
              setIsOpen(false);
            }}
            className="mt-8 bg-[#6F00FF]
            hover:bg-[#7B68EE]
            py-4
            rounded-full
            text-white
            shadow-[0_5px_30px_rgba(111,0,255,0.25)]
            duration-300
            cursor-pointer"
          >
            Contact Us
          </button>
        </div>
      </div>
    </>
  );
};

export default NavBar;
