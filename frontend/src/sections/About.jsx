import { motion } from "framer-motion";
import { useMyData } from "../context/UserContext";

const containerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 10,
    transition: {
      when: "beforeChildren",
      delayChildren: 0.3,
      staggerChildren: 0.4,
      duration: 0.3,
    },
  },
};

const firstChildvariant = {
  hidden: { x: 100, opacity: 0 },
  visible: (i) => ({
    x: 0,
    opacity: 10,
    transition: { delay: i * 0.4, duration: 0.5 },
  }),
};

const secondChildvariant = {
  hidden: { x: -100, opacity: 0 },
  visible: (i) => ({
    x: 0,
    opacity: 10,
    transition: { delay: i * 0.4, duration: 0.5 },
  }),
};

const About = () => {
  const { myData } = useMyData();
  return (
    <section id="About" className="mx-auto  text-white bg-slate-100 py-20">
      <div className="pb-8 text-center flex justify-center items-center flex-col">
        <h2 className="text-primary font-bold text-4xl md:text-6xl">About</h2>
        <motion.hr
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1.5, transition: { delay: 0.2, duration: 1 } }}
          className="divider"
        ></motion.hr>
      </div>
      <div>
        <div className=" overflow-hidden sm:w-fit flex flex-col justify-center items-center ">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={containerVariant}
            viewport={{ once: true, amount: 0.1 }}
            className="bg-slate-100 vs:w-full vs:px-4 px-10 py-10 italic flex flex-col justify-between lg:gap-8 gap-5 w-[90%] md:w-[100%] text-[1rem] lg:text-[1.15rem] font-semibold"
          >
            <div className="flex justify-center items-center">
              <motion.p
                custom={1}
                variants={firstChildvariant}
                className="bg-gradient-to-r from-secondary to-primary py-6 px-6 vs:px-3 vs:w-[90%] w-[70%] md:w-[75%] lg:w-[60%] rounded-3xl shadow-xl"
              >
                <span className="hidden sm:block">
                  Hello! I'm Victor, a passionate, goal driven and dedicated
                  full-stack developer with a love for crafting efficient and
                  innovative solutions. With a background in Engineering, I
                  thrive on the challenges of creating web applications that not
                  only work seamlessly but also provide a great user experience.
                </span>
                <span className="sm:hidden">
                  Hello! I'm Victor, a passionate, goal driven and dedicated
                  full-stack developer with a love for crafting efficient
                  solutions. I create web applications that not only work
                  seamlessly but also provide a great user experience.
                </span>
              </motion.p>
            </div>

            <div className="flex justify-center items-center">
              <motion.p
                custom={1.3}
                variants={secondChildvariant}
                className="bg-gradient-to-r from-secondary to-primary py-6 px-6 vs:px-3 vs:w-[90%] w-[70%] md:w-[75%] lg:w-[60%] rounded-3xl shadow-xl"
              >
                <span className="md:hidden">
                  <b>Full-Stack Expertise</b>: I specialize in full-stack
                  development, which means I can handle everything from
                  designing user-friendly interfaces to architecting robust
                  server-side systems.
                </span>
                <span className="hidden md:block">
                  <b>Full-Stack Expertise</b>: I specialize in full-stack
                  development, which means I can handle everything from
                  designing user-friendly interfaces to architecting robust
                  server-side systems. I've had the opportunity to work on
                  diverse projects, from e-commerce platforms to content
                  management systems, and I thrive in dynamic environments where
                  I can put my skills to the test.
                </span>
              </motion.p>
            </div>

            {/* <div className="flex justify-start items-center vs:hidden">
              <motion.p
                custom={1.5}
                variants={firstChildvariant}
                className="bg-gradient-to-r from-secondary to-primary py-6 px-6 vs:px-3 vs:w-[90%] w-[70%] md:w-[75%] lg:w-[60%] rounded-3xl shadow-xl"
              >
                <span className="sm:hidden">
                  What drives me is the ability to turn ideas into reality
                  through code, transforming ideas into elegant, functional, and
                  user-friendly applications. Collaborating with creative teams
                  and turning their visions into tangible products.
                </span>
                <span className="hidden sm:block">
                  What truly drives me is the ability to turn ideas into reality
                  through code, solving complex problems and transforming them
                  into elegant, functional, and user-friendly applications.
                  Collaborating with creative teams and turning their visions
                  into tangible products.
                </span>
              </motion.p>
            </div> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
