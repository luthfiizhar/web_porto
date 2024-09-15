// import Image from "next/image";
// import HeroSection from "./components/HeroSection";
// import NavigationBar from "./components/NavigationBar";
// import AboutSection from "./components/AboutSection";
// import ProjectSection from "./components/ProjectSection";
// import EmailSection from "./components/EmailSection";
// import Footer from "./components/Footer";

// export default function Home() {
//   return (
//     <main className="flex min-h-screen flex-col">
//       <div className="container mt-24 mx-auto px-12 py-4">
//         <HeroSection></HeroSection>
//         <AboutSection></AboutSection>
//         <ProjectSection></ProjectSection>
//         <EmailSection></EmailSection>
//       </div>
//       <Footer></Footer>
//     </main>
//   );
// }

import { Button } from "./components/ui/button";
import { FiDownload } from "react-icons/fi";
import Socials from "./components/Socials";
import Photo from "./components/Photo";
import Stats from "./components/Stats";

const page = () => {
  return (
    <section className="h-full">
      <div className="container max-auto">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1 mb-6">
              Hello I'm <br />{" "}
              <span className="text-accent">Luthfi Izhariman</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              Excel at crafting responsive and user-friendly web and mobile
              application in various programming languages and technologies
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2">
                <span>Download CV</span>
                <FiDownload className="text-xl"></FiDownload>
              </Button>
              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"></Socials>
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default page;
