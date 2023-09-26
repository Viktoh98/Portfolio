import { motion } from "framer-motion"
import { useMyData } from "../context/UserContext";
import bgImage from '../assets/images/background-img.jpg';

const containerVariant = {
    hidden: {opacity: 0},
    visible: { 
        opacity: 10, 
        transition: {when: "beforeChildren", delayChildren: 0.6, staggerChildren: 0.8},
    }
}

const firstChildvariant = {
    hidden: {x: 50, opacity: 0},
    visible: {
        x: 0, opacity: 10,
        transition: {delay: 0.2, duration: .8}
    }
}

const secondChildvariant = {
    hidden: {y: 10, opacity: 0},
    visible: { 
        y: 0, opacity: 10, 
        transition: {delay: 1.2, duration: .3, type: 'spring', damping: 1}
    }
}

const Qualification = () => {
    const { myData } = useMyData()
    const [data] = myData
    const Education = data.education_set[0]
    const bgImageStyle = {
        backgroundImage: `url(${bgImage})`,
    };
    

    return (
        <section id="Qualifications" className="pt-32 text-white bg-cover bg-center" style={bgImageStyle}>
            <motion.div
                className="pb-5 text-center flex justify-center items-center flex-col">
                <h2 className="font-bold text-4xl md:text-6xl">Qualification</h2>
                <motion.hr 
                    initial = {{scaleX: 0}}
                    whileInView = {{scaleX: 1.5, transition: {delay: 0.2, duration: 1}}}
                    className="divider"></motion.hr>
            </motion.div>
            <motion.div
                variants={containerVariant}
                initial = 'hidden'
                whileInView = 'visible' 
                >
                <div className="overflow-hidden sm:w-fit sm:px-4 flex flex-col justify-center items-center mx-auto w-[92%]">
                    <motion.ul
                    variants={firstChildvariant}
                    className="vs:text-[1.5rem] text-2xl sm:text-3xl  font-bold pt-4  vs:w-[92%]">
                        <li className="italic py-4 flex vs:flex-col"><span className="vs:w-[90px] w-[128px] sm:w-[180px]">Certification:</span> <span className="overflow-hidden text-white italic pl-8 vs:text-[1.3rem] text-[1.4rem] leading-8 sm:text-2xl">{Education.Certification}</span></li>
                        <li className="italic py-4 flex vs:flex-col"><span className="vs:w-[90px] w-[128px] sm:w-[180px]">Institution:</span> <span className="text-white italic pl-8 vs:text-[1.3rem] text-[1.4rem] leading-8 text- sm:text-2xl">{Education.Institution}</span></li>
                        <li className="italic py-4 flex "><span className="vs:w-[90px] w-[128px] sm:w-[180px]">Country:</span> <span className="text-white italic pl-8 vs:text-[1.3rem] text-[1.4rem] leading-8 sm:text-2xl">{Education.Country}</span></li>
                        <li className="italic py-4 flex "><span className="vs:w-[90px] w-[128px] sm:w-[180px]">Duration:</span> <span className="text-white italic pl-8 vs:text-[1.3rem] text-[1.4rem] leading-8 sm:text-2xl">{`${Education.Entry_year} - ${Education.Final_year}`}</span></li>
                    </motion.ul>
                </div>
                <div 
                    className="flex items-center justify-center py-20">
                    <a href={data.resume_url}>
                        <motion.button 
                            variants={secondChildvariant}
                            className="border-sm font-bold text-[1.2rem] sm:text-[1.4rem] font-[system-ui] vs:px-20 px-32 py-3 rounded-full border-[2px] hover:bg-white hover:scale-[1.05] hover:bg-gradient-to-r hover:from-secondary hover:to-primary shadow-md ">Resume <i className="fa-solid fa-download pl-1"></i>
                        </motion.button>
                    </a>
                </div>
            </motion.div>
        </section>
  )
}

export default Qualification