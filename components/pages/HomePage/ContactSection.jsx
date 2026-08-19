"use client";
import AnimateContent from "@/components/shared/AnimateContent";
import SmallButton from "@/components/ui/SmallButton";
import { CMS } from "@/lib/CMS";
import { CalendarDays, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const ContactSection = () => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(message);
  };

  return (
    <div className="w-full h-fit flex flex-col justify-center items-start gap-4">
      <div className="w-full flex flex-col justify-start items-start">
        <AnimateContent idx={1}>
          <h2 className="md:text-[38px] text-[24px] font-semibold text-text-primary font-heading leading-tight tracking-tighter">
            Let&apos;s Work Together
          </h2>
        </AnimateContent>

        <AnimateContent idx={2}>
          <p className="md:text-[38px] text-[24px] font-semibold text-text-secondary leading-tight tracking-tighter">
            as a team
          </p>
        </AnimateContent>

        {/* <div className="w-[30%] h-[1px] bg-black/10 mt-6"></div> */}
      </div>

      <AnimateContent className="w-full" idx={3}>
        <div className="w-full md:h-[200px] h-fit flex flex-col justify-start items-start md:gap-6 gap-12 p-3 bg-bg-tint border border-border-primary rounded-[8px]">
          <div className="w-full flex gap-3 justify-start items-center">
            <Image
              src={CMS.profilePictureSRC}
              alt={CMS.FirstName}
              width={20}
              height={20}
              className="size-8 object-cover rounded-full"
            />

            <div className="w-full flex flex-col justify-center items-start">
              <p className="text-[14px] text-text-primary font-medium">
                Send me a message
              </p>
              <p className="text-[10px] text-text-secondary font-heading ">
                I read every one.
              </p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="w-full h-full flex  flex-col"
          >
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Hey Alvin, Let's Work togheter"
              className="w-full h-full bg-transparent outline-none border-none resize-none placeholder:text-[14px] px2"
            />

            <div className="w-full flex justify-end">
              <button
                type="submit"
                className="disabled:cursor-not-allowed w-fit  h-fit"
              >
                <SmallButton text="Send" link="/?display=contact" />
              </button>
            </div>
          </form>
        </div>
      </AnimateContent>

      <AnimateContent className="w-full" idx={4}>
        <div className="w-full md:h-[150px] h-fit flex justify-between items-start gap-4">
          <Link
            href={"/"}
            className="w-1/2 h-full flex flex-col gap-4 justify-center items-center p-3 bg-bg-tint border border-border-primary rounded-[8px] cursor-pointer hover:bg-bg-secondary transition-all duration-300 ease-in-out"
          >
            <CallIllustration />
            <div className="flex flex-col justify-center items-center gap-1">
              <p className="text-[14px] font-heading font-bold">Book a Call</p>
              <p className="text-[12px] text-text-secondary">
                30 min - No Strings
              </p>
            </div>
          </Link>

          <Link
            href={"/"}
            className="w-1/2 h-full flex flex-col gap-4 justify-center items-center p-3 bg-bg-tint border border-border-primary rounded-[8px] cursor-pointer hover:bg-bg-secondary transition-all duration-300 ease-in-out"
          >
            <div className="flex flex-col justify-center items-center gap-1">
              <Mail size={48} className="text-text-secondary" />
              <p className="text-[14px] font-heading font-bold">Email me</p>
              <p className="text-[12px] text-text-secondary">{CMS.email}</p>
            </div>
          </Link>
        </div>
      </AnimateContent>
    </div>
  );
};

const CallIllustration = () => {
  return (
    <div className="w-fit h-12 px-1 py-1 flex justify-center items-center rounded-[8px]  gap-2">
      <div className="h-full aspect-square rounded-full bg-black/5 p-[2px] overflow-hidden">
        <Image
          src={CMS.profilePictureSRC}
          className="h-full aspect-square rounded-full"
          width={90}
          height={90}
          alt="Yash's Image"
        />
      </div>

      <span className="text-[24px] text-text-secondary">+</span>

      <div className="h-full aspect-square rounded-full flex justify-center items-center border-2 bg-black/5 border-border-primary">
        <span className="text-[10px] text-text-main">You</span>
      </div>
    </div>
  );
};

export default ContactSection;
