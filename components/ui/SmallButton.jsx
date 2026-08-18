"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { easing } from "@/lib/constants";
import Link from "next/link";
const SmallButton = ({ text, link }) => {
  const [isHovered, setIsHovered] = useState(false);
  const MotionLink = motion(Link);
  const MotionArrowUpRight = motion(ArrowRight);

  return (
    <MotionLink
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      href={link || "/?display=experience"}
      className="flex text-[12px] gap-3 justify-center items-center cursor-pointer"
    >
      {text || "Work Experience"}
      <motion.div
        initial={{
          backgroundColor: "#E2E2E2",
        }}
        animate={{
          backgroundColor: isHovered ? "#EFEFEF" : "#E2E2E2",
        }}
        transition={{
          duration: 0.4,
          ease: easing,
        }}
        className="size-6 rounded-full overflow-hidden relative bg-black/5 flex justify-center items-center"
      >
        <AnimatePresence mode="sync">
          {!isHovered ? (
            <MotionArrowUpRight
              key={2}
              initial={{
                translateX: !isHovered ? 30 : 0,
              }}
              animate={{
                translateX: !isHovered ? 0 : 30,
              }}
              exit={{
                translateX: 30,
              }}
              transition={{
                duration: 0.4,
                ease: easing,
              }}
              className="text-text-primary size-4 absolute"
            />
          ) : (
            <MotionArrowUpRight
              key={1}
              initial={{
                translateX: -30,
              }}
              animate={{
                translateX: 0,
              }}
              exit={{
                translateX: -30,
              }}
              transition={{
                duration: 0.4,
                ease: easing,
              }}
              className="text-text-primary size-4 absolute"
            />
          )}
        </AnimatePresence>
      </motion.div>
    </MotionLink>
  );
};

export default SmallButton;
