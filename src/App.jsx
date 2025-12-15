import Navbar from "./components/Navbar"
import { COLOR } from "./colors/color";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contacts from "./pages/Contacts";
import Resume from "./pages/Resume";

function App() { 

    return (
        <div className={`min-h-screen ${COLOR.PRIMARY_COLOR} font-sans`}>
            <Navbar />
            <section
                id="home" 
                className={`min-h-[90vh] flex items-center justify-center p-8 relative overflow-hidden ${COLOR.PRIMARY_COLOR}`}
                >
              <Home />
            </section>

            <section
            id="about" 
            className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-900 border-t border-b border-gray-800"
            >
              <About />  
            </section>

            <section
              id="projects" 
              className="py-24 px-4 sm:px-6 lg:px-8"
            >
              <Projects />
            </section>

            <section
              id="resume" 
              className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-900 border-t border-b border-gray-800"
            >
              <Resume />
            </section>

            <section
              id="contact" 
              className="py-24 px-4 sm:px-6 lg:px-8"
            >
              <Contacts />
            </section>
            
            <Footer />
        </div>
    )
} ;

export default App
