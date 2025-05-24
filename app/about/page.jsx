"use client"
import { motion } from "framer-motion"
import {
  FiBookOpen,
  FiBriefcase,
  FiCode,
  FiHeart,
  FiStar,

} from "react-icons/fi";
import { FaExternalLinkAlt } from 'react-icons/fa';

export default function About() {
  return (
    <>
      <div id="about" className="py-6 ">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-center ">
          <span className="bg-clip-text inline-block border-b-2 border-rose-500 text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-gradient-x">
            About Me
          </span>
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-between text-white px-2 lg:px-6 gap-2 mt-4">
          {/* Image Section */}
          <div className="w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 hover:shadow-neon-purple  overflow-hidden shadow-md">
            <img
              src="https://i.ibb.co.com/673DRSvp/my-profile.jpg"
              alt="Profile"
              className="object-cover rounded-t-3xl rounded-bl-3xl  border-b-4 
             border-r-4 border-pink-400 w-full h-full"
            />
          </div>

          {/* Text Section */}
          <div className="w-full md:w-1/2 ">
            <motion.h3
              transition={{ duration: 0.9, ease: "easeOut" }}
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-3xl font-bold text-orange-400">
              Frontend <span className="text-purple-400">Developer</span>
            </motion.h3>
            <p className="text-lg text-gray-300 leading-relaxed border-l-4 border-pink-500 pl-4 mt-4">
              Continuous learning and self-improvement are at the core of my
              development journey. I embrace challenges as opportunities to
              grow and enhance my expertise.
              <br />
              <br />
              I view obstacles as stepping stones toward success. No matter how
              complex the problem, I approach it with determination and
              persistence.
              <br />
              <br />
              I enjoy blending technical problem-solving with innovative
              thinking to craft meaningful user experiences and maintain
              scalable solutions.
            </p>
          </div>
        </div>

        {/* Education Section */}
        <div className="md:flex ">
          {/* Education & Experience */}
          <div className="grid md:grid-cols-2 gap-8 mt-20 mx-auto">
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay:  0.2 }}
              viewport={{ once: false, amount: 0.4 }}
              className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg opacity-50 group-hover:opacity-100 blur group-hover:blur-md transition duration-1000"></div>
              <div className="relative bg-gray-900/80 backdrop-blur-sm p-8 rounded-lg border border-white/10 h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-blue-500/20 rounded-lg">
                    <FiBookOpen className="w-6 h-6 text-blue-400" />
                  </div>
                  <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                    Education
                  </h2>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      Diploma in Computer Engineering
                    </h3>
                    <p className="text-gray-400 mt-1">
                      Dhaka Polytechnic Institute, Tejgaon, Dhaka
                    </p>
                    <div className="flex items-center text-gray-400 mt-3">
                      <FiStar className="w-4 h-4 mr-2 text-cyan-400" />
                      <span>2022 -Present</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10">
                    <h4 className="text-lg font-medium text-cyan-300">
                      Key Achievements
                    </h4>
                    <ul className="mt-2 space-y-2 text-gray-300">
                      <li className="flex items-center">
                        <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-cyan-400"></div>
                        <span>Aim to graduate with honors, InshaAllah.</span>
                      </li>
                      <li className="flex items-center">
                        <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-cyan-400"></div>
                        <span>Led student tech projects</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Experience */}
            <motion.div 
             initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay:  0.6 }}
                viewport={{ once: false, amount: 0.4 }}
            className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg opacity-50 group-hover:opacity-100 blur group-hover:blur-md transition duration-1000"></div>
              <div className="relative bg-gray-900/80 backdrop-blur-sm p-8 rounded-lg border border-white/10 h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-pink-500/20 rounded-lg">
                    <FiBriefcase className="w-6 h-6 text-pink-400" />
                  </div>
                  <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-300">
                    Experience
                  </h2>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      Web Developer
                    </h3>
                    <p className="text-gray-400 mt-1">
                      Personal & Team Projects
                    </p>
                    <div className="flex items-center text-gray-400 mt-3">
                      <FiCode className="w-4 h-4 mr-2 text-pink-400" />
                      <span>2022 - Present</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10">
                    <h4 className="text-lg font-medium text-pink-300">
                      Certificatios
                    </h4>
                    <ul className="mt-2 space-y-2 text-gray-300">
                      <li className="flex items-center">
                        <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-pink-400"></div>
                        <p className="flex items-center">Complete Web Development <span>
                          <a href="https://drive.google.com/file/d/15tSDmuWDXOvQ0qJNBbeH7PjsNFTe24_N/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="btn btn-link text-rose-400 ">
                            <FaExternalLinkAlt /> Live Link
                          </a>
                        </span></p>
                      </li>
                      <li className="flex items-center">
                        <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-pink-400"></div>
                        <p className="flex items-center">Web Design<span>
                          <a href="https://drive.google.com/file/d/1mDvpLnTbdKUkv8fgaGJC3PTU4DmBEehu/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="btn btn-link text-rose-400 ">
                            <FaExternalLinkAlt /> Live Link
                          </a>
                        </span></p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Passion Section */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center justify-center gap-2 mb-8">
            <FiHeart className="w-5 h-5 text-red-400" />
            <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-pink-300">
              What I Love About Development
            </h2>
            <FiHeart className="w-5 h-5 text-red-400" />
          </div>

          <div
            className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: "Problem Solving",
                description: "Finding elegant solutions to complex challenges",
              },
              {
                title: "Continuous Learning",
                description: "Always exploring new technologies and techniques",
              },
              {
                title: "Creating Impact",
                description: "Building tools that make a difference",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: false, amount: 0.4 }}
                className="bg-gradient-to-b from-gray-800/50 to-gray-900/50 p-6 rounded-lg border border-white/10 backdrop-blur-sm hover:from-gray-800/70 hover:to-gray-900/70 transition-colors"
              >
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {item.title}
                </h3>
                <p className="text-gray-300">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>


      </div>

    </>
  )
}
