"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from "framer-motion"

export default function Contact() {
  const { register, handleSubmit, formState: { errors }, reset, } = useForm();
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)


  const onSubmit = (data) => {
    const templateParams = {
      from_name: `${data.firstname} ${data.lastname}`,
      from_email: `${data.email}`,
      phone: `${data.phone}`,
      service: `${data.service}`,
      message: data.message,
    };

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, // replace with your actual service ID
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, // replace with your actual template ID
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY   // replace with your actual public key
      )
      .then(
        (result) => {
          console.log("Email sent successfully!", result.text);
          setSuccess(true)
          reset(); // form reset
        },
        (error) => {
          setError(true)
          console.log("Failed to send email.", error.text);
        }
      );
  };

  return (
    <div id="contact" className="min-h-screen  text-white flex items-center justify-center p-4">
      <div
      className="max-w-6xl w-full items-center grid md:grid-cols-3 gap-10 shadow-xl glass p-8 rounded-xl">
        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="md:col-span-2 space-y-4 order-2 md:order-none">
          <h2 className="text-rose-400 text-2xl font-semibold">Let's work together</h2>
          <p className="text-sm text-gray-300">
           I'm currently open to new opportunities and collaborations.If you have any questions, project ideas, or just want to say hello — feel free to reach out.Let’s connect and create something amazing together!
          </p>

          <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }} 
          className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              {...register("firstname", { required: true })}
              placeholder="Firstname"
              className="bg-[#1a1a1d] p-3 rounded-md border border-gray-700"
            />
            <input
              type="text"
              {...register("lastname", { required: true })}
              placeholder="Lastname"
              className="bg-[#1a1a1d] p-3 rounded-md border border-gray-700"
            />
          </motion.div>

          <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }} 
          className="grid md:grid-cols-2 gap-4">
            <input
              type="email"
              {...register("email", { required: true })}
              placeholder="Email address"
              className="bg-[#1a1a1d] p-3 rounded-md border border-gray-700"
            />
            <input
              type="text"
              {...register("phone", { required: true })}
              placeholder="Phone number"
              className="bg-[#1a1a1d] p-3 rounded-md border border-gray-700"
            />
          </motion.div>

          <motion.select
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }} 
            {...register("service", { required: true })}
            className="bg-[#1a1a1d] p-3 rounded-md border border-gray-700 w-full"
          >
            <option value="">Select a service</option>
            <option value="web">Web Development</option>
            <option value="design">UI/UX Design</option>
            <option value="marketing">Digital Marketing</option>
          </motion.select>

          <motion.textarea
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }} 
            {...register("message", { required: true })}
            placeholder="Type your message here."
            rows={4}
            className="bg-[#1a1a1d] p-3 rounded-md border border-gray-700 w-full"
          ></motion.textarea>

          <button type="submit" className="bg-gradient-to-r from-pink-400 to-purple-500 hover:from-purple-400 hover:to-blue-400 text-white px-6 py-3 rounded-full shadow-md transition">
            Send message
          </button>
          {success && <span>Your Message Has been Sent</span>}
          {error && <span>Something went Wrong!</span>}
        </form>

        {/* Contact Info */}
        <div className="space-y-6 text-sm order-1 md:order-none">
          <h3 className="h3 text-pink-400">My Info.</h3>
          <div className="flex items-center gap-4">
            <FiPhone className="text-pink-400 text-xl" />
            <div>
              <p className="text-gray-400">Phone</p>
              <p>(+880)1317528495 </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <FiMail className="text-pink-400 text-xl" />
            <div>
              <p className="text-gray-400">Email</p>
              <p>kafi2006jk@gmail.com</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <FiMapPin className="text-pink-400 text-xl" />
            <div>
              <p className="text-gray-400">Address</p>
              <p>Tejgaon, Dhaka, Bangladesh</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
