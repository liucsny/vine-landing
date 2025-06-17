"use client"
import Image from "next/image";
import { Button } from "@/components/ui/button"

import { motion } from "motion/react";
import React from "react";
import { AuroraBackground } from "@/components/ui/aurora-background";

import styles from "@/styles/styles.module.css";
import { cn } from "@/lib/utils";

export default function Landing() {
    return (
        <div className="w-full">
            <AuroraBackground className={`pt-32 pb-80 ${styles.landing}`}>
                <motion.div
                    initial={{ opacity: 0.0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className="relative flex flex-col gap-4 items-center justify-center px-4"
                >
                    <div className="flex items-center p-2.5 bg-white rounded-2xl border border-gray-600/20 shadow-md">
                        <Image src="/vine-logo.svg" alt="Vine" width={50} height={50} />
                    </div>
                    <div className="flex flex-col items-center mt-4">
                        <h1 className="font-bold text-[42px] max-w-[840px] text-center leading-14 text-gray-800 mb-4">Vine - The End-to-End Platform for Actionable Content Intelligence</h1>
                        <p className="text-gray-500 text-base max-w-[864px] text-center">From rapid model creation with a few examples to full workflow automation, Vine gives your team the power to understand and act on content in 30 minutes, not in weeks.</p>
                    </div>
                    <div className="flex items-center gap-4 mt-4">
                        <Button size="lg" className="shadow-lg shadow-[#4274E4]/30">Get Started</Button>
                        <Button variant="outline" size="lg" className="shadow-lg shadow-gray-300/20">Take a Tour</Button>
                        {/* <button className="text-sm text-white font-semibold bg-[#4274E4] hover:bg-[#4274E4]/80 px-6 py-2.5 rounded-md shadow-lg shadow-[#4274E4]/30">Get Started</button>
            <button className="text-sm text-gray-600 font-semibold border border-gray-600/20 bg-white hover:bg-gray-100 px-6 py-2.5 rounded-md shadow-lg shadow-gray-300/20">Take a Tour</button> */}
                    </div>
                </motion.div>
            </AuroraBackground>
            <motion.div
                initial={{ opacity: 0.0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: "easeInOut",
                }}
                className="relative flex flex-col gap-4 items-center justify-center px-4"
            >
                <div className="flex items-center justify-center w-full h-36 relative">
                    <Image src="/hero.svg" alt="Vine-hero" className="absolute -top-72" width={941} height={442} />
                </div>
            </motion.div>

        </div>

    );
}