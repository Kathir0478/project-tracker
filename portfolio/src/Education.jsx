import React from 'react'
import { GrView } from "react-icons/gr";

const Education = () => {
    return (
        <div id='education' className='flex flex-col h-screen w-full gap-14 items-center justify-center'>
            <div className='flex flex-col gap-5'>
                <h4>
                    Higher Secondary Education
                </h4>
                <p className='indent-10'>
                    Motfort Matriculation Higher Secondary School, Perungudi
                    Completed my higher secondary schooling, which laid the foundation for my analytical thinking and passion for technology. My interest in programming and AI began during this phase, shaping my career in computer science.
                </p>
            </div>
            <div className='flex flex-col gap-5'>
                <h4>
                    Bachelor of Technology (B.Tech) in Artificial Intelligence & Data Science
                </h4>
                <p className='indent-10'>
                    St. Joseph's Institute of Technology
                    Currently pursuing my B.Tech in Artificial Intelligence & Data Science, where I have gained expertise in machine learning, deep learning, and full-stack development. Through hands-on projects and real-world applications, I have strengthened my problem-solving skills and deepened my knowledge in AI-driven solutions.
                </p>
            </div>
            <div className='flex flex-col gap-5'>
                <h4>
                    Certifications & Specialized Courses
                </h4>
                <p className='indent-10'>
                    Certifiaction in varoius domains like Machine Learning, Deep Learning, Full Stack Development, Data Structures and Algorithms, etc. from platforms like Coursera, Udemy, and LeetCode.</p>
                <a className='flex gap-5 items-center' target='_blank' href='https://drive.google.com/drive/folders/17PKSEYY_8zWv_1kmOp6xVybBSXWJpX94?usp=sharing'>To view Click here <GrView className='size-8' /></a>
            </div>
        </div>
    )
}

export default Education