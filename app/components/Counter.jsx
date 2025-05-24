import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { animate, useMotionValue } from "framer-motion";

export default function Counter({ from, to, text }) {
  const ref = useRef();
  const isInView = useInView(ref, { once: true });
  const motionValue = useMotionValue(from);
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (isInView) {
      const controls = animate(motionValue, to, {
        duration: 4,
        ease: "easeOut",
        onUpdate: (latest) => setCount(Math.floor(latest)),
      });
      return () => controls.stop();
    }
  }, [isInView, motionValue, to]);

  return (
    <div className="counter" ref={ref}>
      <h1 className="text-[#e6506d] ml-3 text-xl md:text-2xl font-semibold">{count}+</h1>
      <h1>{text}</h1>
    </div>
  );
}
