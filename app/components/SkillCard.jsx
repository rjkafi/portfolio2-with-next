"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

export default function SkillCard({ skillName, iconSrc }) {
  const [flipped, setFlipped] = useState(false)

  const handleFlip = () => {
    setFlipped(true)
    setTimeout(() => setFlipped(false), 2000)
  }

  return (
    <motion.div
      onClick={handleFlip}
      className="w-[160px] h-[160px]   cursor-pointer perspective-1000 bg-[#2c124c] p-4 rounded-2xl flex flex-col items-center justify-center shadow-md 
  transition-transform transform hover:scale-105 hover:shadow-xl hover:border hover:border-purple-400"
    >
      <div
        className={`relative w-full h-full transform-style-3d duration-500 transition-transform ${flipped ? "rotate-y-180" : ""
          }`}
      >
        {/* Front Side */}
        <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-purple-700/80 backface-hidden">
          <div className="w-[40px] h-[40px] md:w-[70px] md:h-[70px] relative ">
            <Image
              src={iconSrc}
              alt={skillName}
              fill
              className="object-contain rounded-md"
            />
          </div>
        </div>

        {/* Back Side */}
        <div className="absolute inset-0 flex px-1.5 items-center justify-center rounded-lg bg-indigo-900 text-white rotate-y-180 backface-hidden">
          <span className="text-sm md:text-lg font-semibold">{skillName}</span>
        </div>
      </div>
    </motion.div>
  )
}
