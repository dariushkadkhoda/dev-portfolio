"use client";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const StirTransition = () => {
  const pathname = usePathname();
  return (
    <>
      <AnimatePresence mode="wait">
        <div key={pathname}>
          <div className="h-screen w-screen fixed bg-primary top-0 right-0 left-0 pointer-events-none flex z-40">
            stairs
          </div>
        </div>
      </AnimatePresence>
    </>
  );
};

export default StirTransition;
