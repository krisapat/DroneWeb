import { useGLTF, useAnimations } from "@react-three/drei"
import { useEffect, useRef, useState } from "react"
import { Group, Mesh, AnimationClip } from "three"

const MODEL_PATH = "/3d/octanian-drone.glb"

type GLTFResult = {
  scene: Group
  animations: AnimationClip[]
}

export default function MyModel(props: React.ComponentProps<"group">) {
  const group = useRef<Group>(null)
  const { scene, animations } = useGLTF(MODEL_PATH) as GLTFResult
  const { actions } = useAnimations(animations, group)

  const [scale, setScale] = useState(2)

  useEffect(() => {
    // เล่นทุก animation
    if (actions) {
      Object.values(actions).forEach((action) => {
        action?.reset().fadeIn(0.5).play()
      })
    }

    // castShadow/receiveShadow แต่คงวัสดุเดิม
    scene.traverse((child) => {
      if ((child as Mesh).isMesh) {
        const mesh = child as Mesh
        mesh.castShadow = true
        mesh.receiveShadow = true
      }
    })

    // responsive scale
    const handleResize = () => {
      const width = window.innerWidth
      setScale(width >= 1280 ? 2.5 : 2)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [actions, scene])

  return (
    <group ref={group} {...props} scale={[scale, scale, scale]}>
      <primitive object={scene} />
    </group>
  )
}

useGLTF.preload(MODEL_PATH)
