import React from 'react'
import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <section id="Contact" className="pt-32">
        <motion.div
            className="pb-20 text-center flex justify-center items-center flex-col">
            <h2 className="font-bold text-4xl md:text-6xl text-primary">Contact</h2>
            <motion.hr 
                initial = {{scaleX: 0}}
                whileInView = {{scaleX: 1.5, transition: {delay: 0.2, duration: 1}}}
                className="divider"></motion.hr>
        </motion.div>
        <div className='grid sm:grid-cols-2'>
            <div className="bg-gradient-to-r from-secondary to-primary text-center text-6xl font-bold font-serif text-dark">
                <h2>Let's</h2>
                <h2>Work</h2>
                <h2>Together!</h2>
            </div>
            <div className="flex flex-col justify-start items-center">
                <h2 className='font-bold text-4xl'>Contact Me</h2>
            </div>
            <form>
                <input type='text' placeholder='firstname' />
            </form>
        </div>
    </section>
  )
}

export default Contact