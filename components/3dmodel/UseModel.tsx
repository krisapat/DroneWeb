'use client'

import { useEffect, useRef, useState } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Center, Environment } from "@react-three/drei"
import { useInView } from "framer-motion"
import MyModel from "./MyModel"

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
    const containerRef = useRef<HTMLDivElement>(null)
    const isInView = useInView(containerRef, { once: false, margin: "-50px" })
    const [showCanvas, setShowCanvas] = useState(false)

    useEffect(() => {
        let timeout: NodeJS.Timeout
        if (isInView) {
            // รอโหลด Canvas เล็กน้อย
            timeout = setTimeout(() => setShowCanvas(true), 1500)
        } else {
            setShowCanvas(false)
        }
        return () => clearTimeout(timeout)
    }, [isInView])

    return (
        <div ref={containerRef} className="w-full h-screen">
            {showCanvas && (
                <Canvas
                    frameloop="always"
                    dpr={[0.5, 1.5]}
                    camera={{ position: [0, -4, 5], fov: 40 }}
                >
                    <MyCanvas />
                </Canvas>
            )}
        </div>
    )
}

export default UseModel
