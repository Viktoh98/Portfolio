import React, { useState } from "react";
import fetchToken from "../utils/getCsrf.js";
import { motion } from "framer-motion";
import Button from "../components/Button";
import axios from "axios";

const parentVariant = {
  hidden: {
    transition: { when: "afterChildren" },
  },
  visible: {
    transition: {
      duration: 1,
      when: "beforeChildren",
      delayChildren: 0.6,
      staggerChildren: 0.8,
    },
  },
};

const childVariant = {
  hidden: { y: 100, opacity: 0 },
  visible: (i) => ({
    y: 0,
    opacity: 10,
    transition: { delay: i * 0.3, duration: 0.8 },
  }),
};

const Contact = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  function handleChange(e) {
    setData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const csrfToken = await fetchToken();
    setSubmitted(true);
    if (csrfToken) {
      try {
        const API_URL = import.meta.env.VITE_API_URL;
        const response = await axios.post(`${API_URL}message/`, data, {
          headers: {
            "X-CSRFToken": csrfToken.csrf_token,
          },
        });
        setError(false);
        setData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        console.log(response.data, data);
      } catch (error) {
        setError(true);
        console.error("Error:", error);
      }
    } else {
      setError(true);
      console.log("CSRF token not available");
    }
  };

  return (
    <section id="Contact" className="pt-24  overflow-hidden">
      <motion.div className="pb-16 text-center flex justify-center h-[10%] items-center flex-col">
        <h2 className="font-bold text-4xl md:text-6xl text-primary">Contact</h2>
        <motion.hr
          initial={{ scaleX: 0 }}
          whileInView={{
            scaleX: 1.5,
            transition: { delay: 0.2, duration: 1 },
          }}
          className="divider"
        ></motion.hr>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={parentVariant}
        className="grid md:grid-cols-2 max-h-screen h-fit "
      >
        <div className='hidden italic bg-gradient-to-r md:flex flex-col justify-evenly h-full from-secondary to-primary text-center text-7xl font-bold font-["Times New Roman"] text-white'>
          <motion.h2 custom={1.2} variants={childVariant}>
            Let's
          </motion.h2>
          <motion.h2 custom={1.4} variants={childVariant}>
            Work
          </motion.h2>
          <motion.h2 custom={1.6} variants={childVariant}>
            Together!
          </motion.h2>
        </div>
        <div className="flex flex-col justify-start items-center h-full bg-slate-200">
          <h2 className="font-bold text-4xl pt-12 text-secondary">Reach Out</h2>
          <form
            className="sm:w-[70%] md:w-[95%] lg:w-[85%] px-6 pt-12 pb-8 flex flex-col vs:w-full h-[90%]"
            onSubmit={handleSubmit}
          >
            <motion.div
              custom={1.8}
              variants={childVariant}
              className="grid grid-cols-2 gap-4 items-center py-3 justify-center"
            >
              <input
                type="text"
                id="name"
                name="name"
                className="h-12 rounded-lg px-2 shadow-lg outline-secondary"
                placeholder="name"
                value={data.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                id="email"
                name="email"
                className="h-12 rounded-lg px-2 shadow-lg  outline-secondary"
                placeholder="email"
                value={data.email}
                onChange={handleChange}
                required
              />
            </motion.div>
            <motion.input
              custom={2}
              variants={childVariant}
              type="text"
              id="subject"
              name="subject"
              className="h-12 block w-full my-2 rounded-lg px-2 shadow-lg  outline-secondary"
              placeholder="subject"
              onChange={handleChange}
              value={data.subject}
              required
            />
            <motion.textarea
              custom={2.2}
              variants={childVariant}
              type="text"
              id="message"
              name="message"
              className="h-32 sm:h-48 block w-full my-6 rounded-lg px-4 py-4 shadow-lg  outline-secondary"
              placeholder="message"
              onChange={handleChange}
              value={data.message}
              required
            />
            <motion.div
              custom={3}
              variants={childVariant}
              className="flex justify-center w-full flex-col items-center"
            >
              {submitted && (
                <div className="text-[1.1rem] font-normal py-4 italic">
                  {error ? (
                    <p className="text-red-500">An error occured</p>
                  ) : (
                    <p className="text-primary">Submitted!</p>
                  )}
                </div>
              )}
              <Button
                isSubmit={true}
                submit={handleSubmit}
                style={{
                  width: "100%",
                  maxWidth: "389px",
                  padding: "0.75rem 3rem",
                }}
              >
                <span className="text-white">
                  Submit <i className="fas fa-paper-plane pl-1 f"></i>
                </span>
              </Button>
            </motion.div>
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
