import ContactMe from "../Contact/ContactMe";
import Education from "../Education/Education";
import MyExperience from "../Experience/MyExperience";
import Footer from "../Footer/Footer";
import HeroSection from "../Hero/HeroSection";
import MyProjects from "../Projects/MyProjects";
import MySkills from "../Skills/MySkills";


export default function Home() {
  return (
    <>
      <HeroSection />
      <MySkills />
      <MyExperience />
      <MyProjects />
      <Education />
      <ContactMe />
      <Footer />
    </>
  );
}
