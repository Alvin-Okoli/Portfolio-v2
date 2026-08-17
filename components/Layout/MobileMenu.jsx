import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover";
import Link from "next/link";

const MobileMenu = ({ children, ...props }) => {
  return (
    <Popover>
      <PopoverTrigger>{children}</PopoverTrigger>
      <PopoverContent
        className={
          "mt-4 mr-4 px-2 w-[200px] gap-3 h-fit flex flex-col justify-center items-center"
        }
      >
        {props.links.map((item, idx) => (
          <Link
            key={idx}
            href={item.link}
            className="w-full flex justify-start py-2 items-start text-text-secondary py2 md:text-[14px] text-[12px] hover:text-text-primary transition-all duration-200 ease-in-out"
          >
            {item.name}
          </Link>
        ))}
      </PopoverContent>
    </Popover>
  );
};

export default MobileMenu;
