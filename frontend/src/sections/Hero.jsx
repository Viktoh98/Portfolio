import { useState } from "react";
import { motion } from "framer-motion";
import { useMyData } from "../context/UserContext";
import Button from "../components/Button";

const Hero = () => {
  const { myData } = useMyData();
  const [data] = myData;
  const socialLink = myData[0].sociallink_set;
  const iconName = [
    "fa-github",
    "fa-linkedin",
    "fa-facebook",
    "fa-google",
    "fa-x-twitter",
  ];
  const skillStack = [
    "fa-react",
    "fa-python",
    "fa-js",
    "fa-bootstrap",
    "fa-git",
  ];

  const sharedVariants = {
    initial: { opacity: 0, x: -50 },
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, delay: 0.5 },
    },
  };

  const secondChildvariant = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 10,
      transition: { delay: 0.5, duration: 1.2, type: "spring", damping: 5 },
    },
  };

  return (
    <section id="Hero" className="relative  lg:h-screen">
      <i className="fab fa-react text-white font-bold text-[14rem] lg:text-[20rem] absolute -translate-x-[50%] -translate-y-[50%] left-[50%] top-[50%] opacity-0 lg:opacity-50"></i>
      <i className="fab fa-python font-bold text-[8rem] lg:text-[12rem] absolute opacity-[.08] left-[8%] bottom-[10%]"></i>
      <div
        id="Hero__container"
        className="h-full lg:grid lg:grid-cols-2 lg:grid-rows-1 grid-rows-2 flex flex-col-reverse justify-center items-center mx-auto lg:gap-5 px-4 lg:px-0"
      >
        <div className="lg:pt-[8rem] text-center flex items-center justify-center flex-col lg:h-full px-1 h-screen pt-20 lg:py-2">
          <div className=" max-w-[32.5rem]">
            <div className="h-5 relative">
              <span className="text-[8rem] font-serif absolute sm:text-[12rem] top-[38%] left-0  text-slate-300 -translate-y-[38%]">
                &#8220;
              </span>
            </div>
            <motion.figcaption
              initial="initial"
              whileInView="animate"
              variants={sharedVariants}
              className="md:px-3 relative italic font-extrabold text-[2.6rem] md:text-[2.5rem] vs:text-[1.7rem] vs:leading-10 lg:text-[2.6rem] leading-[3.2rem] sm:leading-[3.5rem] md:leading-[3rem] lg:leading-[3.4rem]"
            >
              Building
              <span className="text-primary"> reliable</span>
              <span className="text-primary"> programmes</span> with our codes,
              the
              <span className="text-primary"> architect</span> of our
              <span className="text-primary"> future</span>.
            </motion.figcaption>
            <div className="h-5 relative">
              <span className="text-[8rem] font-serif absolute sm:text-[12rem] top-1/4 right-0 -translate-y-1/4 text-slate-300">
                &#8221;
              </span>
            </div>
            <motion.div
              initial="initial"
              whileInView={{
                ...sharedVariants.animate,
                transition: {
                  ...sharedVariants.animate.transition,
                  delay: 1.2,
                },
              }}
              variants={sharedVariants}
              className="pt-14 font-bold italic"
            >
              <h2 className="sm:text-3xl md:text-4xl text-2xl pb-0 text-right">
                Full-Stack Developer
              </h2>
              <h2 className=" text-primary text-[2.3rem] md:text-4xl pt-0  text-right">
                ~Victor
              </h2>
            </motion.div>
            <div className="lg:hidden flex items-center justify-center vs:gap-2 gap-4 pt-16">
              {skillStack.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-center items-center bg-white hover:-translate-y-1 hover:scale-105 shadow-lg rounded-[50%] px-2 py-2 z-[1]"
                >
                  <motion.i
                    custom={index}
                    initial={{ y: -10, opacity: 0 }}
                    whileInView={(i) => ({
                      y: 0,
                      opacity: 1,
                      transition: { delay: i * 0.2, duration: 0.4 },
                    })}
                    className={`fab ${item} text-[2.3rem] vs:text-[1.8rem] bg-white text-primary`}
                  ></motion.i>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="lg:bg-slate-100 flex justify-center items-center pt-32 lg:pt-16 pb-12 lg:pb-0 lg:h-full">
          <div className="lg:flex flex-col items-center justify-center">
            <div className="bg-primary vs:h-[250px] vs:w-[250px] h-[350px] w-[350px] py-8 px-8 rounded-full shadow-xl md:shadow-none mb-16">
              <img
                src={data.ImageURL}
                alt="my-image"
                className="h-full max-w-full mx-auto my-auto object-cover"
              ></img>
            </div>
            <div className="flex items-center justify-center vs:gap-2 gap-4">
              {socialLink.map((item, index) => (
                <div
                  key={item.id}
                  className="flex justify-center items-center hover:bg-white hover:-translate-y-1 hover:scale-105 shadow-lg rounded-[50%] px-2 py-2"
                >
                  <a href={`${item.Page_URL}`}>
                    <motion.i
                      custom={index}
                      initial={{ y: -10, opacity: 0 }}
                      whileInView={(i) => ({
                        y: 0,
                        opacity: 1,
                        transition: { delay: i * 0.2, duration: 0.4 },
                      })}
                      className={`fab ${iconName[index]} text-[2.3rem] vs:text-[1.8rem] text-primary`}
                    ></motion.i>
                  </a>
                </div>
              ))}
            </div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={secondChildvariant}
              className="flex relative items-center vs:justify-normal justify-center pt-12"
            >
              <div className="pb-4">
                <a href={data.resume_url}>
                  <Button>
                    <span className="text-white">
                      Resume <i className="fa-solid fa-download pl-1"></i>
                    </span>
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
