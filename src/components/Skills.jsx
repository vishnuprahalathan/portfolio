import React from "react";
import { motion } from "framer-motion";
import { technologies } from "../constants";
import { SectionWrapper } from "../hoc";

const TechCard = ({ tech, index }) => {
    const Icon = tech.icon;

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05, duration: 0.5 }}
            whileHover={{ scale: 1.1, y: -10 }}
            className='w-28 h-28 flex flex-col items-center justify-center gap-2 bg-tertiary rounded-xl p-4 shadow-card cursor-pointer border border-transparent hover:border-[#915EFF] transition-all duration-300'
        >
            <Icon size={40} color={tech.color} />
            <p className='text-white text-[12px] text-center font-medium'>{tech.name}</p>
        </motion.div>
    );
};

const Skills = () => {
    return (
        <>
            <motion.div>
                <p className={`sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider`}>
                    My Arsenal
                </p>
                <h2 className={`text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]`}>
                    Tech Stack.
                </h2>
            </motion.div>

            <div className='w-full flex'>
                <motion.p
                    className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
                >
                    I work with a diverse range of technologies spanning cybersecurity, AI/ML,
                    full-stack development, and DevOps. Here are the tools and frameworks I use to
                    build secure, scalable, and intelligent systems.
                </motion.p>
            </div>

            <div className='mt-20 flex flex-wrap gap-10 justify-center'>
                {technologies.map((tech, index) => (
                    <TechCard key={tech.name} tech={tech} index={index} />
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(Skills, "skills");
