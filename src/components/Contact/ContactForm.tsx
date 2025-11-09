"use client";
import { useRef, FormEvent } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const ContactForm = () => {
  const form = useRef<HTMLFormElement | null>(null);

  const handleSuccess = () => {
    toast.success("Message Sent Successfully", {
      duration: 3000,
      style: {
        borderRadius: "10px",
        background: "#6a0dad",
        color: "white",
      },
    });
  };

  const handleError = () => {
    toast.error("Message Not Sent", {
      duration: 3000,
      style: {
        borderRadius: "10px",
        background: "#6a0dad",
        color: "white",
      },
    });
  };

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm("service_gbfxhud", "template_cgz2o0v", form.current, {
        publicKey: "9AUvk4zFTNyVNhJJt",
      })
      .then(
        () => {
          (e.target as HTMLFormElement).reset();
          handleSuccess(); // Just show toast
        },
        () => {
          handleError(); // Just show toast
        }
      );
  };
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden flex items-center justify-center px-4">
      {/* Blue light (top-left) */}
      <motion.div
        className="absolute top-0 left-0 w-[400px] h-[400px] bg-blue-500 opacity-40 blur-[150px] rounded-full pointer-events-none"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.4, 0.6, 0.4],
          x: [0, -20, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Red light (top-right) */}
      <motion.div
        className="absolute top-0 right-0 w-[400px] h-[400px] bg-red-500 opacity-40 blur-[150px] rounded-full pointer-events-none"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.4, 0.6, 0.4],
          x: [0, 20, 0],
          y: [0, 15, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Contact Form Card */}
      <div className="relative z-10 w-full px-4 md:px-8 ">
        <div className=" flex flex-col lg:flex-row gap-20">
          <form
            ref={form}
            onSubmit={sendEmail}
            className=" flex flex-col gap-8 lg:w-1/2"
            action=""
          >
            <input
              type="text"
              name="name"
              required
              className=" outline-none border-b-2 border-white pb-4"
              placeholder="Your Name*"
            />
            <input
              type="email"
              name="email"
              required
              className=" outline-none border-b-2 border-white pb-4 "
              placeholder="Your Email* "
            />
            <textarea
              name="message"
              required
              cols={30}
              rows={4}
              className=" outline-none border-b-2 border-white "
              placeholder="Share your thoughts* "
            />
            <button className=" bg-transparent border-2 border-[#ff5000] text-[#ff5000] hover:text-white hover:bg-[#ff5000] rounded-md lg:w-1/2 uppercase py-3 px-4 mt-10 cursor-pointer transition-all duration-300 ease-in-out hover:[box-shadow:0_0_5px_#ff5000,0_0_25px_#ff5000,0_0_50px_#ff5000,0_0_100px_#ff5000]">
              send your message
            </button>
          </form>
          <div className=" lg:w-1/2 flex flex-col justify-between items-center gap-4 ">
            <h1 className=" text-6xl lg:text-8xl">
              Contact <br />
              <div className=" flex items-center justify-between gap-2 mt-2">
                <span className=" inline-block w-full h-1 bg-white"></span>
                <span>Us</span>
              </div>
            </h1>
            <p className=" text-gray-300 text-lg text-center">
              Send us a message and we will get back to you soon
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
