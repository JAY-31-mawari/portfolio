import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { useNavigate } from "react-router-dom";
import { SiGithub, SiLinkedin, SiGmail } from "react-icons/si";

const Header = () => {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const github = import.meta.env.VITE_APP_GITHUB;
  const linkedin = import.meta.env.VITE_APP_LINKEDIN;
  const email = import.meta.env.VITE_APP_EMAIL;

  useEffect(() => {
    setSidebarOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: "Home", to: "/" },
    { label: "Experience", to: "/experience" },
    { label: "About", to: "/about" },
    { label: "Skills", to: "/skills" },
    { label: "Resume", to: "/resume" },
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavigate = () => {
    if (location.pathname === "/") {
      handleScrollToTop();
    } else {
      navigate("/");
    }
  };

  const handleLinkClick = (path: string) => {
    if (location.pathname === path) {
      handleScrollToTop();
    }
  };

  return (
    <>
      <header
        className="fixed top-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-5xl z-50 
        glass-panel rounded-full px-6 py-2.5 flex justify-between items-center 
        transition-all duration-300"
      >
        {/* Logo & Socials Group */}
        <div className="flex items-center gap-3">
          {/* Logo */}
          <h1
            className="flex items-center gap-2 text-xl font-bold tracking-tight cursor-pointer group"
            onClick={handleNavigate}
          >
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent font-extrabold transition-all group-hover:opacity-85">
              Portfolio
            </span>
          </h1>

          {/* Social Links Group (Left Fitted) */}
          <div className="hidden md:flex items-center gap-4 ml-2 border-l border-slate-200 dark:border-slate-800 pl-3">
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-full text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-900 transition-all hover:scale-110 active:scale-95"
              aria-label="GitHub"
            >
              <SiGithub size={16} />
            </a>
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-full text-slate-500 dark:text-slate-400 hover:text-[#0A66C2] dark:hover:text-[#0A66C2] hover:bg-slate-100 dark:hover:bg-slate-900 transition-all hover:scale-110 active:scale-125"
              aria-label="LinkedIn"
            >
              <SiLinkedin size={16} />
            </a>
            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-full text-slate-500 dark:text-slate-400 hover:text-[#EA4335] dark:hover:text-[#EA4335] hover:bg-slate-100 dark:hover:bg-slate-900 transition-all hover:scale-110 active:scale-95"
              aria-label="Email"
            >
              <SiGmail size={16} />
            </a>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-1 items-center text-sm font-medium">
          <nav className="flex gap-1 items-center mr-2">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => handleLinkClick(link.to)}
                className={`relative px-4 py-1.5 rounded-full transition-colors duration-300 ${isActive(link.to)
                  ? "text-blue-600 dark:text-blue-400"
                  : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                  }`}
              >
                <span className="relative z-10">{link.label}</span>
                {isActive(link.to) && (
                  <motion.span
                    layoutId="active-pill"
                    className="absolute inset-0 bg-slate-900/[0.04] dark:bg-white/[0.08] rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          <div className="h-4 w-[1px] bg-slate-200 dark:bg-slate-800 mx-2" />

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:scale-105 hover:bg-slate-100 dark:hover:bg-slate-900 transition-all text-slate-600 dark:text-slate-300 active:scale-95"
            aria-label="Toggle Theme"
          >
            <motion.div
              initial={false}
              animate={{ rotate: theme === "dark" ? 180 : 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
            >
              {theme === "dark" ? <Sun size={18} className="text-yellow-500" /> : <Moon size={18} />}
            </motion.div>
          </button>
        </div>

        {/* Mobile Nav Actions */}
        <div className="flex md:hidden items-center gap-2">
          {/* Dark Mode Toggle for Mobile Nav Bar */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-900 text-slate-600 dark:text-slate-300"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? <Sun size={18} className="text-yellow-500" /> : <Moon size={18} />}
          </button>

          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-900 text-slate-600 dark:text-slate-300"
          >
            {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {sidebarOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSidebarOpen(false)}
              className="fixed inset-0 bg-slate-950/20 dark:bg-black/40 backdrop-blur-sm z-40 md:hidden"
            />
            <motion.aside
              initial={{ x: "100%", opacity: 0.9 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0.9 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-20 right-4 h-[calc(100vh-6rem)] w-64 
                glass-panel rounded-3xl z-40 px-6 py-8 md:hidden flex flex-col justify-between"
            >
              <nav className="flex flex-col gap-3 text-base font-medium">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => {
                      handleLinkClick(link.to);
                      setSidebarOpen(false);
                    }}
                    className={`relative px-4 py-2.5 rounded-xl transition-all ${isActive(link.to)
                      ? "text-blue-600 dark:text-blue-400 bg-slate-900/[0.04] dark:bg-white/[0.06]"
                      : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/50 dark:hover:bg-slate-800/50"
                      }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              {/* Mobile Social Links Group */}
              <div className="border-t border-slate-200/50 dark:border-white/[0.04] pt-6 flex justify-center items-center gap-3">
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-900 transition-all hover:scale-110 active:scale-95"
                  aria-label="GitHub"
                >
                  <SiGithub size={18} />
                </a>
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full text-slate-600 dark:text-slate-300 hover:text-[#0A66C2] dark:hover:text-[#0A66C2] hover:bg-slate-100 dark:hover:bg-slate-900 transition-all hover:scale-110 active:scale-95"
                  aria-label="LinkedIn"
                >
                  <SiLinkedin size={18} />
                </a>
                <a
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full text-slate-600 dark:text-slate-300 hover:text-[#EA4335] dark:hover:text-[#EA4335] hover:bg-slate-100 dark:hover:bg-slate-900 transition-all hover:scale-110 active:scale-95"
                  aria-label="Email"
                >
                  <SiGmail size={18} />
                </a>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
