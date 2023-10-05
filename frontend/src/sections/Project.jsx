import { motion } from "framer-motion";
import { useMyData } from "../context/UserContext";
import Frame from "../components/Frame";

const containerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 10,
    transition: {
      when: "beforeChildren",
      delayChildren: 0.6,
      staggerChildren: 0.8,
    },
  },
};

const Project = () => {
  const { myData } = useMyData();
  const Projects = myData[0].projects_set;

  return (
    <section id="Projects" className="pt-20 pb-6">
      <motion.div className="pb-16 text-center flex justify-center items-center flex-col">
        <h2 className="font-bold text-4xl md:text-6xl text-primary pb-2">
          Projects
        </h2>
        <motion.hr
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1.5, transition: { delay: 0.2, duration: 1 } }}
          className="divider"
        ></motion.hr>
      </motion.div>
      <div className="py-6 grid items-center justify-center grid-row sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-5 sm:justify-around px-8 overflow-hidden">
        {Projects.map((project, index) => (
          <Frame key={project.id} {...project} delay={index} />
        ))}
      </div>
    </section>
  );
};

export default Project;
