"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function SmoothScrollWrapper({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // เวลาที่ใช้ในการเลื่อน
      easing: (t) => t, // ฟังก์ชัน easing (linear)
      lerp: 0.1, // ความนุ่มของการเลื่อน
      smoothWheel: true, // เปิดใช้งานการเลื่อนด้วยเมาส์
      touchMultiplier: 2, // ปรับความเร็วสำหรับการสัมผัส
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return <>{children}</>;
}
