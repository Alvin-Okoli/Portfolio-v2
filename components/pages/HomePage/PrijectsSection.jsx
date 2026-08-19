"use client";
import { CMS } from "@/lib/CMS";
import { easing } from "@/lib/constants";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const PrijectsSection = () => {
  const MotionImage = motion(Image);
  const [hover, setHover] = useState(false);
  return CMS.projects.map((item, idx) => (
    <Link
      href={item.link || "/"}
      target="_blank"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      key={idx}
      className="w-full h-[95vh] relative rounded-[12px] flex justify-center items-center  bg-bg-secondary"
    >
      <MotionImage
        initial={{ scale: 1 }}
        animate={hover ? { scale: 1.02 } : { scale: 1 }}
        transition={{ duration: 0.5, ease: easing }}
        src={item.imageSRC}
        className="w-[90%] aspect-video rounded-[12px]"
        width={1000}
        height={1000}
        alt={item.name + " image"}
      />

      <div className="px-1 py-1 absolute bottom-4 left-4 bg-white rounded-full flex justify-center items-center text-[12px] font-heading gap-2">
        <MotionImage
          src={item.proectLogo}
          className="size-6 rounded-full aspect-square"
          height={10}
          width={10}
          alt={item.name + " image"}
        />
        <span className="mr-1.5">

        {item.name}
        </span>
      </div>
    </Link>
  ));
};

export default PrijectsSection;
