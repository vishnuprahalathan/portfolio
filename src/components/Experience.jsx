import React from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";

const ExperienceCard = ({ experience }) => {
    return (
        <VerticalTimelineElement
            contentStyle={{
                background: "rgba(14, 10, 30, 0.75)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                color: "#fff",
                border: "1px solid rgba(176,38,255,0.18)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
                borderRadius: "16px",
            }}
            contentArrowStyle={{ borderRight: "7px solid rgba(176,38,255,0.3)" }}
            date={
                <span className="text-[#B026FF] font-semibold text-sm">
                    {experience.date}
                </span>
            }
            iconStyle={{
                background: experience.iconBg,
                border: "2px solid rgba(176,38,255,0.4)",
                boxShadow: "0 0 16px rgba(176,38,255,0.25)",
            }}
            icon={
                <div className="flex justify-center items-center w-full h-full">
                    <img
                        src={experience.icon}
                        alt={experience.company_name}
                        className="w-[60%] h-[60%] object-contain"
                    />
                </div>
            }
        >
            <div>
                <h3 className="text-white text-[22px] font-bold leading-tight">
                    {experience.title}
                </h3>
                <p
                    className="text-[#B026FF] text-[15px] font-semibold mt-1"
                    style={{ margin: "4px 0 0 0" }}
                >
                    {experience.company_name}
                </p>
            </div>

            <ul className="mt-5 list-none space-y-2">
                {experience.points.map((point, index) => (
                    <li
                        key={`experience-point-${index}`}
                        className="text-[#adb5d4] text-[13.5px] pl-4 tracking-wide leading-relaxed relative before:content-['▸'] before:absolute before:left-0 before:text-[#B026FF]"
                    >
                        {point}
                    </li>
                ))}
            </ul>
        </VerticalTimelineElement>
    );
};

const Experience = () => {
    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <p className="sm:text-[18px] text-[14px] text-[#B026FF] uppercase tracking-widest font-semibold">
                    What I have done so far
                </p>
                <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
                    Experience & Education.
                </h2>
            </motion.div>

            <div className="mt-20 flex flex-col">
                <VerticalTimeline lineColor="rgba(176,38,255,0.25)">
                    {experiences.map((experience, index) => (
                        <ExperienceCard
                            key={`experience-${index}`}
                            experience={experience}
                        />
                    ))}
                </VerticalTimeline>
            </div>
        </>
    );
};

export default SectionWrapper(Experience, "work");
