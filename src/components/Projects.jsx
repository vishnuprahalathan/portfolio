import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { FaGithub, FaBehance, FaExternalLinkAlt } from "react-icons/fa";

import { projects } from "../constants";
import { SectionWrapper } from "../hoc";

const ProjectCard = ({ index, name, description, tags, image, source_code_link, iconType }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: index * 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="group"
        >
            <Tilt
                options={{ max: 12, scale: 1.02, speed: 600, glare: true, "max-glare": 0.08 }}
                className="relative glass-strong rounded-2xl overflow-hidden border border-transparent hover:border-[#B026FF]/40 transition-all duration-500 sm:w-[360px] w-full"
                style={{ boxShadow: "0 8px 40px rgba(0,0,0,0.5)" }}
            >
                {/* Image */}
                <div className="relative w-full h-[210px] overflow-hidden">
                    <img
                        src={image}
                        alt={name}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050210] via-transparent to-transparent opacity-80" />

                    {/* Source link button */}
                    <motion.div
                        onClick={() => window.open(source_code_link, "_blank")}
                        className="absolute top-3 right-3 w-9 h-9 rounded-full glass border border-[#B026FF]/30 flex justify-center items-center cursor-pointer opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-[#B026FF]/20 hover:border-[#B026FF]"
                        whileHover={{ scale: 1.15 }}
                        whileTap={{ scale: 0.95 }}
                        title={iconType === "behance" ? "View on Behance" : "View on GitHub"}
                    >
                        {iconType === "behance" ? (
                            <FaBehance size={16} color="white" />
                        ) : (
                            <FaGithub size={16} color="white" />
                        )}
                    </motion.div>
                </div>

                {/* Content */}
                <div className="p-5">
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="text-white font-bold text-[20px] leading-tight group-hover:text-[#B026FF] transition-colors duration-300">
                            {name}
                        </h3>
                        <motion.button
                            onClick={() => window.open(source_code_link, "_blank")}
                            className="flex-shrink-0 ml-2 text-[#adb5d4] hover:text-[#B026FF] transition-colors duration-200 mt-0.5"
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                            aria-label={`Open ${name}`}
                        >
                            <FaExternalLinkAlt size={13} />
                        </motion.button>
                    </div>

                    <p className="text-[#8892b0] text-[13.5px] leading-relaxed line-clamp-3">
                        {description}
                    </p>

                    {/* Tags */}
                    <div className="mt-4 flex flex-wrap gap-2">
                        {tags.map((tag) => (
                            <span
                                key={`${name}-${tag.name}`}
                                className={`text-[11px] font-bold px-3 py-1 rounded-full ${tag.color}`}
                                style={{
                                    background: "rgba(176,38,255,0.07)",
                                    border: "1px solid rgba(176,38,255,0.15)",
                                    display: "inline-block",
                                }}
                            >
                                #{tag.name}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#B026FF]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Tilt>
        </motion.div>
    );
};

const Projects = () => {
    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <p className="sm:text-[18px] text-[14px] text-[#B026FF] uppercase tracking-widest font-semibold">
                    My Work
                </p>
                <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
                    Projects.
                </h2>
            </motion.div>

            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="mt-3 text-[#8892b0] text-[17px] max-w-3xl leading-[30px]"
            >
                A curated selection of my real-world projects — from AI-driven cybersecurity systems
                to full-stack platforms and creative design work. Each project reflects my ability to
                solve complex problems and ship polished, production-ready solutions.
            </motion.p>

            <div className="mt-16 flex flex-wrap gap-7 justify-start">
                {projects.map((project, index) => (
                    <ProjectCard key={`project-${index}`} index={index} {...project} />
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(Projects, "projects");
