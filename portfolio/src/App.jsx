import React, { useState } from 'react'
import Navbar from './Navbar';
import Skills from './Skills';
import Objective from './Objective';
import Education from './Education';
import Achievements from './Achievements';
import Contact from './Contact';
const App = () => {
    const [isOpen, setOpen] = useState(false);
    return (
        <div className='flex flex-col h-full w-full text-white bg-fixed bg-gradient-to-b from-black to-gray-800'>
            <Navbar isOpen={isOpen} setOpen={setOpen} />
            <div className={`${!isOpen ? 'flex flex-col' : 'hidden'} md:flex flex-col p-10 md:p-20`}>
                <Objective />
                <Skills />
                <Education />
                <Achievements />
                <Contact />
            </div>
        </div>
    )
}

export default App;