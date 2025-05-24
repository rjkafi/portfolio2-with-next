"use client";
import Image from "next/image";
import Thumb from "@/public/my-image.png";
import { motion } from "framer-motion";

export default function Photo() {
  return (
    <div className="relative w-[300px]  h-[300px] xl:w-[500px] xl:h-[500px]">
      {/* SVG Circle in the background */}
      <motion.svg
        className="absolute top-0 left-0 w-full h-full z-0 "
        fill="transparent"
        viewBox="0 0 400 400"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.circle
          cx="200"
          cy="200"
          r="190"
          stroke="#f472b6"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ strokeDasharray: "24 10 0 0" }}
          animate={{
            strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
            rotate: [120, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </motion.svg>

      {/* Profile Image centered in the circle */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { duration: 0.4, delay: 2.4, ease: "easeIn" },
        }}
        className="absolute top-1/2 left-1/2 w-[280px] h-[280px] xl:w-[460px] xl:h-[460px] -translate-x-1/2 -translate-y-1/2 z-10 rounded-full   overflow-hidden "
      >
        <Image
          className="w-full h-full object-cover "
          src={Thumb}
          alt="Profile Image"
          priority
          quality={100}
        />
      </motion.div>
    </div>
  );
}
