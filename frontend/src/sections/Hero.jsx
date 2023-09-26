import { useState} from "react";
import { motion } from "framer-motion"
import { useMyData } from "../context/UserContext";


const Hero = () => {
    const {myData} = useMyData()
    const [data] = myData
    const [imageUrl, setImageUrl] = useState('')

    const sharedVariants = {
        initial: { opacity: 0, x: -50 },
        animate: { 
            opacity: 1,
            x: 0,
            transition: {duration: 0.8, delay: 0.5} 
        }
      };
    
    return (
        <section id="Hero" className="relative pt-24 md:pt-0 lg:h-screen">
            <i className="fab fa-react text-white font-bold text-[14rem] lg:text-[20rem] absolute -translate-x-[50%] -translate-y-[50%] left-[50%] top-[50%] opacity-0 md:opacity-50"></i>
            <i className="fab fa-python font-bold text-[8rem] lg:text-[12rem] absolute opacity-10 left-[8%] bottom-[10%]"></i>
            <div id="Hero__container" className="h-full md:grid md:grid-cols-2 md:grid-rows-1 grid-rows-2 flex flex-col-reverse justify-center items-center mx-auto md:gap-5 px-4 md:px-0 ">
                <div className="lg:pt-[8rem] md:pt-[9.5rem] pt-8 text-center flex items-center justify-center flex-col h-full px-1 py-2">
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
                            className="relative italic font-extrabold text-[2.6rem] md:text-[2.8rem] vs:text-[1.9rem] lg:text-[3.1rem] xl:text-[3.4rem] sm:leading-[3.5rem] md:leading-[3.9rem]">
                                Building 
                                <span className="text-primary"> reliable</span> 
                                <span className="text-primary"> programmes</span> with our codes, the 
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
                            whileInView= {{...sharedVariants.animate,
                                transition: {...sharedVariants.animate.transition, delay: 1.2}
                            }}
                            variants={sharedVariants}
                            className="pt-14 font-bold pb-4 italic">
                            <h2 className="sm:text-3xl md:text-4xl text-2xl pb-0 text-right">Full-Stack Developer</h2>
                            <h2 className=" text-primary text-3xl md:text-4xl pt-0  text-right">~Victor</h2>
                        </motion.div>
                    </div>
                </div>
                <div className="md:bg-slate-100 md:flex flex-col items-center justify-center h-full">
                    <div className="bg-primary rounded-[50%] md:h-[350px] md:w-[350px] lg:h-[450px] lg:w-[450px] h-[18rem] px-10 py-10 shadow-xl md:px-20 md:py-12 md:shadow-none">
                        <img src={data.ImageURL} alt="my-image" className="h-full w-full mx-auto"/>
                    </div> 
                </div>
            </div>
        </section>
    )
}

export default Hero