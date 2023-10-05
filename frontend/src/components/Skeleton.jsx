import { motion } from "framer-motion";

const Skeleton = () => {
  const parentVariant = {
    hidden: {},
    visible: {},
  };

  const childVariant = {
    hidden: { opacity: 0.9, scale: 0.92 },
    visible: {
      opacity: 1,
      scale: 0.9,
      transition: { duration: 0.7, repeat: Infinity, repeatType: "reverse" },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={parentVariant}
      className="h-screen relative"
    >
      <motion.div
        variants={childVariant}
        className="shadow-md fixed top-[3%] right-[5%] left-[5%] h-[8%] rounded-full bg-slate-200 z-10"
      ></motion.div>
      <div className="h-full lg:grid lg:grid-cols-2 lg:grid-rows-1 grid-rows-2 flex flex-col-reverse justify-center items-center relative">
        <div className="hidden h-full lg:flex flex-col justify-center gap-24 px-12 pt-12">
          <div className="relative right-[0] left-[0]  h-fit flex flex-col justify-center gap-5">
            <motion.div
              variants={childVariant}
              className="h-[50px] bg-slate-300"
            >
              {" "}
            </motion.div>
            <motion.div
              variants={childVariant}
              className="right-[10%] left-[10%] h-[50px] bg-slate-300"
            >
              {" "}
            </motion.div>
            <motion.div
              variants={childVariant}
              className="right-[10%] left-[10%] h-[50px] bg-slate-300"
            >
              {" "}
            </motion.div>
          </div>
          <div className=" relative right-0 left-0 h-fit flex flex-col justify-center gap-4 items-end">
            <motion.div
              variants={childVariant}
              className=" w-[50%] h-[50px] bg-slate-300"
            >
              {" "}
            </motion.div>
            <motion.div
              variants={childVariant}
              className="w-[50%]  h-[50px] bg-slate-300"
            >
              {" "}
            </motion.div>
          </div>
        </div>
        <div className="lg:bg-slate-100 h-full flex flex-col justify-center w-full pt-12">
          <motion.div
            variants={childVariant}
            className="h-[320px] w-[320px] vs:h-[250px] vs:w-[250px] mx-auto rounded-full bg-slate-300"
          ></motion.div>
          <div className="flex h-fit w-full py-12 justify-center gap-4">
            {new Array(1, 2, 3, 4).map((_) => (
              <motion.div
                variants={childVariant}
                className="h-14 vs:h-12 vs:w-12 w-14 rounded-full bg-slate-300"
              ></motion.div>
            ))}
          </div>
          <motion.div
            variants={childVariant}
            className="w-[50%] min-w-[250px] mx-auto py-8 rounded-full gap-4 bg-slate-300"
          ></motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Skeleton;
