import AnimateContent from "@/components/shared/AnimateContent";
import PrimaryButton from "@/components/ui/PrimaryButton";
import { CMS } from "@/lib/CMS";
import React from "react";

const ExperienceSections = () => {
  return (
    <div className="w-full h-fit flex flex-col justify-start items-start gap-12">
      <div className="w-full flex flex-col justify-start items-start">
        <AnimateContent idx={1}>
          <h2 className="md:text-[38px] text-[24px] font-semibold text-text-primary font-heading leading-tight tracking-tighter">
            2+ Years of Experience
          </h2>
        </AnimateContent>

        <AnimateContent idx={2}>
          <p className="md:text-[38px] text-[24px] font-semibold text-text-secondary leading-tight tracking-tighter">
            as a Backend Devloper
          </p>
        </AnimateContent>

        <div className="w-[30%] h-[1px] bg-black/10 mt-6"></div>
      </div>

      <div className="w-full flex flex-col gap-2 justify-start items-start">
        {CMS.experience.map((item, idx) => (
          <AnimateContent idx={idx + 3} className="w-full" key={idx}>
            <div className="w-full px-2 py-4 rounded-[8px] hover:bg-bg-secondary flex justify-between items-center transition-all duration-200 ease-in-out cursor-default">
              <div className="flex flex-col gap- justify-center items-start">
                <p className="text-[16px] text-text-primary font-heading font-medium">
                  {item.company}
                </p>
                <p className="text-[12px] text-text-secondary font-heading ">
                  {item.position}
                </p>
              </div>
              <p className="text-[14px] text-text-secondary">
                {item.timePeriod}
              </p>
            </div>
          </AnimateContent>
        ))}

        <AnimateContent
          idx={CMS.experience.length + 2}
          className="w-full"
        >
          <div className="w-full flex justify-end gap-4 items-center mt-4">
            <PrimaryButton text="Hire Me" />
          </div>
        </AnimateContent>
      </div>
    </div>
  );
};

export default ExperienceSections;
