import React from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = () => {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-primary"
            style={{ pointerEvents: 'none' }}
        >
            <div className="text-center">
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="relative"
                >
                    <div className="w-20 h-20 border-4 border-[#915EFF] border-t-transparent rounded-full animate-spin mx-auto"></div>
                </motion.div>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="text-white text-2xl font-bold mt-6"
                >
                    Loading...
                </motion.h2>
            </div>
        </motion.div>
    );
};

export default LoadingScreen;
