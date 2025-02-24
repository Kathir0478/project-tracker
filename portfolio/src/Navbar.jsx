import React from 'react';
import { TiThMenu } from "react-icons/ti";
const Navbar = ({ isOpen, setOpen }) => {
    return (
        <div>
            <div className='flex flex-col md:hidden fixed w-full z-10 h-20 justify-center bg-black'>
                <TiThMenu className='ml-8 size-8' onClick={() => setOpen(!isOpen)} />
            </div>
            <nav className={`hidden md:flex fixed w-full h-20 z-10 items-center justify-end gap-20 p-10 text-xl bg-black`}>
                <h4><a href="#objective">Objective</a></h4>
                <h4><a href="#skills">Skills</a></h4>
                <h4><a href="#education" >Education</a></h4>
                <h4><a href="#achievements" >Achievements</a></h4>
                <h4><a href="#contact" >Contact</a></h4>
            </nav>
        </div>
    )
}

export default Navbar