import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { services } from "../constants";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => (
    <Tilt className='xs:w-[250px] w-full'>
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            className='w-full gradient-border card-hover'
        >
            <div
                options={{
                    max: 45,
                    scale: 1,
                    speed: 450,
                }}
                className='glass-strong rounded-[18px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
            >
                {/* Render Icon component with animation */}
                <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                >
                    {React.createElement(icon, { size: 50, color: "#915EFF" })}
                </motion.div>

                <h3 className='text-white text-[20px] font-bold text-center'>
                    {title}
                </h3>
            </div>
        </motion.div>
    </Tilt>
);

const About = () => {
    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <p className={`sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider`}>Introduction</p>
                <h2 className={`text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]`}>Overview.</h2>
            </motion.div>

            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
            >
                I am a Final-year Computer Science Engineering student specializing in Cybersecurity.
                I have a strong foundation in Java, Python, and Network Security, with hands-on experience in
                AI-driven threat detection and secure full-stack development. My passion lies in building
                scalable, secure systems and leveraging Machine Learning to solve complex security challenges.
                <br /><br />
                Beyond cybersecurity, I'm also a self-taught graphic designer with experience creating logos,
                brochures, flyers, posters, and apparel designs. I'm passionate about branding and visual
                storytelling, using tools like Adobe Photoshop and Illustrator to bring creative ideas to life.
            </motion.p>

            <div className='mt-20 flex flex-wrap gap-10 justify-center'>
                {services.map((service, index) => (
                    <ServiceCard key={service.title} index={index} {...service} />
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(About, "about");
