import React from "react";
import { FaGithub, FaLinkedin, FaBehance, FaHeart } from "react-icons/fa";
import { motion } from "framer-motion";

const socials = [
    { icon: FaGithub, href: "https://github.com/vishnuprahalathan", label: "GitHub" },
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/vishnuprahalathan", label: "LinkedIn" },
    { icon: FaBehance, href: "https://www.behance.net/vishnuprahalathan", label: "Behance" },
];

const Footer = () => {
    return (
        <motion.footer
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full py-10 px-4 border-t border-[#B026FF]/10"
            style={{ background: "rgba(2,0,15,0.6)" }}
        >
            {/* Top glow line */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-[1px] bg-gradient-to-r from-transparent via-[#B026FF]/50 to-transparent" />

            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
                {/* Brand */}
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#B026FF] to-[#4da8da] flex items-center justify-center text-white font-black text-xs">
                        VP
                    </div>
                    <span className="text-[#adb5d4] text-sm">
                        <span className="text-white font-semibold">Vishnu Prahalathan</span>
                        {" "}· Built with{" "}
                        <FaHeart className="inline text-[#B026FF]" size={10} />
                        {" "}& React
                    </span>
                </div>

                {/* Socials */}
                <div className="flex items-center gap-4">
                    {socials.map(({ icon: Icon, href, label }) => (
                        <a
                            key={label}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={label}
                            className="text-[#8892b0] hover:text-[#B026FF] transition-colors duration-300"
                        >
                            <Icon size={18} />
                        </a>
                    ))}
                </div>

                {/* Copyright */}
                <p className="text-[#8892b0] text-xs">
                    © {new Date().getFullYear()} All rights reserved.
                </p>
            </div>
        </motion.footer>
    );
};

export default Footer;
