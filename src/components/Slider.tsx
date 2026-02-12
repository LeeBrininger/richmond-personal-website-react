import { useEffect, useState, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "motion-dom";

type SliderProps = {
  direction: string;
  visible: boolean;
  starting: boolean;
  children: ReactNode;
};

export default function Slider(props: SliderProps): ReactNode {
  const { direction, visible, starting, children } = props;
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isAnimating) {
      document.body.classList.add("animated");
    } else {
      document.body.classList.remove("animated");
    }

    return () => {
      document.body.classList.remove("animated");
    };
  }, [isAnimating]);

  const directionX = () => {
    switch (direction) {
      case "left":
      case "upLeft":
      case "downLeft":
        return "-100vw";
      case "right":
      case "upRight":
      case "downRight":
        return "100vw";
      default:
        return "0";
    }
  };

  const directionY = () => {
    switch (direction) {
      case "up":
      case "upLeft":
      case "upRight":
        return "-100vw";
      case "down":
      case "downLeft":
      case "downRight":
        return "100vw";
      default:
        return "0";
    }
  };

  // Define the animation variants
  const variants: Variants = {
    hidden: {
      x: directionX(),
      y: directionY(),
      opacity: 0,
      transition: { duration: 1, ease: "easeInOut" },
    },
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };

  return (
    <div>
      <AnimatePresence>
        {visible && (
          <motion.div
            variants={variants}
            initial={starting ? "visible" : "hidden"}
            animate="visible"
            exit="hidden"
            style={{ position: "absolute" }}
            onAnimationStart={() => {
              setIsAnimating(true);
            }}
            onAnimationComplete={() => setIsAnimating(false)}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
