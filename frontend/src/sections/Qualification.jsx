import { motion } from "framer-motion";
import { useMyData } from "../context/UserContext";
import MyCarousel from "../components/MyCarousel";
import Button from "../components/Button";

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

const secondChildvariant = {
  hidden: { y: 10, opacity: 0 },
  visible: {
    y: 0,
    opacity: 10,
    transition: { delay: 0.8, duration: 0.3, type: "spring", damping: 1 },
  },
};

const Qualification = () => {
  const { myData } = useMyData();
  const [data] = myData;
  const Education = data.education_set;

  return (
    <section
      id="Qualifications"
      className="pt-20 mb-20 text-white relative  bg-gray-800"
    >
      <motion.div className="pb-12 text-center flex justify-center items-center flex-col">
        <h2 className="font-bold text-4xl md:text-6xl">Qualification</h2>
        <motion.hr
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1.5, transition: { delay: 0.2, duration: 1 } }}
          className="divider"
        ></motion.hr>
      </motion.div>
      <motion.div
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        className="py-8"
      >
        <MyCarousel Education={Education} />
        <motion.div
          variants={secondChildvariant}
          className="flex relative items-center justify-center pt-20 pb-20"
        >
          <div className="absolute  y-0 ">
            <a href={data.resume_url}>
              <Button>
                Resume <i className="fa-solid fa-download pl-1"></i>
              </Button>
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Qualification;
