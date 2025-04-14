import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Projects from "../Components/Projects";
import Skills from "../Components/Skills";
import Education from "../Components/Education";

export default function Page() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Education />
    </div>
  );
}
