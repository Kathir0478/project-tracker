import React from 'react'

const Achievements = () => {
    return (
        <div id='achievements' className='flex flex-col w-full h-screen justify-center'>
            <ul className='flex flex-col h-full gap-14 justify-center'>
                <li>
                    <h1>
                        Achievements
                    </h1>
                </li>
                <li>
                    <p>LeetCode & SkillRack Milestones
                        Solved 650+ problems on LeetCode.
                        Solved 2000+ problems on SkillRack, enhancing my DSA proficiency.</p>
                </li>
                <li>
                    <p>
                        Deep Learning Specialization – Coursera (Andrew Ng)
                        Completed the full specialization, gaining expertise in neural networks, CNNs, and AI model optimization.
                    </p>
                </li>
                <li>
                    <p>
                        Cleared various Interviews and coding contest like ICPC and amazon DSA
                    </p>
                </li>
            </ul>
        </div>
    )
}

export default Achievements