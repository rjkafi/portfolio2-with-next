import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import { CoffeeModel } from './CoffeeModel'
import { OrbitControls, PerspectiveCamera, Stage } from '@react-three/drei'

export default function CoffeeModelcontainer() {
  return (
    <Canvas >
        <Suspense fallback=" Loading...">
            <Stage environment="night" intensity={10}>
            <CoffeeModel></CoffeeModel>
            </Stage>
            <OrbitControls  enableZoom={false}  autoRotate/>
            <PerspectiveCamera position={[-1,0,2]} zoom={0.7} makeDefault/>
        </Suspense>

    </Canvas>
  )
}
