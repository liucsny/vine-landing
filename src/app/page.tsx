import Image from "next/image";

import Nav from "@/components/customized/Nav";

import { Button } from "@/components/ui/button"


export default function Home() {
  return (
    <div className="">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Nav></Nav>
        <section className="flex flex-col items-center pt-36 pb-96 bg-[#DFF4FF]/20 w-full">
          <div className="flex items-center p-2.5 bg-white rounded-2xl border border-gray-600/20 shadow-md">
            <Image src="/vine-logo.svg" alt="Vine" width={50} height={50} />
          </div>
          <div className="flex flex-col items-center mt-8">
            <h1 className="font-bold text-[42px] text-gray-800">Meet Vine - The Smarter Way to Use AI</h1>
            <p className="text-gray-500 text-base max-w-[510px] text-center">Discover a powerful AI platform built for clarity, speed, and ease — so you can focus on what matters.</p>
          </div>
          <div className="flex items-center gap-4 mt-6">
            <Button>Get Started</Button>
            <Button>Take a Tour</Button>
            {/* <button className="text-sm text-white font-semibold bg-[#4274E4] hover:bg-[#4274E4]/80 px-6 py-2.5 rounded-md shadow-lg shadow-[#4274E4]/30">Get Started</button>
            <button className="text-sm text-gray-600 font-semibold border border-gray-600/20 bg-white hover:bg-gray-100 px-6 py-2.5 rounded-md shadow-lg shadow-gray-300/20">Take a Tour</button> */}
          </div>
        </section>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}
