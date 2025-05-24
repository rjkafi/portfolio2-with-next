"use client";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion"

export default function Speech() {
  return (
    <motion.div
      transition={{ duration: 0.9, ease: "easeInOut" }}
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      className="bubble-Container w-[220px] md:w-[260px] bg-white items-center flex justify-center mt-3">
      <div className="bubble text-base-content text-sm ">
        {" "} &nbsp;
        <TypeAnimation
          sequence={[
            "Please Show my Project",
            1500,
            "fell free to Contact me",
            1500,
            "Don't worry",
            1500,
            "I will try best",
            1500,
            "Get In Touch",
            1500,
          ]}
          wrapper="span"
          speed={10}
          deletionSpeed={80}
          repeat={Infinity}
        />
      </div>
    </motion.div>
  );
}
