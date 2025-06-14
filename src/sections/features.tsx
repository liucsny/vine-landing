"use client"

import Image from "next/image";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import styles from "@/styles/styles.module.css";

export default function Features() {
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
                className="relative flex flex-col gap-4 items-center justify-center px-4 pt-36 pb-12"
            >
                <h2 className="font-bold text-4xl text-gray-800">Powerful Features for Content Analysis</h2>
                <p className="text-gray-500 text-base text-center">Our comprehensive toolkit gives you everything you need to analyze and understand your business content</p>
            </motion.div>
            <div className="max-w-[1200px] mx-auto grid grid-cols-2 gap-6 px-8">
                <FeatureCard tag="AI Ability" title="Fewshot Learning" description="Teach the model with just a few examples, so it can quickly adapt to new tasks without needing large datasets."></FeatureCard>
                <FeatureCard tag="AI Ability" title="Prompt Engineering" description="Design instructions to get better responses from the model, optimizing AI performance for your specific needs."></FeatureCard>
                <FeatureCard tag="AI Ability" title="Rulebase" description="Rulebase helps you find risk content via your custom keywords/regex,etc."></FeatureCard>
                <FeatureCard tag="Business Solutions" title="Workflow" description="Orchestrate AI abilities & launch your strategies to cover online data processing and analysis"></FeatureCard>
                <FeatureCard tag="Assets Management" title="Dataset" description="Valuable and reusable datasets used in model training and evaluation to improve AI performance"></FeatureCard>
                <motion.div
                    initial={{ opacity: 0.0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                >
                    <div className="w-full h-full border borderr-[#2F384B]/30 rounded-2xl p-6">
                        <div className="w-full h-full border borderr-[#2F384B]/30 rounded-2xl border-dashed flex items-center justify-center">
                            <p className="text-gray-400">More features coming soon...</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

function FeatureCard({
    title,
    description,
    className,
    tag
}: {
    title?: string;
    description?: string;
    className?: string;
    tag?: string
}): React.ReactElement {
    return <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
        }}
    >
        <div className={cn("border border-gray-200 rounded-xl p-6 flex flex-col gap-4 bg-white", className, styles["feature-cards"])}>
            <div className="flex flex-col gap-2 mb-3">
                <div className="flex gap-0.5 text-[#457DB6] font-semibold text-xs border border-[#649ED8]/40 pl-1 pr-2 py-0.5 rounded-md w-fit bg-[#F5FAFF]">
                    <Image src={`/features/stars.svg`} alt="ai" width={16} height={16} className="w-fit h-fit" />
                    <p>{tag}</p>
                </div>
                <h3 className="font-semibold text-lg text-gray-800">{title}</h3>
                <p className="text-gray-500 text-base/5">{description}</p>
            </div>
            <Image src={`/features/${title}.svg`} alt="feature" width={462} height={193} className="w-full h-fit" />
        </div>
    </ motion.div>
}