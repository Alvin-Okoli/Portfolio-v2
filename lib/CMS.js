import { FaNodeJs, FaReact } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { TbBrandTypescript } from "react-icons/tb";

export const CMS = {
  FirstName: "Alvin",
  LastName: "Okoli",
  profilePictureSRC: "/Images/profile.jpg",
  email: "hello@alvinokoli.com",
  desc: `Heyo, I'm Alvin — a Principal Product Designer based in Denver. In the last 12 years, I've specialized in web and iOS apps. Currently, I'm focused on building the future of web3.`,
  about:
    "Heyo, I'm Alvin — a Principal Product Designer based in Denver. In the last 12 years, I've specialized in web and iOS apps. Currently, I'm focused on building the future of web3.",
  socials: [
    {
      name: "Github",
      link: "https://github.com",
      icon: "/svgs/github-icon.svg",
    },
    {
      name: "LinkedIn",
      link: "https://github.com",
      icon: "/svgs/linkedin-icon.svg",
    },
    {
      name: "Twitter",
      link: "https://github.com",
      icon: "/svgs/x-icon.svg",
    },
  ],
  tech: [
    {
      icons: <FaNodeJs />,
      image: "",
    },
    {
      icons: <RiNextjsFill />,
      image: "",
    },
    {
      icons: <FaReact />,
      image: "",
    },
    {
      icons: <RiTailwindCssFill />,
      image: "",
    },
    {
      icons: <TbBrandTypescript />,
      image: "",
    },
  ],
  experience: [
    {
      company: "Company 1",
      position: "Position 1",
      timePeriod: "6 Months",
    },
    {
      company: "Company 2",
      position: "Position 2",
      timePeriod: "6 Months",
    },
    {
      company: "Company 3",
      position: "Position 2",
      timePeriod: "1 Year",
    },
  ],
};
