import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type {Variants} from 'motion-dom';

export default function FramerTextSlider({ children }) {
    const [isVisible, setIsVisible] = useState(true);

    const slideOffScreen = () => {
        setIsVisible(false);
    };

    // Define the animation variants
    const variants: Variants = {
        hidden: { x: "-100vw", opacity: 0, transition: { duration: 1, ease: "easeInOut" } },
        visible: { x: 0, opacity: 1, transition: { duration: 1, ease: "easeInOut" } }
    };

    return (
        <div>
            <AnimatePresence>
                {isVisible && (
                    <motion.p
                        variants={variants}
                        initial="visible"
                        animate="visible"
                        exit="hidden" // Animation to play when component is removed
                        style={{ whiteSpace: 'nowrap' }}
                    >
                        {children}
                    </motion.p>
                )}
            </AnimatePresence>
            <button onClick={slideOffScreen}>Slide Text Off Screen (Framer Motion)</button>
        </div>
    );
}