import Link from "next/link";
import React from "react";

const SecondaryButton = ({ text }) => {
  return (
    <Link href="/?display=about" className="px-6 cursor-pointer py-3 text-[15px] text-text-secondary bg-bg-secondary flex justify-center items-center rounded-full">
      <span className="text-text-primary text-[15px]">
        {text}
      </span>
    </Link>
  );
};

export default SecondaryButton;
