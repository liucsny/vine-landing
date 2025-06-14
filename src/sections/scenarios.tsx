"use client"

import { motion } from "motion/react";

export default function Playground() {
    return (
        <div className="w-full">
            <motion.div
                initial={{ opacity: 0.0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: "easeInOut",
                }}
                className="relative flex flex-col gap-4 items-center justify-center px-4 py-36"
            >
                <h2 className="font-bold text-4xl text-gray-800">User Scenarios</h2>
                <p className="text-gray-500 text-base text-center">See how businesses across industries leverage Vine to gain insights from their content</p>
            </motion.div>
        </div>
    );
}