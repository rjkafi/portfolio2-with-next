"use client"
import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
    {
        "name": "Giftify (Team Project)",
        "image": "/Giftify .png",
        "stack": "React, Tailwind CSS, MongoDB,Mongoose,Framer-Motion,Axios,JWT etc",
        "description": "A virtual gift store where users can explore, customize, and send digital gifts for special occasions like birthdays, anniversaries, and celebrations",
        "liveLink": "https://giftify-pro.netlify.app/",
        "githubLink": "https://github.com/Md-Siyam94/giftify-client/tree/kafi",
        "challenges": "Initially,  faced some challenges integrating Mongoose with MongoDB while starting this project. However, after exploring and learning more about it,  able to successfully implement Mongoose",
        "futureImprovements": "Designed & Develop to making a gift like canva . But Try to later to implement this fo better user experience"
    },
    {
        "name": "Blood Bridge",
        "image": "/blood-bridge web.png",
        "stack": "React, Firebase, Tailwind, Node.js, MongoDB etc",
        "description": "Blood Bridge is a user-friendly and efficient platform designed to facilitate blood donation activities.",
        "liveLink": "https://blood-bridge-e81d4.web.app/",
        "githubLink": "https://github.com/rjkafi/blood-bridge-client",
        "challenges": "Faced issues with handling API calls. Using Jodit React Liabries",
        "futureImprovements": "Need to add payment Gateway featured for better using clients "
    },
    {
        "name": "Marathon-X",
        "image": "/Marathon-X -web.ap.png",
        "stack": "React.js,Tailwind CSS,MongoDB,Firebase,Express.js,Node.js etc",
        "description": "A dynamic marathon management system offering a user-friendly dashboard to manage events, registrations, and participation",
        "liveLink": "https://marathon-x.web.app/",
        "githubLink": "https://github.com/rjkafi/marathon-x",
        "challenges": "Integrated a real-time database system using Firebase. Handled cross-browser compatibility issues.",
        "futureImprovements": "Need to improve error handling, optimize codebase for better performance and customization for UI-clients"
    }

];

const Projects = () => {
    const [modalData, setModalData] = useState(null);

    const handleModalOpen = (project) => {
        setModalData(project);
    };

    const handleModalClose = () => {
        setModalData(null);
    };

    return (
        <section id="projects" className="py-16 ">
            <div className="container mx-auto px-6 lg:px-20">
                <h2 className="text-4xl font-bold text-center mb-12 text-white  ">
                    <span className='inline-block border-b-2 border-rose-500'>Projects</span>
                </h2>
                <div className="grid lg:grid-cols-3 gap-10">
                    {projects.map((project, index) => (
                        <div key={index} className="card bg-[#643493]  shadow-xl p-4 text-white flex flex-col justify-between ">
                            <img src={project.image} alt={project.name} className="rounded-lg mb-4 w-full lg:h-40 md:h-96 mx-auto" />
                            <h3 className="text-2xl font-semibold mb-2">{project.name}</h3>
                            <p className="text-base mb-4">{project.description}</p>
                            <button
                                onClick={() => handleModalOpen(project)}
                                className="mt-auto mb-2 btn bg-gradient-to-r hover:from-purple-400 hover:to-blue-400 from-purple-500 to-pink-500 text-white rounded-lg hover:bg-primary-focus"
                            >
                                View Details
                            </button>
                        </div>
                    ))}
                </div>

                {/* Modal for Project Details */}
                {modalData && (
                    <div className="fixed inset-0 bg-black opacity-95 flex justify-center items-center">
                        <div className="relative bg-[#2c124c] p-6 rounded-lg shadow-xl w-full max-w-4xl text-white">
                            <button onClick={handleModalClose} className="absolute top-2 right-2 text-3xl">
                                &times;
                            </button>

                            <h3 className="text-3xl font-bold mb-4">{modalData.name}</h3>

                            {/* Main Content Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                                {/* Left Content */}
                                <div className="flex flex-col justify-between">
                                    <div>
                                        <h4 className="text-xl font-semibold mb-2">Description:</h4>
                                        <p className="text-base mb-4">{modalData.description}</p>
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-semibold mb-2">Challenges Faced:</h4>
                                        <p className="text-base mb-4">{modalData.challenges}</p>
                                    </div>
                                </div>

                                {/* Right Content */}
                                <div className="flex flex-col justify-between">

                                    {/* Future Improvements on Top Right */}
                                    <div>
                                        <h4 className="text-xl font-semibold mb-2">Future Improvements:</h4>
                                        <p className="text-base mb-4">{modalData.futureImprovements}</p>
                                    </div>

                                    {/* Technology Stack */}
                                    <div>
                                        <h4 className="text-xl font-semibold mb-2">Technology Stack:</h4>
                                        <p className="text-base mb-4">{modalData.stack}</p>
                                    </div>

                                    {/* Links Positioned Bottom Right */}
                                    <div className="flex space-x-6 justify-end mt-4">
                                        <a href={modalData.liveLink} target="_blank" rel="noopener noreferrer" className="btn btn-link text-rose-400">
                                            <FaExternalLinkAlt /> Live Link
                                        </a>
                                        <a href={modalData.githubLink} target="_blank" rel="noopener noreferrer" className="btn btn-link text-rose-400">
                                            <FaGithub /> GitHub Link
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Projects;