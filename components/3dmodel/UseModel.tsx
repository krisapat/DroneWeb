"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Center, Environment } from "@react-three/drei";
import MyModel from "./MyModel";
import { Suspense, useMemo } from "react";
import { useInView } from "react-intersection-observer";

const MyCanvas = ({ active }: { active: boolean }) => (
  <>
    <ambientLight intensity={1} />
    <directionalLight position={[2, 4, 2]} intensity={2} />
    <Center>
      <MyModel />
    </Center>
    <OrbitControls enableZoom={false} autoRotate={false} enablePan />
    <Environment preset="city" background={false} />
  </>
);

export default function UseModel() {
  // ตรวจว่ากำลังอยู่ใน viewport หรือไม่
  const { ref, inView } = useInView({ threshold: 0.1 });

  // สร้าง Canvas เพียงครั้งเดียว
  const MemoCanvas = useMemo(
    () => (
      <Canvas
        frameloop={inView ? "always" : "demand"} // หยุดเมื่อไม่เห็น
        dpr={[1, 1.5]}
        camera={{ position: [0, -4, 5], fov: 40 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={null}>
          <MyCanvas active={inView} />
        </Suspense>
      </Canvas>
    ),
    [inView]
  );

  return (
    <div ref={ref} className="w-full h-screen">
      {MemoCanvas}
    </div>
  );
}
