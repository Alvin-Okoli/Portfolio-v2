import Footer from "@/components/Layout/Footer";
import Navbar from "@/components/Layout/Navbar";
import AboutSection from "@/components/pages/HomePage/AboutSection";
import ContactSection from "@/components/pages/HomePage/ContactSection";
import ExperienceSections from "@/components/pages/HomePage/ExperienceSections";
import HeroSections from "@/components/pages/HomePage/HeroSections";
import PrijectsSection from "@/components/pages/HomePage/PrijectsSection";
import { CMS } from "@/lib/CMS";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default async function Home({ searchParams }) {
  const params = await searchParams;
  const display = params.display;

  return (
    <div className="w-full px-4 py-4 gap-4 min-h-screen flex md:flex-row flex-col md:justify-end justify-start items-start relative font-body">
      <div
        className={cn(
          "md:w-[40%] w-full md:h-full min-h-[500px] md:p-4 p-0 md:fixed relative left-0 top-0 flex flex-col justify-start items-center",
          !display ? "gap-12" : "gap-8",
        )}
      >
        <Navbar />

        <div className="w-full md:h-full h-fit flex flex-col justify-between items-start">
          {!display && <HeroSections />}
          {display === "about" && <AboutSection />}
          {display === "experience" && <ExperienceSections />}
          {display === "contact" && <ContactSection />}

          <Footer className={"md:flex hidden w-[100%]"} />
        </div>
      </div>

      <div className="md:w-[60%] w-full md:min-h-full min-h-[1000px] flex justify-start items-start flex-col gap-4">
        <PrijectsSection />
        <Footer className={"md:hidden flex w-[95%]"} />
      </div>
    </div>
  );
}
