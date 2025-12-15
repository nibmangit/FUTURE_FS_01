import Navbar from "./components/Navbar"
import { COLOR } from "./colors/color";
import Footer from "./components/Footer";

function App() { 

    return (
        <div className={`min-h-screen ${COLOR.PRIMARY_COLOR} font-sans`}>
            <Navbar />
            <Footer />
        </div>
    )
} ;

export default App
