"use client"

import Image from "next/image";
import { motion } from "motion/react";
import { ShieldCheck, Zap, BriefcaseBusiness } from 'lucide-react';


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
                className="relative flex flex-col gap-4 items-center justify-center px-4 pt-36 pb-24"
            >
                <h2 className="font-bold text-4xl text-gray-800">Real-World Problem Solving</h2>
                <p className="text-gray-500 text-base text-center">See how Vine addresses critical business challenges with AI-powered solutions</p>
            </motion.div>
            <div className="max-w-[1200px] mx-auto px-12">
                <motion.div
                    initial={{ opacity: 0.0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className=""
                >
                    <div className="flex items-center mb-32 gap-4">
                        <div className="basis-1/2">
                            <div className="w-96">
                                <div className="flex gap-0.5 text-[#B64548] font-semibold text-xs border border-[#D86468]/40 pl-1 pr-2 py-0.5 rounded-md w-fit bg-[#FFF5F5] mb-2 items-center">
                                    <ShieldCheck size={14} />
                                    <p>Risk Governance</p>
                                </div>
                                <h3 className="text-2xl font-semibold text-gray-800 mb-2">Struggling with inaccurate feature matching?</h3>
                                <p className="text-base font-medium text-gray-500">Try Vine to accelerate development with few-shot or zero-shot learning, and boost performance through prompt integration.</p>
                            </div>
                        </div>

                        <Image
                            src="/scenarios/Risk Governance.svg"
                            alt="scenarios"
                            width={578}
                            height={300}
                        />

                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0.0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className=""
                >
                    <div className="flex items-center mb-32 flex-row-reverse gap-4">
                        <div className="basis-1/2 flex justify-end">
                            <div className="w-96">
                                <div className="flex gap-0.5 text-[#A36429] font-semibold text-xs border border-[#D89C64]/40 pl-1 pr-2 py-0.5 rounded-md w-fit bg-[#FFFAF5] mb-2 items-center">
                                    <Zap size={14} />
                                    <p>Risk Investigation</p>
                                </div>
                                <h3 className="text-2xl font-semibold text-gray-800 mb-2">Frustrated by the poor performance of a single model?</h3>
                                <p className="text-base font-medium text-gray-500">Try Vine to accelerate development with few-shot or zero-shot learning, and boost performance through prompt integration.</p>
                            </div>
                        </div>
                        <Image
                            src="/scenarios/Risk Investigation.svg"
                            alt="scenarios"
                            width={578}
                            height={300}
                        />

                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0.0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className=""
                >
                    <div className="flex items-center mb-16 gap-4">
                        <div className="basis-1/2">
                            <div className="w-96">
                                <div className="flex gap-0.5 text-[#456AB6] font-semibold text-xs border border-[#648BD8]/40 pl-1 pr-2 py-0.5 rounded-md w-fit bg-[#F5F8FF] mb-2 items-center">
                                    <BriefcaseBusiness size={13} />
                                    <p>Business Problem Solution</p>
                                </div>
                                <h3 className="text-2xl font-semibold text-gray-800 mb-2">Feeling stuck with slow model iteration in daily work?</h3>
                                <p className="text-base font-medium text-gray-500">Try Vine to accelerate development with few-shot or zero-shot learning, and boost performance through prompt integration.</p>
                            </div>
                        </div>

                        <Image
                            src="/scenarios/Business Problem Solution.svg"
                            alt="scenarios"
                            width={578}
                            height={300}
                        />
                    </div>
                </motion.div>
            </div>
        </div>
    );
}