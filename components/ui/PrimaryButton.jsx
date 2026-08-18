"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Magnetic } from "../motion-primitives/magnetic";
import { easing } from "@/lib/constants";

const PrimaryButton = ({ text }) => {
  const [isHovered, setIsHovered] = useState(false);
  const MotionArrowUpRight = motion(ArrowUpRight);
  const transition = {
    duration: 0.4,
    ease: easing,
  };
  return (
    <Magnetic>
      <motion.button
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        initial={{ backgroundColor: "#000000", scale: 1 }}
        animate={{
          backgroundColor: isHovered ? "#f7f7f7" : "#000000",
          scale: isHovered ? 1.1 : 1,
        }}
        whileTap={{ scale: 1 }}
        transition={{
          duration: 0.4,
          ease: easing,
        }}
        className="p-2 flex gap-3 justify-center items-center text-[15px] text-white bg-primary rounded-full cursor-pointer relative overflow-hidden"
      >
        <motion.span
          animate={{ color: isHovered ? "#000000" : "#ffffff" }}
          transition={{
            duration: 0.4,
            ease: easing,
          }}
          className="ml-2 relative z-2"
        >
          {text}
        </motion.span>

        <div className="size-7 flex justify-center items-center aspect-square rounded-full bg-bg-secondary relative overflow-hidden z-2">
          <AnimatePresence mode="sync">
            {!isHovered ? (
              <MotionArrowUpRight
                key={2}
                initial={{
                  translateY: !isHovered ? -30 : 0,
                  translateX: !isHovered ? 30 : 0,
                }}
                animate={{
                  translateY: !isHovered ? 0 : -30,
                  translateX: !isHovered ? 0 : 30,
                }}
                exit={{
                  translateY: -30,
                  translateX: 30,
                }}
                transition={{
                  duration: 0.4,
                  ease: easing,
                }}
                className="text-text-primary size-4.5 absolute"
              />
            ) : (
              <MotionArrowUpRight
                key={1}
                initial={{
                  translateY: 30,
                  translateX: -30,
                }}
                animate={{
                  translateY: 0,
                  translateX: 0,
                }}
                exit={{
                  translateY: 30,
                  translateX: -30,
                }}
                transition={{
                  duration: 0.4,
                  ease: easing,
                }}
                className="text-text-primary size-4.5 absolute"
              />
            )}
          </AnimatePresence>
        </div>

        <motion.div
          initial={{ width: "28px", height: "28px" }}
          animate={{
            width: isHovered ? "100%" : "28px",
            height: isHovered ? "100%" : "28px",
            right: isHovered ? 0 : "8px",
          }}
          transition={{
            duration: 0.5,
            ease: easing,
          }}
          className="absolute top-1/2 -translate-y-1/2 right-2 size7 rounded-full bg-bg-secondary z-1"
        />
      </motion.button>
    </Magnetic>
  );
};

export default PrimaryButton;
