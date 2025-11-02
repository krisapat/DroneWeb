"use client";
import { useScroll, useVelocity, useSpring } from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface ScrollTickerProps {
  items: React.ReactNode[];
  baseSpeed?: number;
}

export default function ScrollTicker({ items, baseSpeed = 100 }: ScrollTickerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 20, stiffness: 120 });

  const x = useRef(0);
  const width = useRef(0);
  const [repeatCount, setRepeatCount] = useState(2);

  // คำนวณจำนวนรอบที่ต้องซ้ำ
  useEffect(() => {
    const calc = () => {
      if (!containerRef.current || !contentRef.current) return;
      const visibleWidth = containerRef.current.offsetWidth;
      const singleSetWidth = contentRef.current.scrollWidth / repeatCount;
      width.current = singleSetWidth;
      const needed = Math.ceil((visibleWidth + singleSetWidth) / singleSetWidth) + 1;
      setRepeatCount(needed);
    };
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);

  // เคลื่อนไหวเมื่อ scroll
  useEffect(() => {
    if (!contentRef.current) return;
    let lastTime = performance.now();
    const el = contentRef.current;

    const animate = (time: number) => {
      const delta = time - lastTime;
      lastTime = time;

      const velocity = smoothVelocity.get();
      const direction = Math.sign(velocity);
      const scrollSpeed = Math.abs(velocity) / 500;
      const move = direction * baseSpeed * scrollSpeed * (delta / 1000);

      if (Math.abs(velocity) > 5) {
        x.current -= move;

        // วนต่อเนื่องไม่กระตุก
        if (x.current <= -width.current) x.current += width.current;
        else if (x.current >= 0) x.current -= width.current;

        el.style.transform = `translateX(${x.current}px)`;
      }

      requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [baseSpeed, smoothVelocity]);

  // render ซ้ำตาม repeatCount
  const repeatedItems = Array.from({ length: repeatCount })
    .map(() => items)
    .flat();

  return (
    <div ref={containerRef} className="overflow-hidden w-full py-4 select-none">
      <div
        ref={contentRef}
        className="flex will-change-transform whitespace-nowrap"
        style={{ transform: "translateX(0px)" }}
      >
        {repeatedItems.map((node, i) => (
          <div key={i} className="flex-shrink-0">
            {node}
          </div>
        ))}
      </div>
    </div>
  );
}