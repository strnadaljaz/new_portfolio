import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Projects from "../Components/Projects";
import Skills from "../Components/Skills";
import Education from "../Components/Education";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";

export default function Page() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}
