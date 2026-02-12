import { motion } from "framer-motion";
import type { ReactNode } from "react";

type SliderScrollProps = {
  startLocation: { x: number; y: number };
  children: ReactNode;
};

export default function SliderScroll(props: SliderScrollProps) {
  const { startLocation, children } = props;

  return (
    <motion.div
      initial={{ opacity: 0, x: startLocation.x, y: startLocation.y }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 1.8, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
