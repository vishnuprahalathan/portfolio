import React, { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
    const [isVisible, setIsVisible] = useState(false);

    const springConfig = { damping: 20, stiffness: 200, mass: 0.5 };
    const cursorX = useSpring(-100, springConfig);
    const cursorY = useSpring(-100, springConfig);

    useEffect(() => {
        const mouseMove = (e) => {
            if (!isVisible) setIsVisible(true);
            setMousePosition({
                x: e.clientX,
                y: e.clientY,
            });
            cursorX.set(e.clientX - 16);
            cursorY.set(e.clientY - 16);
        };

        const handleMouseOut = () => setIsVisible(false);

        window.addEventListener("mousemove", mouseMove);
        window.addEventListener("mouseout", handleMouseOut);

        return () => {
            window.removeEventListener("mousemove", mouseMove);
            window.removeEventListener("mouseout", handleMouseOut);
        };
    }, [cursorX, cursorY, isVisible]);

    if (!isVisible) return null;

    return (
        <>
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-[#915EFF] pointer-events-none z-[9999] hidden md:block"
                style={{
                    x: cursorX,
                    y: cursorY,
                }}
            />
            <motion.div
                className="fixed top-0 left-0 w-2 h-2 rounded-full bg-[#915EFF] pointer-events-none z-[9999] hidden md:block"
                animate={{
                    x: mousePosition.x - 4,
                    y: mousePosition.y - 4,
                }}
                transition={{ type: "tween", ease: "backOut", duration: 0 }}
            />
        </>
    );
};

export default CustomCursor;
