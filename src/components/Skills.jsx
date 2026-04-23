import React from "react";
import { motion } from "framer-motion";
import { technologies } from "../constants";
import { SectionWrapper } from "../hoc";

const TechCard = ({ tech, index }) => {
    const Icon = tech.icon;

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.6, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -8, scale: 1.08 }}
            className="group relative flex flex-col items-center justify-center gap-3 w-28 h-28 rounded-2xl cursor-pointer transition-all duration-300"
            style={{
                background: "rgba(14, 10, 30, 0.6)",
                border: "1px solid rgba(176,38,255,0.12)",
                backdropFilter: "blur(12px)",
            }}
        >
            {/* Hover glow bg */}
            <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                    background: `radial-gradient(circle at center, ${tech.color}18 0%, transparent 70%)`,
                    border: `1px solid ${tech.color}40`,
                }}
            />

            <Icon size={36} color={tech.color || "#fff"} className="relative z-10 drop-shadow-lg" />
            <p className="relative z-10 text-[#adb5d4] group-hover:text-white text-[11px] text-center font-semibold tracking-wide transition-colors duration-300">
                {tech.name}
            </p>
        </motion.div>
    );
};

const Skills = () => {
    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <p className="sm:text-[18px] text-[14px] text-[#B026FF] uppercase tracking-widest font-semibold">
                    My Arsenal
                </p>
                <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
                    Tech Stack.
                </h2>
            </motion.div>

            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="mt-3 text-[#8892b0] text-[17px] max-w-3xl leading-[30px]"
            >
                I work with a diverse range of technologies spanning cybersecurity, AI/ML,
                full-stack development, and DevOps — building secure, scalable, and intelligent systems.
            </motion.p>

            <div className="mt-16 flex flex-wrap gap-5 justify-center">
                {technologies.map((tech, index) => (
                    <TechCard key={tech.name} tech={tech} index={index} />
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(Skills, "skills");
