import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Projects from "../Components/Projects";
import Skills from "../Components/Skills";
import Education from "../Components/Education";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
import Starfield from "../Components/Starfield"

export default function Page() {
    return (
        <div className="bg-[#2C2F36]">
            <Starfield 
                starCount={1000}
                starColor={[255, 255, 255]}
                speedFactor={0.05}
                backgroundColor="#000"
            /> 
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
