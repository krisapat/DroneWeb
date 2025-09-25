import TypingHeader from "@/components/animations/TypingHeader"
import { words } from "@/utils/words"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import UseModel from "@/components/3dmodel/UseModel"
import FadeUpWhenVisible from "@/components/animations/FadeUpWhenVisible"
import FeontendStack from "@/components/stacks/FeontendStack"
import { backend, frontend } from "@/utils/stack"

export default function HomePage() {
  return (
    <main className="p-6">
      <section className="relative w-full min-h-screen -mt-21">
        {/* 3D Model Background */}
        <div className="absolute inset-0 z-0">
          <UseModel />
        </div>
        {/* Overlay gradient behind text */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-white/80 to-transparent dark:from-transparent dark:via-black/20 dark:to-transparent"></div>
        {/* Overlay content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6">
          {/* Header */}
          <TypingHeader
            className="text-4xl md:text-5xl font-bold mb-6 text-primary drop-shadow-lg text-center"
            words={words}
          />

          {/* Subtitle */}
          <p className="text-gray-900 dark:text-gray-300 max-w-xl drop-shadow-lg text-center mb-8 font-semibold">
            Drone data recording and tracking system with real-time logs and temperature recording.
          </p>

          {/* CTA Buttons */}
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
      <section className="space-y-6">
        <div>
          <FadeUpWhenVisible>
            <h2 className=" text-4xl text-center font-bold mb-6">Stack for frontend</h2>
          </FadeUpWhenVisible>
          <FeontendStack skills={frontend} />
        </div>
        <div>
          <FadeUpWhenVisible>
            <h2 className=" text-4xl text-center font-bold mb-6">Stack for backend</h2>
          </FadeUpWhenVisible>
          <FeontendStack skills={backend} />
        </div>
      </section>
    </main>
  )
}
