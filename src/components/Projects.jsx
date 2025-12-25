import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

import { projects } from "../constants";
import { SectionWrapper } from "../hoc";

const ProjectCard = ({
    index,
    name,
    description,
    tags,
    image,
    source_code_link,
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.75 }}
            whileHover={{ y: -10 }}
        >
            <Tilt
                options={{
                    max: 45,
                    scale: 1.02,
                    speed: 450,
                }}
                className='glass-strong p-5 rounded-2xl sm:w-[360px] w-full border border-transparent hover:border-[#915EFF] transition-all duration-300 card-hover glow'
            >
                <div className='relative w-full h-[230px]'>
                    <img
                        src={image}
                        alt='project_image'
                        className='w-full h-full object-cover rounded-2xl'
                    />

                    <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
                        <motion.div
                            onClick={() => window.open(source_code_link, "_blank")}
                            className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer glow'
                            whileHover={{ scale: 1.2, rotate: 360 }}
                            transition={{ duration: 0.3 }}
                        >
                            <FaGithub size={20} color="white" />
                        </motion.div>
                    </div>
                </div>

                <div className='mt-5'>
                    <h3 className='text-white font-bold text-[24px]'>{name}</h3>
                    <p className='mt-2 text-secondary text-[14px] leading-relaxed'>{description}</p>
                </div>

                <div className='mt-4 flex flex-wrap gap-2'>
                    {tags.map((tag) => (
                        <motion.p
                            key={`${name}-${tag.name}`}
                            className={`text-[14px] ${tag.color} px-3 py-1 rounded-full glass text-white`}
                            whileHover={{ scale: 1.1 }}
                        >
                            #{tag.name}
                        </motion.p>
                    ))}
                </div>
            </Tilt>
        </motion.div>
    );
};

const Projects = () => {
    return (
        <>
            <motion.div>
                <p className={`sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider`}>
                    My work
                </p>
                <h2 className={`text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]`}>
                    Projects.
                </h2>
            </motion.div>

            <div className='w-full flex'>
                <motion.p
                    className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
                >
                    Following projects showcase my skills and experience through
                    real-world examples of my work. Each project is briefly described with
                    links to code repositories. It reflects my
                    ability to solve complex problems, work with different technologies,
                    and manage projects effectively.
                </motion.p>
            </div>

            <div className='mt-20 flex flex-wrap gap-7'>
                {projects.map((project, index) => (
                    <ProjectCard key={`project-${index}`} index={index} {...project} />
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(Projects, "projects");
