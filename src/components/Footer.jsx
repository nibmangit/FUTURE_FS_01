import React from 'react';
import { Mail, FileText } from 'lucide-react';
import { FaLinkedin,FaGithub } from "react-icons/fa";
import { COLOR } from "../colors/color";

const Footer = () => {
    
    return(
        <footer className={`${COLOR.PRIMARY_COLOR} border-t border-gray-800 py-12`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex justify-center space-x-6 mb-6">
                <a href="https://www.linkedin.com/in/nibretu-mengaw-579380373" 
                target='_blank'
                className="text-gray-400 hover:text-blue-500 transition duration-300 p-2 rounded-full hover:bg-gray-800">
                <FaLinkedin className="h-6 w-6" />
                </a>
                <a href="https://github.com/nibmangit" 
                target='_blank' 
                className="text-gray-400 hover:text-white transition duration-300 p-2 rounded-full hover:bg-gray-800">
                <FaGithub className="h-6 w-6" />
                </a> 
                <a href="#contact" 
                className="text-gray-400 hover:text-amber-400 transition duration-300 p-2 rounded-full hover:bg-gray-800">
                <Mail className="h-6 w-6" />
                </a>
                <a 
                href="/resume/Nibretu_Mengaw_Resume.pdf" 
                title='Download CV'
                download 
                className="text-gray-400 hover:text-green-500 transition duration-300 p-2 rounded-full hover:bg-gray-800"
                >
                <FileText className="h-6 w-6" />
                </a>
            </div>
            <p className="text-gray-500 text-sm">
                &copy; {new Date().getFullYear()} N.Mengaw Portfolio. Crafted with React and Tailwind CSS.
            </p>
            </div>
        </footer>
)};

export default Footer;

