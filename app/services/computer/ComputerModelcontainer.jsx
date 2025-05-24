import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import { ComputerModel } from './ComputerModel'
import { OrbitControls, PerspectiveCamera, Stage } from '@react-three/drei'

export default function ComputerModelcontainer() {
  return (
    <Canvas >
        <Suspense fallback=" Loading...">
            <Stage environment="night" intensity={0.8}>
            <ComputerModel></ComputerModel>
            </Stage>
            <OrbitControls  enableZoom={false}  autoRotate/>
            <PerspectiveCamera position={[-2,2,3]} zoom={0.6} makeDefault/>

        </Suspense>

    </Canvas>
  )
}
