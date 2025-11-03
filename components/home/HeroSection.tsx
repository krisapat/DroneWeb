"use client";
import dynamic from "next/dynamic";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { words } from "@/utils/words";

const TypingHeader = dynamic(() => import("@/components/animations/TypingHeader"), {
  ssr: false,
  loading: () => <h1 className="text-4xl text-gray-400">Loading...</h1>,
});

const UseModel = dynamic(() => import("@/components/3dmodel/UseModel"), {
  ssr: false,
  loading: () => <div className="h-full w-full bg-gray-200 dark:bg-gray-800" />,
});

export default function HeroSection() {
  const { ref, inView } = useInView({ threshold: 0.2 });

  return (
    <section className="relative w-full min-h-screen -mt-15">
      <div className="absolute inset-0 z-0" ref={ref}>
        {inView && <UseModel />}
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6">
        <TypingHeader
          className="text-4xl md:text-5xl font-bold mb-6 text-primary drop-shadow-lg text-center"
          words={words}
        />
        <p className="text-gray-900 dark:text-gray-300 max-w-xl text-center mb-8 font-semibold">
          Drone data recording and tracking system with real-time logs and temperature recording.
        </p>

        <div className="flex gap-4">
          <Button asChild size="lg">
            <Link href="/temperature">Temperature record</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/logsTable?page=1">View Logs</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
