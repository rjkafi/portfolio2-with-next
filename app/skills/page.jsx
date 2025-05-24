"use client"
import React, { useState } from "react"
import SkillCard from "../components/SkillCard"

const skillsData = [
  {
    category: "Frontend",
    skills: [
      { name: "HTML", icon: "/html5_23329.webp" },
      { name: "CSS", icon: "/CSS.webp" },
      { name: "Tailwind CSS", icon: "/Tailwind-Css.png" },
      { name: "JavaScript", icon: "/javascript-logo-0.png" },
      { name: "React.js", icon: "/React-js.svg" },
      { name: "Next.js", icon: "/Next-js.jpeg" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: "/Node-js.png" },
      { name: "Express.js", icon: "/Express-js.png" },
    ],
  },
  {
    category: "Database",
    skills: [
      { name: "MongoDB", icon: "/MongoDB.png" },
      { name: "Mongoose", icon: "/Mongoose.png" },
    ],
  },
  {
    category: "Other",
    skills: [
      { name: "VS Code", icon: "/VS_code.webp" },
      { name: "Firebase", icon: "/Firebase.png" },
      { name: "Figma", icon: "/Figma.png" },
      { name: "Git", icon: "/GIt.png" },
      { name: "GitHub", icon: "/GIthub.png" },
    ],
  },
]

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("Frontend")

  const categories = skillsData.map((item) => item.category)
  const activeSkills = skillsData.find((item) => item.category === activeCategory)?.skills || []

  return (
    <div id="skills" className=" text-white py-12 px-6 lg:px-16">
      <h2 className="text-4xl  font-bold text-center mb-10">
        <span className="inline-block border-b-2 border-rose-500">My Skills</span>
      </h2>

      {/* Tabs */}
      <div className="flex justify-center gap-4 mb-10 flex-wrap">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-6 py-2 rounded-full hover:from-purple-400 cursor-pointer hover:to-blue-400 font-semibold transition ${
              activeCategory === category
                ? " text-black bg-gradient-to-r from-pink-400 to-purple-500   shadow-md transition"
                : "bg-[#2c124c] text-white border border-gray-600  "
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Skills */}
      <div className="flex flex-wrap justify-center gap-6">
        {activeSkills.map((skill, index) => (
          <SkillCard
            key={index}
            skillName={skill.name}
            iconSrc={skill.icon}
          />
        ))}
      </div>
    </div>
  )
}
