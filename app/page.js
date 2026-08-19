import Footer from "@/components/Layout/Footer";
import Navbar from "@/components/Layout/Navbar";
import AboutSection from "@/components/pages/HomePage/AboutSection";
import ContactSection from "@/components/pages/HomePage/ContactSection";
import ExperienceSections from "@/components/pages/HomePage/ExperienceSections";
import HeroSections from "@/components/pages/HomePage/HeroSections";
import Image from "next/image";

export default async function Home({ searchParams }) {
  const params = await searchParams;
  const display = params.display;

  return (
    <div className="w-full px-4 py-4 gap-4 h-screen flex md:flex-row flex-col md:justify-end justify-start items-center relative font-body">
      <div className="md:w-[40%] w-full md:h-full h-fit md:p-4 p-0 md:fixed relative left-0 top-0 flex flex-col justify-start items-center gap-12">
        <Navbar />

        {!display && <HeroSections />}
        {display === "about" && <AboutSection />}
        {display === "experience" && <ExperienceSections />}
        {display === "contact" && <ContactSection />}

        <Footer />
      </div>

      <div className="md:w-[60%] w-full md:h-full h-fit md:flex hidden flex-col gap-4">
        <div className="w-full rounded-[12px] aspect-video bg-bg-secondary"></div>
        <div className="w-full rounded-[12px] aspect-video bg-bg-secondary"></div>
        <div className="w-full rounded-[12px] aspect-video bg-bg-secondary"></div>
        <div className="w-full rounded-[12px] aspect-video bg-bg-secondary"></div>
      </div>
    </div>
  );
}
