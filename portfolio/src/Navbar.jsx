import React from 'react';
import Skills from './Skills';
import Objective from './Objective';
import Education from './Education';
import Achievements from './Achievements';
import Contact from './Contact';
import About from './About';
const Navbar = () => {
    return (
        <div className='flex flex-col h-full w-full'>
            <nav className='fixed w-full h-20 z-10 flex flex-row items-center justify-end gap-20 p-10 text-white text-xl bg-gray-900'>
                <a href="#objective" className=' hover:text-blue-500 hover:scale-125 transition-all duration-500 '>Objective</a>
                <a href="#skills" className=' hover:text-blue-500 hover:scale-125 transition-all duration-500 '>Skills</a>
                <a href="#education" className=' hover:text-blue-500 hover:scale-125 transition-all duration-500 '>Education</a>
                <a href="#achievements" className=' hover:text-blue-500 hover:scale-125 transition-all duration-500 '>Achievements</a>
                <a href="#contact" className=' hover:text-blue-500 hover:scale-125 transition-all duration-500 '>Contact</a>
                <a href="#about" className=' hover:text-blue-500 hover:scale-125 transition-all duration-500 '>About</a>
            </nav>
            <div className='flex flex-col m-20'>
                <Objective />
                <Skills />
                <Education />
                <Achievements />
                <Contact />
                <About />
            </div>
        </div>
    )
}

export default Navbar