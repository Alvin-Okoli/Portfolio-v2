import AnimateContent from "@/components/shared/AnimateContent";
import PrimaryButton from "@/components/ui/PrimaryButton";
import SmallButton from "@/components/ui/SmallButton";
import { CMS } from "@/lib/CMS";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const AboutSection = () => {
  return (
    <div className="w-full h-fit flex flex-col justify-start items-start gap-8">
      <div className="w-full flex flex-col justify-start items-start">
        <AnimateContent idx={1}>
          <h2 className="md:text-[38px] text-[24px] font-semibold text-text-primary font-heading leading-tight tracking-tighter">
            I am {CMS.FirstName} {CMS.LastName}
          </h2>
        </AnimateContent>

        <AnimateContent idx={2}>
          <p className="md:text-[38px] text-[24px] font-semibold text-text-secondary leading-tight tracking-tighter">
            Logical Backend Devloper
          </p>
        </AnimateContent>

        <AnimateContent className="w-full" idx={2}>
          <div className="w-[30%] h-[1px] bg-black/10 mt-6"></div>
        </AnimateContent>
      </div>

      <div className="w-full md:h-[380px] h-fit flex flex-col gap-2 justify-start items-center overflow-hidden">
        <AnimateContent idx={3}>
          <div className="h-full flex flex-col gap-3 justify-between items-center">
            {CMS.about.map((item, idx) => (
              <p key={idx} className="text-[16px] text-text-secondary">
                {item}
              </p>
            ))}

            <div className="w-[95%] flex justify-end items-center md:mt-0 mt-12">
              <SmallButton />
            </div>
          </div>
        </AnimateContent>

        {/* <AnimateContent className="w-full" idx={4}>
          <div className="w-full md:h-[80px] h-fit flex justify-between items-center gap-2 p-2 bg-bg-tint border border-border-primary rounded-[8px]">
            <div className="h-full w-fit  flex justify-start items-center shrink-0">
              <span className="text-[16px] text-text-secondary">
                Tech I use -
              </span>
            </div>

            <div className="h-full w-full flex justify-start items-center ">
              <Marquee
                pauseOnHover={true}
                speed={50}
                gradient={true}
                direction="left"
                gradientColor="#ffffff"
                gradientWidth={10}
                autoFill={true}
              >
                {CMS.tech.map((item, idx) => {
                  if (item.image.length === 0) {
                    return (
                      <div className="ml-2 mr-2 text-[28px] text-text-secondary">
                        {item.icons}
                      </div>
                    );
                  } else {
                    return (
                      <Image
                        key={idx}
                        src={item.image}
                        alt={item.name}
                        width={24}
                        height={24}
                        className="w-[28px] h-[28px] object-contain"
                      />
                    );
                  }
                })}
              </Marquee>
            </div>
          </div>
        </AnimateContent> */}
      </div>
    </div>
  );
};

export default AboutSection;
