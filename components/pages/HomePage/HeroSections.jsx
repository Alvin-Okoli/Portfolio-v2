import PrimaryButton from "@/components/ui/PrimaryButton";
import SecondaryButton from "@/components/ui/SecondaryButton";
import React from "react";

const HeroSections = () => {
  return (
    <div className="w-full h-fit flex flex-col justify-center items-start gap-4">
      <div className="w-full flex flex-col justify-start items-start">
        <h1 className="md:text-[38px] text-[24px] font-semibold text-text-primary font-heading leading-tight tracking-tighter">
          Hi, I&apos;m Alvin
        </h1>
        <p className="md:text-[38px] text-[24px] leading-tight tracking-tighter text-pretty font-semibold text-text-secondary font-">
          Backend Dev, Maker and Open Source Contributor
        </p>
      </div>

      <p className="md:w-[90%] w-full md:text-[15px] text-[13px] text-text-secondary text-pretty ">
        {" "}
        Heyo, I'm Kevin — a Principal Product Designer based in Denver. In the
        last 12 years, I've specialized in web and iOS apps. Currently, I'm
        focused on building the future of web3.
      </p>

      <div className="w-full flex gap-3 justify-start items-start mt-3">
        <PrimaryButton text="Contact Me" />
        <SecondaryButton text="Know more" />
      </div>
    </div>
  );
};

export default HeroSections;
