import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "../constants";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
    const [active, setActive] = useState("");
    const [toggle, setToggle] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 80);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className={`w-full flex items-center py-4 fixed top-0 z-20 transition-all duration-500 ${
                scrolled
                    ? "glass-strong shadow-[0_8px_32px_rgba(0,0,0,0.5)] border-b border-[#B026FF]/10"
                    : "bg-transparent"
            }`}
        >
            <div className="w-full flex justify-between items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Logo */}
                <Link
                    to="/"
                    className="flex items-center gap-3 group"
                    onClick={() => { setActive(""); window.scrollTo(0, 0); }}
                >
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#B026FF] to-[#4da8da] flex items-center justify-center text-white font-black text-sm glow group-hover:scale-110 transition-transform duration-300">
                        VP
                    </div>
                    <span className="text-white text-[17px] font-bold hidden sm:block tracking-wide">
                        Vishnu <span className="text-[#B026FF]">Prahalathan</span>
                    </span>
                </Link>

                {/* Desktop nav */}
                <ul className="list-none hidden sm:flex flex-row gap-1">
                    {navLinks.map((nav) => (
                        <li key={nav.id}>
                            <a
                                href={`#${nav.id}`}
                                onClick={() => setActive(nav.title)}
                                className={`relative px-4 py-2 rounded-full text-[15px] font-medium transition-all duration-300 ${
                                    active === nav.title
                                        ? "text-white bg-[#B026FF]/20"
                                        : "text-[#adb5d4] hover:text-white hover:bg-white/5"
                                }`}
                            >
                                {nav.title}
                                {active === nav.title && (
                                    <motion.div
                                        layoutId="nav-active"
                                        className="absolute inset-0 rounded-full border border-[#B026FF]/40"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                                    />
                                )}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Social icons (desktop) */}
                <div className="hidden sm:flex items-center gap-3">
                    <a
                        href="https://github.com/vishnuprahalathan"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#adb5d4] hover:text-[#B026FF] transition-colors duration-300"
                    >
                        <FaGithub size={20} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/vishnuprahalathan"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#adb5d4] hover:text-[#B026FF] transition-colors duration-300"
                    >
                        <FaLinkedin size={20} />
                    </a>
                    <a
                        href="#contact"
                        className="ml-2 px-5 py-2 rounded-full text-[14px] font-semibold text-white bg-[#B026FF] hover:bg-[#9a1ee0] glow transition-all duration-300"
                    >
                        Hire Me
                    </a>
                </div>

                {/* Mobile toggle */}
                <div className="sm:hidden flex items-center">
                    <button
                        className="cursor-pointer text-white text-2xl p-2 rounded-full glass border border-[#B026FF]/20"
                        onClick={() => setToggle(!toggle)}
                        aria-label="Toggle menu"
                    >
                        {toggle ? <FaTimes size={18} /> : <FaBars size={18} />}
                    </button>

                    <AnimatePresence>
                        {toggle && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, y: -10 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.9, y: -10 }}
                                transition={{ duration: 0.2, ease: "easeOut" }}
                                className="glass-strong absolute top-[72px] right-4 min-w-[180px] z-30 rounded-2xl p-4 border border-[#B026FF]/20 shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
                            >
                                <ul className="list-none flex flex-col gap-1">
                                    {navLinks.map((nav) => (
                                        <li key={nav.id}>
                                            <a
                                                href={`#${nav.id}`}
                                                className={`block px-4 py-2.5 rounded-xl text-[15px] font-medium transition-all duration-200 ${
                                                    active === nav.title
                                                        ? "text-white bg-[#B026FF]/20"
                                                        : "text-[#adb5d4] hover:text-white hover:bg-white/5"
                                                }`}
                                                onClick={() => { setToggle(false); setActive(nav.title); }}
                                            >
                                                {nav.title}
                                            </a>
                                        </li>
                                    ))}
                                    <li className="mt-2 pt-2 border-t border-[#B026FF]/10">
                                        <a
                                            href="#contact"
                                            className="block text-center px-4 py-2.5 rounded-xl text-[14px] font-semibold text-white bg-[#B026FF]/80 hover:bg-[#B026FF]"
                                            onClick={() => { setToggle(false); setActive("Contact"); }}
                                        >
                                            Hire Me
                                        </a>
                                    </li>
                                </ul>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;
