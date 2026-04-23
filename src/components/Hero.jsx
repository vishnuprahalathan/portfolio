import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import ParticleBackground from "./ParticleBackground";

const containerVariants = {
    hidden: {},
    show: {
        transition: { staggerChildren: 0.18, delayChildren: 0.3 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

const Hero = () => {
    return (
        <section className="relative w-full h-screen mx-auto overflow-hidden">
            <ParticleBackground />

            {/* Ambient glow orbs */}
            <div
                className="hero-bg-orb"
                style={{
                    width: 520,
                    height: 520,
                    background: "radial-gradient(circle, rgba(176,38,255,0.22) 0%, transparent 70%)",
                    top: "-10%",
                    left: "-8%",
                }}
            />
            <div
                className="hero-bg-orb"
                style={{
                    width: 420,
                    height: 420,
                    background: "radial-gradient(circle, rgba(77,168,218,0.18) 0%, transparent 70%)",
                    bottom: "5%",
                    right: "5%",
                }}
            />

            <div className="absolute inset-0 top-[120px] max-w-7xl mx-auto px-4 flex flex-row items-start gap-5">
                {/* Accent line */}
                <div className="flex flex-col justify-center items-center mt-5">
                    <motion.div
                        className="w-5 h-5 rounded-full bg-[#B026FF] glow"
                        animate={{ scale: [1, 1.25, 1] }}
                        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                    />
                    <div className="w-1 sm:h-80 h-40 violet-gradient" />
                </div>

                {/* Main content */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                    className="flex flex-col"
                >
                    {/* Badge */}
                    <motion.div variants={itemVariants}>
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest glass border border-[#B026FF]/30 text-[#B026FF] mb-4 w-fit">
                            <span className="w-2 h-2 rounded-full bg-[#B026FF] animate-pulse inline-block" />
                            Available for Opportunities
                        </span>
                    </motion.div>

                    {/* Name heading */}
                    <motion.h1
                        variants={itemVariants}
                        className="font-black text-white lg:text-[82px] sm:text-[62px] xs:text-[50px] text-[40px] lg:leading-[1] leading-tight"
                    >
                        Hi, I&apos;m{" "}
                        <span className="gradient-text">Vishnu</span>
                    </motion.h1>

                    {/* Typewriter subtitle */}
                    <motion.p
                        variants={itemVariants}
                        className="text-[#adb5d4] font-medium lg:text-[28px] sm:text-[22px] xs:text-[18px] text-[15px] mt-4 leading-snug"
                    >
                        I am a{" "}
                        <span style={{ color: "#B026FF", fontWeight: "bold" }}>
                            <Typewriter
                                words={[
                                    "Cybersecurity Researcher",
                                    "AI / ML Developer",
                                    "Full Stack Developer",
                                    "Graphic Designer",
                                    "DevOps Enthusiast",
                                ]}
                                loop={0}
                                cursor
                                cursorStyle="_"
                                typeSpeed={68}
                                deleteSpeed={45}
                                delaySpeed={1200}
                            />
                        </span>
                    </motion.p>

                    {/* CTA buttons */}
                    <motion.div variants={itemVariants} className="flex gap-4 mt-8 flex-wrap">
                        <a
                            href="#projects"
                            className="px-6 py-3 rounded-full font-semibold text-sm text-white bg-[#B026FF] hover:bg-[#9a1ee0] glow transition-all duration-300"
                        >
                            View Projects
                        </a>
                        <a
                            href="#contact"
                            className="px-6 py-3 rounded-full font-semibold text-sm text-white glass border border-[#B026FF]/40 hover:border-[#B026FF] transition-all duration-300"
                        >
                            Contact Me
                        </a>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
                <a href="#about">
                    <div className="w-[35px] h-[64px] rounded-3xl border-2 border-[#B026FF]/50 flex justify-center items-start p-2 glass">
                        <motion.div
                            animate={{ y: [0, 24, 0] }}
                            transition={{ duration: 1.6, repeat: Infinity, repeatType: "loop" }}
                            className="w-3 h-3 rounded-full bg-[#B026FF] mb-1 glow"
                        />
                    </div>
                </a>
            </div>
        </section>
    );
};

export default Hero;
