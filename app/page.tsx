import TypingHeader from "@/components/animations/TypingHeader"
import { words } from "@/utils/words"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import UseModel from "@/components/3dmodel/UseModel"

export default function HomePage() {
  return (
    <main className="relative w-full min-h-screen -mt-15">
      {/* 3D Model Background */}
      <div className="absolute inset-0 z-0">
        <UseModel />
      </div>

      {/* Overlay content */}
      <section className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6">
        {/* Header */}
        <TypingHeader
          className="text-4xl md:text-5xl font-bold mb-6 text-white drop-shadow-lg text-center"
          words={words}
        />

        {/* Subtitle */}
        <p className="text-gray-200 dark:text-gray-300 max-w-xl text-center mb-8">
          Drone data recording and tracking system with real-time logs and temperature recording.
        </p>

        {/* CTA Buttons */}
        <div className="flex gap-4">
          <Button
            asChild
            size="lg"
            className="transition-transform duration-300 hover:scale-105"
          >
            <Link href="/temperature">Temperature record</Link>
          </Button>

          <Button
            asChild
            size="lg"
            variant="outline"
            className="transition-transform duration-300 hover:scale-105"
          >
            <Link href="/logsTable?page=1">View Logs</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
