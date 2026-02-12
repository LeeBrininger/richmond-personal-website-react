import { Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import LandingPage from "./LandingPage.tsx";
import ResumePage from "./ResumePage.tsx";

const slideVariants = {
    hidden: {opacity: 0, x: "100%"},
    visible: { opacity: 1, x: "0%", transition: { type: "spring", stiffness: 50 } },
    exit: { opacity: 0, x: "-100%", transition: { duration: 0.3 } }
}

export default function Routes() {
    const location = useLocation();
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<motion.div
                    variants={slideVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                ><LandingPage /></motion.div>} />
                <Route path="/about" element={<motion.div
                    variants={slideVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                ><ResumePage /></motion.div>} />
            </Routes>
        </AnimatePresence>
    );
}