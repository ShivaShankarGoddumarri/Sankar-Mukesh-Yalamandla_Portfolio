import MyExperience from "../MyExperience";
import ContactMe from "../ContactMe";
import Footer from "../Footer";
import HeroSection from "../HeroSection";
import MyPortfolio from "../MyPortfolio";
import MySkills from "../MySkills";
import Education from "../Education";

export default function Home() {
  return (
    <>
      <HeroSection />
      <MySkills />
      <MyExperience />
      <MyPortfolio />
      <Education />
      <ContactMe />
      <Footer />
    </>
  );
}
