import { Download, FileText } from 'lucide-react'
import {COLOR} from '../colors/color'
import Button from '../components/Button'

function Resume() {
    return (
        <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl font-extrabold text-white">
                My <span className={COLOR.ACCENT_COLOR}>Resume</span>
            </h2>
            <p className="text-xl text-gray-400">
                Download my complete CV for a detailed overview of my professional experience, education, and achievements.
            </p>
            
            <div className="flex justify-center pt-6 space-x-4">
                <Button
                    onClick={() => {
                    const link = document.createElement('a');
                    link.href = '/resume/Nibretu_Mengaw_Resume.pdf';
                    link.download = 'Nibretu_Mengaw_Resume.pdf';
                    link.click();
                    }}
                    icon={Download}
                    variant="accent"
                >
                    Download PDF
                </Button>
                <Button
                    onClick={() => window.open('/resume/Nibretu_Mengaw_Resume.pdf', '_blank')}
                    icon={FileText}
                    variant="secondary"
                >
                    Open in New Tab
                </Button>
            </div> 

            <div className="mt-12 w-full h-96 bg-gray-800 rounded-xl flex items-center justify-center border-4 border-dashed border-gray-700 p-4 shadow-inner">
                <iframe
                    src="/resume/Nibretu_Mengaw_Resume.pdf"
                    title="Resume Preview"
                    className="w-full h-full rounded-lg" 
                ></iframe>
            </div>
        </div>
    )
}

export default Resume
