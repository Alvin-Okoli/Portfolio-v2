"use client";
import { CMS } from "@/lib/CMS";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { easing } from "@/lib/constants";

const Footer = () => {
  const MotionImage = motion(Image);

  return (
    <div className="w-full h-fit flex justify-between items-center px-4 absolute bottom-4 border-t border-text-secondary/30 pt-4">
      <Link
        href={`mailto:${CMS.email}`}
        className="text-[14px] text-text-secondary hover:text-text-primary transition-all duration-200 ease-in-out"
      >
        {" "}
        {CMS.email}
      </Link>

      <div className="flex gap-3.5">
        {CMS.socials.map((item, idx) => (
          <Link
            key={idx}
            href={item.link}
            target="_blank"
            className="text-[14px] text-text-secondary hover:text-text-primary transition-all duration-200 ease-in-out"
          >
            <MotionImage
              initial={{ filter: "grayscale(100%)", scale: 1 }}
              whileHover={{ scale: 1.1, filter: "grayscale(0%)" }}
              transition={{ duration: 0.5, ease: easing }}
              src={item.icon}
              alt={item.name}
              width={16}
              height={16}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Footer;
