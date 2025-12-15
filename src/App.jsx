import Navbar from "./components/Navbar"
import { COLOR } from "./colors/color";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";

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
            
            <Footer />
        </div>
    )
} ;

export default App
