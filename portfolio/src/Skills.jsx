import React, { useState } from 'react'
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
const skillObj = [
    {
        "title": "Languages",
        "knowns": [
            {
                "ex": "Python",
                "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png",
                "desc": "My introduction to programming and problem-solving. I use Python for machine learning, automation, and backend development with frameworks like TensorFlow and Flask."
            },
            {
                "ex": "Java",
                "logo": "https://cdn.worldvectorlogo.com/logos/javascript-1.svg",
                "desc": "My strongest language for data structures and algorithms. Java’s efficiency and scalability make it my go-to for competitive programming and system design."
            },
            {
                "ex": "JavaScript",
                "logo": "https://www.svgrepo.com/show/184143/java.svg",
                "desc": "The backbone of my full-stack development. I use JavaScript to build interactive UIs with React and develop robust backend services with Node.js and Express."
            }
        ]
    },
    {
        "title": "Frameworks",
        "knowns": [
            {
                "ex": "React",
                "logo": "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/react-js-icon.png",
                "desc": "A powerful frontend library that has enabled me to build dynamic, interactive user interfaces. I leverage React’s component-based architecture to create scalable and maintainable web applications, enhancing user experience with state management and efficient rendering."
            },
            {
                "ex": "Node.js",
                "logo": "https://static-00.iconduck.com/assets.00/node-js-icon-1817x2048-g8tzf91e.png",
                "desc": "My go-to backend runtime for building high-performance server-side applications. Node.js allows me to develop fast and scalable APIs, handle asynchronous operations efficiently, and power my full-stack projects with JavaScript across both client and server."
            },
            {
                "ex": "Express.js",
                "logo": "https://ajeetchaulagain.com/static/7cb4af597964b0911fe71cb2f8148d64/87351/express-js.png",
                "desc": "A minimal and flexible Node.js framework that simplifies API development. I use Express.js to build RESTful services, handle routing, middleware integration, and authentication, ensuring seamless communication between frontend and backend systems."
            }
        ]
    },
    {
        "title": "Databases",
        "knowns": [
            {
                "ex": "MongoDB",
                "logo": "https://www.svgrepo.com/show/331488/mongodb.svg",
                "desc": "A NoSQL database that I use for flexible and scalable data storage. Its document-based structure makes it ideal for handling unstructured data, powering applications with real-time updates and efficient querying."
            },
            {
                "ex": "MySQL",
                "logo": "https://www.svgrepo.com/show/303251/mysql-logo.svg",
                "desc": "A robust relational database management system that helps me handle structured data with complex relationships. I utilize MySQL for applications requiring ACID compliance and efficient data retrieval through SQL queries."
            },
            {
                "ex": "Firebase",
                "logo": "https://www.svgrepo.com/show/353735/firebase.svg",
                "desc": "A cloud-based real-time database that simplifies backend development. I use Firebase for authentication, real-time data synchronization, and seamless integration with web and mobile applications."
            }
        ]
    },
    {
        "title": "Tools",
        "knowns": [
            {
                "ex": "Git",
                "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2048px-Git_icon.svg.png",
                "desc": "A version control system that allows me to track changes, collaborate with teams, and manage project repositories efficiently. I utilize Git for maintaining clean code history and seamless deployment workflows."
            },
            {
                "ex": "VS Code",
                "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png",
                "desc": "My preferred integrated development environment (IDE) for coding. With its vast ecosystem of extensions, VS Code enhances my productivity with features like IntelliSense, debugging tools, and seamless Git integration."
            },
            {
                "ex": "Postman",
                "logo": "https://www.svgrepo.com/show/354202/postman-icon.svg",
                "desc": "An essential tool for API testing and debugging. I use Postman to send requests, analyze responses, and ensure that my backend services are functioning correctly before deployment."
            }
        ]
    },
    {
        "title": "Frontend",
        "knowns": [
            {
                "ex": "HTML",
                "logo": "https://cdn.iconscout.com/icon/free/png-256/free-html-5-logo-icon-download-in-svg-png-gif-file-formats--programming-langugae-language-pack-logos-icons-1175208.png?f=webp&w=256",
                "desc": "The backbone of web development. I use HTML to structure content and create well-organized, semantic web pages that are accessible and SEO-friendly."
            },
            {
                "ex": "CSS",
                "logo": "https://www.svgrepo.com/show/452185/css-3.svg",
                "desc": "A crucial tool for styling web applications. I leverage CSS to design responsive and visually appealing layouts, ensuring a polished user experience across devices."
            },
            {
                "ex": "Tailwind CSS",
                "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png",
                "desc": "A utility-first CSS framework that speeds up development. I use Tailwind to build sleek and modern interfaces with minimal effort, maintaining clean and maintainable styles."
            },
            {
                "ex": "Framer Motion",
                "logo": "https://cdn.worldvectorlogo.com/logos/framer-motion.svg",
                "desc": "A powerful animation library that enhances UI interactivity. I integrate Framer Motion to create fluid transitions, micro-interactions, and engaging user experiences."
            }
        ]
    },
    {
        "title": "Machine Learning",
        "knowns": [
            {
                "ex": "TensorFlow",
                "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Tensorflow_logo.svg/1200px-Tensorflow_logo.svg.png",
                "desc": "A deep learning framework that has been pivotal in my AI projects. I use TensorFlow to develop and train neural networks, optimize models, and deploy machine learning solutions."
            },
            {
                "ex": "Keras",
                "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Keras_logo.svg/2048px-Keras_logo.svg.png",
                "desc": "A high-level API built on TensorFlow that simplifies neural network creation. Keras allows me to prototype ML models quickly and efficiently with minimal code."
            },
            {
                "ex": "Scikit-learn",
                "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Scikit_learn_logo_small.svg/2560px-Scikit_learn_logo_small.svg.png",
                "desc": "A versatile machine learning library that provides essential tools for classification, regression, clustering, and preprocessing. I use Scikit-learn for data-driven insights and algorithm development."
            }
        ]
    },
    {
        "title": "Deep Learning",
        "knowns": [
            {
                "ex": "PyTorch",
                "logo": "https://www.svgrepo.com/show/354240/pytorch.svg",
                "desc": "A dynamic deep learning framework that offers flexibility and ease of experimentation. I use PyTorch for research-based AI projects, reinforcement learning, and computer vision tasks."
            },
            {
                "ex": "OpenCV",
                "logo": "https://www.svgrepo.com/show/354139/opencv.svg",
                "desc": "A computer vision library that powers my real-time image and video processing applications. I leverage OpenCV for tasks like object detection, face recognition, and image classification."
            },
            {
                "ex": "NumPy",
                "logo": "https://www.svgrepo.com/show/354127/numpy.svg",
                "desc": "A fundamental library for numerical computing. I use NumPy for handling large datasets, performing matrix operations, and optimizing deep learning workflows."
            },
            {
                "ex": "NLP",
                "logo": "https://icons.veryicon.com/png/o/education-technology/artificial-intelligence-2/nlp-natural-language-processing.png",
                "desc": "An area of AI that enables machines to understand and process human language. I apply NLP techniques in chatbot development, sentiment analysis, and automated text summarization."
            }
        ]
    },
    {
        "title": "Others",
        "knowns": [
            {
                "ex": "Data Structures",
                "logo": "https://icons.veryicon.com/png/o/miscellaneous/icons-for-data-class-organization-and/data-structure-1.png",
                "desc": "The foundation of efficient programming. I have a strong grasp of data structures, which allows me to optimize algorithms and build scalable applications."
            },
            {
                "ex": "Algorithms",
                "logo": "https://cdn4.iconfinder.com/data/icons/artificial-intelligence-66/512/limited-memory-optimization-algorithm-512.png",
                "desc": "A key area of my expertise, essential for problem-solving and system optimization. My algorithmic knowledge helps me tackle complex coding challenges and improve application performance."
            },
            {
                "ex": "REST API",
                "logo": "https://www.iconpacks.net/icons/free-icons-6/free-rest-api-blue-logo-icon-22099-thumb.png",
                "desc": "A core component of modern web applications. I design and implement RESTful APIs to enable seamless communication between frontend and backend services."
            }
        ]
    }
]

