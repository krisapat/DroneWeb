"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { words } from "@/utils/words";
import { backend, frontend } from "@/utils/stack";
import FeontendStack from "@/components/stacks/FeontendStack";
import FadeUpWhenVisible from "@/components/animations/FadeUpWhenVisible";

// โหลด animation components แบบ lazy
const TypingHeader = dynamic(() => import("@/components/animations/TypingHeader"), {
  ssr: false,
});
const UseModel = dynamic(() => import("@/components/3dmodel/UseModel"), {
  ssr: false,
});
const ScrollTicker = dynamic(() => import("@/components/animations/ScrollTicker"), {
  ssr: false,
});

export default function HomePage() {
  // ใช้ inView เพื่อ render เฉพาะเมื่อถึง viewport
  const { ref: modelRef, inView: showModel } = useInView({ threshold: 0.2 });
  const { ref: tickerRef, inView: showTicker } = useInView({ threshold: 0.2 });

  return (
    <main>
      {/* Hero section */}
      <section className="relative w-full min-h-screen -mt-15">
        {/* 3D Model Background */}
        <div className="absolute inset-0 z-0" ref={modelRef}>
          {showModel && (
            <Suspense fallback={<div className="h-full w-full bg-gray-200 dark:bg-gray-800" />}>
              <UseModel />
            </Suspense>
          )}
        </div>

        {/* Overlay gradient */}
        <div className="absolute h-full w-full inset-0 z-0 bg-gradient-to-b from-transparent via-white/80 to-transparent dark:via-black/10"></div>

        {/* Overlay content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6">
          <Suspense fallback={<h1 className="text-4xl font-bold text-gray-400">Loading...</h1>}>
            <TypingHeader
              className="text-4xl md:text-5xl font-bold mb-6 text-primary drop-shadow-lg text-center"
              words={words}
            />
          </Suspense>

          <p className="text-gray-900 dark:text-gray-300 max-w-xl drop-shadow-lg text-center mb-8 font-semibold">
            Drone data recording and tracking system with real-time logs and temperature recording.
          </p>

          <div className="flex gap-4">
            <Button
              asChild
              size="lg"
              className="shadow-md text-white dark:text-black bg-primary dark:bg-primary-dark transition-transform duration-300 hover:scale-105"
            >
              <Link href="/temperature">Temperature record</Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="shadow-md border-primary text-primary dark:text-primary-dark dark:border-primary-dark transition-transform duration-300 hover:scale-105"
            >
              <Link href="/logsTable?page=1">View Logs</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Scroll ticker — โหลดเฉพาะเมื่อใกล้ถึง viewport */}
      <section ref={tickerRef}>
        {showTicker && (
          <Suspense fallback={<div className="h-32 bg-gray-100 dark:bg-gray-800" />}>
            <ScrollTicker
              items={[
                <Image src="/img/bg/pexels-didsss-6862219.jpg" key={"bg1"} alt="bg1" width={120} height={120} />,
                <Image src="/img/bg/pexels-didsss-7013728.jpg" key={"bg2"} alt="bg2" width={120} height={120} />,
                <Image src="/img/bg/pexels-didsss-7450561.jpg" key={"bg3"} alt="bg3" width={120} height={120} />,
                <Image src="/img/bg/pexels-diva-30307611.jpg" key={"bg4"} alt="bg4" width={120} height={120} />,
                <Image src="/img/bg/pexels-diva-30690582.jpg" key={"bg5"} alt="bg5" width={120} height={120} />,
              ]}
              baseSpeed={80}
            />
          </Suspense>
        )}
      </section>

      {/* Stack section */}
      <section className="space-y-6 mb-1 min-h-screen flex flex-col justify-center items-center">
        <div>
          <Suspense fallback={<h2 className="text-2xl font-bold text-gray-400">Loading...</h2>}>
            <FadeUpWhenVisible>
              <h2 className="text-4xl md:text-5xl text-center font-bold mb-6">Stack for frontend</h2>
            </FadeUpWhenVisible>
          </Suspense>
          <FeontendStack skills={frontend} />
        </div>

        <div>
          <Suspense fallback={<h2 className="text-2xl font-bold text-gray-400">Loading...</h2>}>
            <FadeUpWhenVisible>
              <h2 className="text-4xl md:text-5xl text-center font-bold mb-6">Stack for backend</h2>
            </FadeUpWhenVisible>
          </Suspense>
          <FeontendStack skills={backend} />
        </div>
      </section>
    </main>
  );
}
