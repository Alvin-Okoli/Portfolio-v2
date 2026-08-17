"use client";
import { CMS } from "@/lib/CMS";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { getGreeting } from "@/lib/utils";
import { easing } from "@/lib/constants";
const Navbar = () => {
  const MotionImage = motion(Image);
  const [show, setShow] = useState(false);

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

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 1000);
  }, []);

  return (
    <motion.nav
      initial={{
        width: "fit-content",
        opacity: 0,
        height: "fit-content",
        paddingInline: "0px",
        paddingBlock: "0px",
      }}
      animate={{
        opacity: 1,
        width: show ? "100%" : "fit-content",
        height: show ? "60px" : "fit-content",
        transition: { duration: 0.5, ease: easing },
        paddingInline: show ? "8px" : "8px",
        paddingBlock: show ? "0px" : "48x",
      }}
      transition={{ duration: 0.5, ease: easing }}
      className="w-full h-15 flex justify-center items-center px-2 border border-border-primary rounded-full bg-bg-tint md:relative sticky overflow-hidden"
    >
      <AnimatePresence mode="wait">
        {show ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.6, ease: easing }}
            exit={{ opacity: 0 }}
            key="nav"
            className="w-full h-full flex justify-center items-center"
          >
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
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2, ease: easing }}
            exit={{ opacity: 0 }}
            key="greeting"
            className="whitespace-nowrap shrink-0 text-[18px] font-heading"
          >
            {getGreeting()}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
