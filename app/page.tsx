import Image from "next/image";
import HeroSection from "./components/HeroSection";
import NavigationBar from "./components/NavigationBar";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <NavigationBar></NavigationBar>
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection></HeroSection>
        <AboutSection></AboutSection>
        <ProjectSection></ProjectSection>
        <EmailSection></EmailSection>
      </div>
      <Footer></Footer>
    </main>
  );
}
