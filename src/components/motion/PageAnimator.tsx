import { useEffect, useState, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

type PageAnimatorProps = {
  pages: any[];
  index: { index: number; direction: string };
};

export default function PageAnimator(props: PageAnimatorProps): ReactNode {
  const { pages, index } = props;
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

  const variants = {
    enter: (direction: any) => ({
      x: direction === "right" ? "100%" : "-100%",
      opacity: 1,
    }),
    exit: (direction: any) => ({
      x: direction === "right" ? "-100%" : "100%",
      opacity: 1,
    }),
  };

  return (
    <div>
      <AnimatePresence custom={index.direction} mode="popLayout">
        <motion.div
          key={pages[index.index].props.name}
          custom={index.direction}
          variants={variants}
          initial="enter"
          animate={{ opacity: 1, x: 0 }}
          exit="exit"
          transition={{ duration: 0.3 }}
          onAnimationStart={() => {
            setIsAnimating(true);
          }}
          onAnimationComplete={() => setIsAnimating(false)}
        >
          {pages[index.index]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
