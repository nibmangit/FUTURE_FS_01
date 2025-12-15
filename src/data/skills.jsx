import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiDjango, SiJsonwebtokens, SiMysql, SiPostman } from "react-icons/si";

import { FiServer } from "react-icons/fi";

export const SKILLS = [ 
  { name: "HTML", icon: <FaHtml5 className="h-6 w-6 text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="h-6 w-6 text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs className="h-6 w-6 text-yellow-400" /> },
  { name: "React.js", icon: <FaReact className="h-6 w-6 text-cyan-400" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="h-6 w-6 text-sky-400" /> },
 
  { name: "Python", icon: <FaPython className="h-6 w-6 text-yellow-500" /> },
  { name: "Django", icon: <SiDjango className="h-6 w-6 text-green-700" /> },
  { name: "Django REST Framework", icon: <SiDjango className="h-6 w-6 text-red-500" /> },
  { name: "REST API",  icon: <FiServer className="h-6 w-6 text-indigo-400" /> },
  { name: "JWT Authentication", icon: <SiJsonwebtokens className="h-6 w-6 text-pink-500" /> },
 
  { name: "MySQL", icon: <SiMysql className="h-6 w-6 text-blue-600" /> },
 
  { name: "Git", icon: <FaGitAlt className="h-6 w-6 text-orange-600" /> },
  { name: "GitHub", icon: <FaGithub className="h-6 w-6 text-gray-300" /> },
  { name: "Postman", icon: <SiPostman className="h-6 w-6 text-orange-500" /> },
];