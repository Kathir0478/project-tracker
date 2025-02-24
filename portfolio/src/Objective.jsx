import React from 'react'
import { ImLinkedin, ImGithub } from "react-icons/im";
import { SiLeetcode } from "react-icons/si";
import ProfileImage from '../src/assets/download.png'

const Objective = () => {
    return (
        <div id='objective' className='flex flex-col h-screen w-full justify-center gap-20 px-20'>
            <h1 className='text-white'>Objective</h1>
            <p>
                A highly motivated and innovative full-stack
                developer and machine learning enthusiast with
                a strong foundation in data structures, deep
                learning, and AI-driven applications. Passionate
                about building scalable solutions, optimizing
                algorithms, and leveraging emerging technologies
                to solve real-world problems. Seeking opportunities
                to contribute technical expertise in developing
                intelligent systems and cutting-edge web applications.
            </p>
            <div className='flex justify-between items-center'>
                <div className='flex flex-col gap-5 '>
                    <a className='flex gap-5 items-center' href='https://www.linkedin.com/in/kathiravan-b-980b00313/' target='_blank'>
                        <ImLinkedin className='size-8' />
                        <p>Linkedin</p>
                    </a>
                    <a className='flex gap-5 items-center' href='https://github.com/Kathir0478' target='_blank'>
                        <ImGithub className='size-8' />
                        <p>Github</p>
                    </a>
                    <a className='flex gap-5 items-center' href='https://leetcode.com/u/kathiravan_b/' target='_blank'>
                        <SiLeetcode className='size-8' />
                        <p>Leetcode</p>
                    </a>
                </div>
                <img src={ProfileImage} alt='Profile' className='rounded-full w-40 h-40' />
            </div>
        </div >
    )
}

export default Objective