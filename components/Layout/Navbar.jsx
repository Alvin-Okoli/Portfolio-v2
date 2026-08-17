"use client";
import { CMS } from "@/lib/CMS";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
const Navbar = () => {
  const MotionImage = motion(Image);

  const links = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/?display=about",
    },
    {
      name: "Experience",
      link: "/?display=experience",
    },
    {
      name: "Contact",
      link: "/?display=contact",
    },
  ];

  return (
    <nav className="md:w-full w-[95%] h-15 flex justify-center items-center px-2 border border-border-primary rounded-full bg-bg-tint md:relative sticky top-4">
      <div className="h-full w-[30%] flex justify-start items-center">
        <motion.div
          whileHover={{ scale: 0.95 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="size-12 rounded-full border flex justify-center items-center overflow-hidden cursor-pointer"
        >
          <MotionImage
            src={CMS.profilePictureSRC}
            alt="profile"
            className="w-full h-full object-cover"
            width={40}
            height={40}
          />
        </motion.div>
      </div>

      <div className="h-full w-[70%] flex justify-end items-center gap-4 mr-4">
        {links.map((item, idx) => (
          <Link
            key={idx}
            href={item.link}
            className="text-text-secondary md:text-[14px] text-[12px] hover:text-text-primary transition-all duration-200 ease-in-out"
          >
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
