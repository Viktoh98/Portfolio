import { motion } from "framer-motion";
import { useMyData } from "../context/UserContext";
import CircularProgressBar from "../components/ProgressBar";

const Skill = () => {
  const { myData } = useMyData();
  const [data] = myData;
  const skillSet = data.skillset_set;

  return (
    <section id="Skills" className="py-20">
      <div className="pb-4 text-center flex justify-center items-center flex-col">
        <h2 className="font-bold text-4xl md:text-6xl text-primary">
          Skill Set
        </h2>
        <motion.hr
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1.5, transition: { delay: 0.2, duration: 1 } }}
          className="divider"
        ></motion.hr>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 justify-around mx-auto py-16 gap-6 gap-y-8 w-[95%]">
        {skillSet.map((item) => {
          return (
            <div
              className="flex flex-col items-center justify-center gap-4 shadow-md pt-6"
              key={item.id}
            >
              <CircularProgressBar progress={item.progress} />
              <h3 className="font-bold text-primary pb-6 text-lg sm:text-2xl italic">
                {item.Skill}
              </h3>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skill;
