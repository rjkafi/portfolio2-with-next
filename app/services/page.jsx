"use client"
import React, { useState } from 'react'
import ComputerModelcontainer from './computer/ComputerModelcontainer'
import Counter from '../components/Counter';

export default function Services() {
  const [currentServicesId, setCurrentServicesId] = useState(1);
  const services = [
    {
      id: 1,
      title: "Web Development",
      projects: 35,
      iconBg: "bg-pink-600",
      icon: "📁",
    },
    {
      id: 2,
      title: "Product Design",
      projects: 23,
      iconBg: "bg-green-700",
      icon: "🎨",
    },
    {
      id: 3,
      title: "Branding",
      projects: 46,
      iconBg: "bg-yellow-600",
      icon: "⚙️",
    },
  ]

  return (
    <div className="services  flex flex-col md:flex-row items-center justify-between px-4 md:px-10 py-10 gap-3 md:gap-5">
      {/* Left Content */}
      <div className="sSection w-full md:w-1/2 text-center md:text-left">
        <h3 className='h2'>How do I Help?</h3>
        <div>
          {services.map((service, index) => (
            <div
              key={index}
              className="flex items-center justify-between my-3.5 px-6 py-4 rounded-xl bg-[#2f213f] shadow-md cursor-pointer"
            >
              <div className={`w-12 h-12 flex items-center justify-center rounded-full ${service.iconBg}`}>
                <span className="text-white text-xl">{service.icon}</span>
              </div>
              <div className="flex-1 ml-4">
                <h3 className="text-white font-semibold">{service.title}</h3>
                <p className="text-sm text-gray-400">{service.projects} Projects</p>
              </div>
            </div>
          ))}
        </div>
        <div className="counter-list flex space-x-5">
          <Counter from={0} to={104} text="Project completd " />
          <Counter from={0} to={64} text="Happy Client " />
        </div>
      </div>

      {/* Right Content - 3D Model */}
<div className="sSection w-full md:w-1/2 h-[300px] md:h-[450px] lg:h-[550px] flex items-end">
        {
          currentServicesId === 1 && (<ComputerModelcontainer />) 
        }

      </div>
    </div>
  );
}

