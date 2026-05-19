"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 3 seconds total boot sequence
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
          className="fixed inset-0 z-[100] bg-brand-bg flex flex-col items-center justify-center text-brand-white"
        >
          {/* Logo animation */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex items-center gap-2 mb-8"
          >
            <div className="font-headline text-6xl font-extrabold tracking-tighter flex items-center">
              VV <span className="text-brand-orange ml-1">↗</span>
            </div>
          </motion.div>

          {/* Pulse effect & Loading Text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="flex flex-col items-center gap-4"
          >
            {/* Orange Pulse Ring */}
            <motion.div
              animate={{ 
                scale: [1, 1.5, 1],
                opacity: [0.5, 0, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-12 h-12 rounded-full border border-brand-orange absolute"
            />
            <div className="w-12 h-12 rounded-full bg-brand-orange/10 flex items-center justify-center backdrop-blur-sm z-10">
              <div className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
            </div>

            <div className="font-body text-brand-gray text-sm tracking-widest uppercase mt-4">
              Initializing Growth Infrastructure...
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
