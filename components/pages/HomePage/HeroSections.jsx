import AnimateContent from "@/components/shared/AnimateContent";
import PrimaryButton from "@/components/ui/PrimaryButton";
import SecondaryButton from "@/components/ui/SecondaryButton";
import { CMS } from "@/lib/CMS";
import React from "react";

const HeroSections = () => {
  return (
    <div className="w-full h-fit flex flex-col justify-center items-start gap-4">
      <div className="w-full flex flex-col justify-start items-start">
        <AnimateContent idx={1}>
          <h1 className="md:text-[38px] text-[24px] font-semibold text-text-primary font-heading leading-tight tracking-tighter">
            Hi, I&apos;m {CMS.FirstName}
          </h1>
        </AnimateContent>

        <AnimateContent idx={2}>
          <p className="md:text-[38px] text-[24px] leading-tight tracking-tighter text-pretty font-semibold text-text-secondary font-">
            Backend Dev, Maker and Open Source Contributor
          </p>
        </AnimateContent>
      </div>

      <AnimateContent idx={3}>
        <p className="md:w-[90%] w-full md:text-[15px] text-[13px] text-text-secondary text-pretty ">
          {" "}
          {CMS.about}
        </p>
      </AnimateContent>

      <AnimateContent idx={4}>
        <div className="w-full flex gap-3 justify-start items-start mt-3">
          <PrimaryButton text="Contact Me" />
          <SecondaryButton text="Know more" />
        </div>
      </AnimateContent>
    </div>
  );
};

export default HeroSections;
