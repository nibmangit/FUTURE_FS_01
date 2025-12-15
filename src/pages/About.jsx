import {User, Hash,} from 'lucide-react'
import { COLOR } from "../colors/color"
import { SKILLS } from '../data/skills'
import SkillCard from '../components/SkillCard'

function About() {
    return (
        <div className="max-w-7xl mx-auto space-y-16"> 
                    <header className="text-center space-y-4">
                      <h2 className="text-4xl font-extrabold text-white">
                        About <span className={COLOR.ACCENT_COLOR}>Me</span>
                      </h2>
                      <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        A brief look into my background, what drives me, and the tools I use every day.
                      </p>
                    </header>
         
                    <div className="bg-gray-800 p-8 md:p-12 rounded-2xl shadow-xl border border-gray-700/50">
                        <h3 className="text-3xl font-bold text-white mb-4 flex items-center">
                            <User className={`${COLOR.SECONDARY_COLOR} w-6 h-6 mr-3`}/> My Journey
                        </h3>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            I am a passionate software developer with a strong interest in building clean, efficient, 
                            and user-friendly applications. I enjoy turning complex problems into simple, elegant solutions and 
                            continuously improving my skills through real-world projects and learning.
                        </p>
                    </div>
         
                    <div className="space-y-8">
                      <h3 className="text-3xl font-bold text-white text-center flex items-center justify-center">
                        <Hash className={`${COLOR.ACCENT_COLOR} w-6 h-6 mr-3`} /> Core <span className={COLOR.SECONDARY_COLOR}>Skills</span>
                      </h3>
                      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-6">
                        {SKILLS.map((skill, index) => (
                          <SkillCard key={index} name={skill.name} icon={skill.icon} />
                        ))}
                      </div>
                    </div>
        
                  </div>
    )
}

export default About