const KnownCard = ({ known, center }) => {
    return (
        <div className='flex flex-col items-center gap-5'>
            <div className='flex items-center gap-5'>
                <h4 className={`${center ? 'opacity-100' : 'opacity-50'}`}>{known.ex}</h4>
                {center && <img src={known.logo} alt={known.ex} className='h-8' />}
            </div>
            <div className='px-10 text-'>
                {center && <div className='mx-10'>
                    <p id="desc" className=''>{known.desc}</p>
                </div>}
            </div>
        </div>
    )
}
const SkillCard = ({ skill }) => {
    const [knownidx, changeKnownIdx] = useState(0);
    const skillList = skill.knowns;
    return (
        <div className='flex flex-col items-center justify-center h-100 w-1/1 gap-10'>
            <h1>{skill.title}</h1>
            <div className='flex items-center'>
                <button className='pl-5' onClick={() => changeKnownIdx((knownidx - 1 + skillList.length) % skillList.length)}><GrFormPrevious className='size-5' /></button>
                <KnownCard known={skillList[knownidx]} center={true} />
                <button className='pr-5' onClick={() => changeKnownIdx((knownidx + 1) % skillList.length)}><GrFormNext className='size-5' /></button>
            </div>
            <div className='flex w-full justify-between'>
                <KnownCard known={skillList[(knownidx - 1 + skillList.length) % skillList.length]} center={false} />
                <KnownCard known={skillList[(knownidx + 1) % skillList.length]} center={false} />
            </div>
        </div >
    )
}

const Skills = () => {
    const [idx, changeIdx] = useState(0);
    let len = skillObj.length;
    return (
        <div id='skills' className='flex flex-col h-screen w-full justify-evenly'>
            <div className='flex '>
                <button className='text-white' onClick={() => changeIdx((idx - 1 + len) % len)}><GrFormPrevious className='size-8' /></button>
                <SkillCard skill={skillObj[idx]} />
                <button className='text-white' onClick={() => changeIdx((idx + 1) % len)}><GrFormNext className='size-8' /></button>
            </div>
        </div>
    )
}

export default Skills;