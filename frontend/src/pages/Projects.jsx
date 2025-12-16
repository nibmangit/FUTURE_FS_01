import { ArrowRight } from 'lucide-react'
import { COLOR } from '../colors/color'
import Button from '../components/Button'
import { PROJECTS } from '../data/projects'
import ProjectCard from '../components/ProjectCard'
import AnimatedWrapper from '../components/AnimatedWrapper'

function Projects() {
    return (
        <div className="max-w-7xl mx-auto space-y-16"> 
        <AnimatedWrapper animation="fadeIn">
          <header className="text-center space-y-4">
            <h2 className="text-4xl font-extrabold text-white">
              Featured <span className={COLOR.ACCENT_COLOR}>Projects</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Showcasing some of my recent work, highlighting technical complexity and business impact.
            </p>
          </header>
          </AnimatedWrapper>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {PROJECTS.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>

         <AnimatedWrapper delay={500} animation="fadeInUp" className="pt-10 text-center">
            <Button onClick={() => window.open('https://github.com/nibmangit?tab=repositories', '_blank')} variant="secondary" icon={ArrowRight} className='border-blue-500/50'>
              View All My Works on GitHub
            </Button>
          </AnimatedWrapper>

        </div>
    )
}

export default Projects
