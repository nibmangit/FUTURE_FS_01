import {FileText, Code} from 'lucide-react'
import { COLOR } from '../colors/color';
import Button from '../components/Button';
import AnimatedWrapper from '../components/AnimatedWrapper';

function Home() {
    return (
        <> 
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-blue-500/10 blur-[150px]"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-amber-500/10 blur-[150px]"></div>
          
         <AnimatedWrapper animation="fadeIn" threshold={0.1} delay={0} className="w-full">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between text-center md:text-left z-10 space-y-12 md:space-y-0">
            
          <div className="md:w-1/2 space-y-6 animate-fadeInLeft">
            <p className={`text-xl font-medium ${COLOR.SECONDARY_COLOR} uppercase tracking-widest`}>Hi, I'm Nibretu Mengaw</p>
            <h1 className="text-5xl sm:text-7xl font-extrabold text-white leading-tight">
              Full Stack <br className='hidden sm:block'/> <span className={COLOR.ACCENT_COLOR}>Web Developer</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-lg mx-auto md:mx-0">
              Building accessible, high-performance web applications with a focus on clean code and robust systems.
            </p>
              
            <div className="flex justify-center md:justify-start space-x-4 pt-6">
              <Button icon={Code}>
                View Projects
              </Button>
              <Button 
                onClick={() => {
                      const link = document.createElement('a');
                      link.href = '/resume/Nibretu_Mengaw_Resume.pdf';
                      link.download = 'Nibretu_Mengaw_Resume.pdf';
                      link.click();
                      }}
                variant="secondary" icon={FileText}>
                  Download Resume
              </Button>
            </div>
          </div>

          <div className="md:w-1/2 flex justify-center animate-fadeInRight">
            <div className="relative w-72 h-72 sm:w-96 sm:h-96"> 
              <div className="absolute inset-0 rounded-full border-4 border-gray-800 animate-spin-slow"></div>
              <div className="absolute inset-4 rounded-full border-4 border-amber-400/50 animate-spin-slow-reverse"></div>

              <div className="relative w-full h-full rounded-full overflow-hidden border-8 border-amber-400 shadow-2xl"> 
                <img
                  src="profile-picture.jpg"
                  alt="Developer Profile"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-500"
                  onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/400x400/1F2937/FACC15?text=N.Mengaw" }}
                />
              </div>
            </div>
          </div>
        </div> 
        </AnimatedWrapper> 
        </>
    )
}

export default Home
