import { motion } from "framer-motion"
import { useMyData } from "../context/UserContext";

const Qualification = () => {
    const { myData } = useMyData()
    const [data] = myData
    console.log(data)

    return (
        <section id="Qualifications" className="pt-32  text-white bg-primary">
            <div className="pb-6 text-center flex justify-center items-center flex-col">
                <h2 className="font-bold text-4xl md:text-6xl">Qualification</h2>
                <motion.hr 
                    initial = {{scaleX: 0}}
                    whileInView = {{scaleX: 1.5, transition: {delay: 0.2, duration: 1}}}
                    className="divider"></motion.hr>
            </div>
            <div className="px-8">
                <h3 className="text-4xl font-bold italic">Education</h3>
            </div>
        </section>
  )
}

export default Qualification