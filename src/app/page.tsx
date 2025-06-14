import Image from "next/image";

import Nav from "@/components/customized/Nav";

import { Button } from "@/components/ui/button"

import Landing from "@/sections/landing";
import Features from "@/sections/features";
import Playground from "@/sections/playground";
import Scenarios from "@/sections/scenarios";
import Footer from "@/sections/footer";

import styles from "@/styles/styles.module.css";
import { cn } from "@/lib/utils";

// import 


export default function Home() {
  return (
    <div className="">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start w-full">
        <Nav />
        <Landing />
        <Scenarios />
        <Features />
        <Playground />
      </main>
      <Footer />
    </div>
  );
}
