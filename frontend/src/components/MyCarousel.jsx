import { useRef, useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const firstChildvariant = {
  hidden: { x: 30, opacity: 0 },
  visible: {
    x: [80, 0],
    opacity: 1,
    transition: {
      delay: 0.8,
      duration: 0.3,
    },
  },
  exit: { x: -80, opacity: 0, transition: { duration: 0.4 } },
};

const MyCarousel = ({ Education }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState("no");
  const totalItems = Education.length;

  useEffect(() => {
    const interval = setInterval(() => {
      if (isPaused === "no") {
        firstChildvariant.exit.x = -80;
        firstChildvariant.visible.x = [80, 0];
        setCurrentIndex((prevIndex) => {
          if (prevIndex === totalItems - 1) {
            return 0;
          } else {
            return prevIndex + 1;
          }
        });
      }
    }, 4000);
    return () => {
      clearInterval(interval);
    };
  }, [isPaused, currentIndex, totalItems]);

  function handleClick(action) {
    if (action) {
      firstChildvariant.exit.x = -80;
      firstChildvariant.visible.x = [80, 0];
      return setCurrentIndex((prev) =>
        prev === totalItems - 1 ? 0 : prev + 1
      );
    }
    firstChildvariant.exit.x = 80;
    firstChildvariant.visible.x = [-80, 0];
    setCurrentIndex((prev) => (prev ? (prev -= 1) : totalItems - 1));
  }

  return (
    <div
      onMouseEnter={() => setIsPaused("yes")}
      onMouseLeave={() => setIsPaused("no")}
      className="overflow-hidden my-auto mx-auto h-[390px] sm:h-[350px] cursor-pointer flex justify-center relative items-center w-[90%]"
    >
      {Education.map((item) => {
        return (
          <motion.div
            key={item.id}
            initial="hidden"
            animate={currentIndex === item.id - 1 ? "visible" : "exit"}
            variants={firstChildvariant}
            className="flex justify-center items-center w-full absolute"
          >
            <motion.ul className="vs:text-[1.5rem] w-fit text-2xl sm:text-3xl my-auto font-bold pt-4 pb-8 vs:w-[90%]">
              <li className="italic py-4 flex vs:flex-col">
                <span className="vs:w-[90px] w-[128px] sm:w-[180px]">
                  Certification:
                </span>{" "}
                <span className="overflow-hidden text-white italic pl-8 vs:text-[1.3rem] text-[1.4rem] leading-8 sm:text-2xl">
                  {item.Certification}
                </span>
              </li>
              <li className="italic py-4 flex vs:flex-col">
                <span className="vs:w-[90px] w-[128px] sm:w-[180px]">
                  Institution:
                </span>{" "}
                <span className="text-white italic pl-8 vs:text-[1.3rem] text-[1.4rem] leading-8 text- sm:text-2xl">
                  {item.Institution}
                </span>
              </li>
              <li className="italic py-4 flex ">
                <span className="vs:w-[90px] w-[128px] sm:w-[180px]">
                  Country:
                </span>{" "}
                <span className="text-white italic pl-8 vs:text-[1.3rem] text-[1.4rem] leading-8 sm:text-2xl">
                  {item.Country}
                </span>
              </li>
              <li className="italic py-4 flex ">
                <span className="vs:w-[90px] w-[128px] sm:w-[180px]">
                  Duration:
                </span>{" "}
                <span className="text-white italic pl-8 vs:text-[1.3rem] text-[1.4rem] leading-8 sm:text-2xl">{`${item.Entry_year} - ${item.Final_year}`}</span>
              </li>
            </motion.ul>
          </motion.div>
        );
      })}
      <button
        className="absolute left-0 vs:-bottom-6 h-20 px-4 text-3xl"
        onClick={() => handleClick(0)}
      >
        &lt;
      </button>
      <button
        className="absolute right-0 vs:-bottom-6 h-20 px-4 text-3xl"
        onClick={() => handleClick(1)}
      >
        &gt;
      </button>
    </div>
  );
};

export default MyCarousel;
