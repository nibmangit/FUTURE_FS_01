import { useEffect, useRef, useState } from "react";
import Navbar from "./components/Navbar"
import { COLOR } from "./colors/color";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contacts from "./pages/Contacts";
import Resume from "./pages/Resume";

function App() {
    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const projectsRef = useRef(null);
    const resumeRef = useRef(null);
    const contactRef = useRef(null);
    const [activeSection, setActiveSection] = useState('home'); 

    useEffect(() => {
      const sectionRefs = {
          home: homeRef,
          about: aboutRef,
          projects: projectsRef,
          resume: resumeRef,
          contact: contactRef,
        };
      const observer = new IntersectionObserver(
            (entries) => {
              entries.forEach(entry => {
                if (entry.isIntersecting) {
                  setActiveSection(entry.target.id);
                }
              });
            },
            {
              root: null,
              rootMargin: "-80px 0px -40% 0px",
              threshold: 0,
            }
          );
  
      Object.values(sectionRefs).forEach(ref => {
        if (ref.current) {
          observer.observe(ref.current);
        }
      });
  
      return () => {
        Object.values(sectionRefs).forEach(ref => {
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        });
      };
    }, []);
  
    return (
        <div className={`min-h-screen ${COLOR.PRIMARY_COLOR} font-sans scroll-smooth`}>
            <Navbar activeSection={activeSection} />
            <section
                id="home"
                ref={homeRef}
                className={`scroll-mt-24 min-h-[90vh] flex items-center justify-center p-8 relative overflow-hidden ${COLOR.PRIMARY_COLOR}`}
                >
              <Home />
            </section>

            <section
            id="about" 
            ref={aboutRef}
            className="scroll-mt-24 py-24 px-4 sm:px-6 lg:px-8 bg-gray-900 border-t border-b border-gray-800"
            >
              <About />  
            </section>

            <section
              id="projects" 
              ref={projectsRef}
              className="scroll-mt-24 py-24 px-4 sm:px-6 lg:px-8"
            >
              <Projects />
            </section>

            <section
              id="resume" 
              ref={resumeRef}
              className="scroll-mt-24 py-24 px-4 sm:px-6 lg:px-8 bg-gray-900 border-t border-b border-gray-800"
            >
              <Resume />
            </section>

            <section
              id="contact"
              ref={contactRef}
              className="scroll-mt-24py-24 px-4 sm:px-6 lg:px-8"
            >
              <Contacts />
            </section>
            
            <Footer />
        </div>
    )
} ;

export default App
