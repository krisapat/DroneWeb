'use client'

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Center, Environment } from "@react-three/drei"
import MyModel from "./MyModel"
import { Suspense, useMemo } from "react"

const MyCanvas = () => {
    return (
        <>
            <ambientLight intensity={1} />
            <directionalLight position={[2, 4, 2]} intensity={2} />
            <Center>
                <MyModel />
            </Center>
            <OrbitControls
                enableZoom={false}
                autoRotate={false}
                enablePan={true}
            />
            <Environment preset="city" background={false} />
        </>
    )
}

const UseModel = () => {
    // useMemo ช่วย cache component เพื่อไม่ให้โหลดซ้ำ
    const MemoizedCanvas = useMemo(() => (
        <Canvas
            frameloop="always"
            dpr={[0.5, 1.5]}
            camera={{ position: [0, -4, 5], fov: 40 }}
        >
            <Suspense fallback={null}>
                <MyCanvas />
            </Suspense>
        </Canvas>
    ), [])

    return (
        <div className="w-full h-screen">
            {MemoizedCanvas}
        </div>
    )
}

export default UseModel
