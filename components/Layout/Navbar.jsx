"use client";
import { CMS } from "@/lib/CMS";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { getGreeting } from "@/lib/utils";
import { easing } from "@/lib/constants";
import { Menu } from "lucide-react";
import MobileMenu from "./MobileMenu";
import PrimaryButton from "../ui/PrimaryButton";
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
    // {
    //   name: "Contact",
    //   link: "/?display=contact",
    // },
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
        height: show ? "50px" : "fit-content",
        transition: { duration: 0.5, ease: easing },
        paddingInline: show ? "6px" : "8px",
        paddingBlock: show ? "5px" : "0x",
      }}
      transition={{ duration: 0.5, ease: easing }}
      className="w-full h-15 flex justify-center items-center border border-border-secondary/10 rounded-full bg-bg-tint md:relative sticky overflow-hidden"
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
                className="size-10 h-fullaspect-square rounded-full border flex justify-center items-center overflow-hidden cursor-pointer py-"
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

            <div className="h-full w-[70%] md:flex hidden justify-end items-center gap-4">
              {links.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.link}
                  className="text-text-secondary md:text-[14px] text-[12px] hover:text-text-primary transition-all duration-200 ease-in-out"
                >
                  {item.name}
                </Link>
              ))}

              <Link
                href="/?display=contact"
                className="h-full w-[100px] flex justify-center items-center rounded-fulltext-text-secondary md:text-[14px] text-[12px] transition-all duration-200 ease-in-out bg-gradient-to-b from-black/10 to-black/5 hover:bg-white text-text-primary rounded-full"
              >
                Hire me
              </Link>

              {/* <PrimaryButton text="Resume" link="/resume.pdf" /> */}
            </div>
            <div className="h-full w-[70%] flex md:hidden justify-end items-center gap-4 mr-4">
              <MobileMenu links={links}>
                <Menu className="text-text-primary" />
              </MobileMenu>
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
