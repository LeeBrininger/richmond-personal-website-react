import { motion } from "framer-motion";
import type { ReactNode } from "react";

type SliderScrollProps = {
  children: ReactNode;
};

export default function SliderScroll(props: SliderScrollProps) {
  const { children } = props;

  return (
    <motion.div
      initial={{ opacity: 0, x: -500 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.5 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
