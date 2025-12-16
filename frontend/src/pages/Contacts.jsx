import React, { useState } from 'react'
import Button from '../components/Button'
import axios from 'axios';
import {Mail, CheckCircle} from 'lucide-react'
import {COLOR} from '../colors/color'
import AnimatedWrapper from '../components/AnimatedWrapper'

function Contacts() { 
      const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
      const [submitStatus, setSubmitStatus] = useState(null);
      const [errorMsg, setErrorMsg] = useState(null); 
 
      const handleFormChange = (e) => {
            setContactForm({ ...contactForm, [e.target.name]: e.target.value });
            setSubmitStatus(null);
        };

        const handleFormSubmit = async (e) => {
            e.preventDefault();
            setSubmitStatus('submitting');
            setErrorMsg(null);
 
            if (!contactForm.name || !contactForm.email || !contactForm.message) {
                setErrorMsg('Please fill out all fields correctly.');
                setSubmitStatus(null);
                return;
            }

            if (!/\S+@\S+\.\S+/.test(contactForm.email)) {
                setErrorMsg('Please enter a valid email address.');
                setSubmitStatus(null);
                return;
            }

            try {
                const response = await axios.post('http://127.0.0.1:8000/api/contact/', contactForm); 
                if (response.data?.message) {
                    setSubmitStatus('success');
                    setContactForm({ name: '', email: '', message: '' });
 
                    setTimeout(() => setSubmitStatus(null), 5000);
                } else {
                    setErrorMsg('Server error: unable to send message.');
                    setSubmitStatus(null);
                }
            } catch (error) {
                console.error(error);
                setErrorMsg('Server error: unable to send message.');
                setSubmitStatus(null);
            }
        }; 

    return (
        <div className="max-w-4xl mx-auto space-y-12 mb-2">
            <AnimatedWrapper animation="fadeIn">
                <header className="text-center space-y-4">
                    <h2 className="text-4xl font-extrabold text-white">
                    Get <span className={COLOR.ACCENT_COLOR}>In Touch</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                    Have a project idea or just want to chat? Send me a message! I'm always open to new opportunities.
                    </p>
                </header>
            </AnimatedWrapper>
         
            <AnimatedWrapper delay={200} animation="fadeInUp">
            <form onSubmit={handleFormSubmit} className="space-y-6 bg-gray-900 p-8 sm:p-10 rounded-2xl shadow-2xl border border-gray-800">
                 
                <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Your Name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    value={contactForm.name}
                    onChange={handleFormChange}
                    required
                    className={`w-full px-4 py-3 bg-gray-800 border-2 border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition duration-300 ${
                    submitStatus === 'error' && !contactForm.name ? 'border-red-500' : ''
                    }`}
                    placeholder="eg. Nibretu Mengaw"
                />
                </div>
 
                <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Your Email</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    value={contactForm.email}
                    onChange={handleFormChange}
                    required
                    className={`w-full px-4 py-3 bg-gray-800 border-2 border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition duration-300 ${
                    submitStatus === 'error' && (!contactForm.email || !/\S+@\S+\.\S+/.test(contactForm.email)) ? 'border-red-500' : ''
                    }`}
                    placeholder="eg. something@gmail.com"
                />
                </div>
 
                <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea
                    name="message"
                    id="message"
                    rows="5"
                    value={contactForm.message}
                    onChange={handleFormChange}
                    required
                    className={`w-full px-4 py-3 bg-gray-800 border-2 border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition duration-300 resize-none ${
                    submitStatus === 'error' && !contactForm.message ? 'border-red-500' : ''
                    }`}
                    placeholder="I'd love to discuss..."
                ></textarea>
                </div>
 
                <div className="flex flex-col sm:flex-row justify-between items-center pt-4 space-y-4 sm:space-y-0">
                <Button
                    type="submit"
                    variant="primary"
                    icon={Mail}
                    className="w-full sm:w-auto"
                    disabled={submitStatus === 'submitting'}
                >
                    {submitStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                </Button>

                {submitStatus === 'success' && (
                    <p className="text-green-400 font-medium flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2" /> Message Sent! I'll be in touch soon.
                    </p>
                )}

                {errorMsg && (
                    <p className="text-red-400 font-medium">
                    {errorMsg}
                    </p>
                )}
                </div>
            </form>
            </AnimatedWrapper>
        
        </div>
    )
}

export default Contacts
