import { motion, transform } from "framer-motion"
import { useState } from "react"
import Modal from "./Modal"

const frameVariant = {
  hidden: {x: 100, opacity : 0},
  visible: i => ({
    x: 0,
    opacity: 10,
    transition: {delay: i*0.4, duration: 1}
  })
}

const Frame = (props) => {
  const [isHovered, setIsHovered] = useState(false);

  const hoverStyles = {
    transform: isHovered? 'scale(1.25)' : 'scale(1)',
    transition: 'all 0.2s'
  }

  return (
    <motion.div
      custom={props.delay}
      initial = 'hidden'
      whileInView= 'visible'
      variants={frameVariant} 
      className='shadow-lg rounded-md border-solid border-4 border-primary max-w-[400px] sm:max-w-full h-[280px]'>
      <div className="h-full  relative" onMouseEnter={() => setIsHovered(prev => !prev)} onMouseLeave={() => setIsHovered(prev => !prev)} >
        <div className='h-[85%] w-full overflow-hidden'>
          <img src={props.Image} className='w-full h-full' style={hoverStyles}  />
            {isHovered && <Modal live={props.Live_URL}
              github={props.Github_URL} /> }
        </div>
        <figcaption className='border-none text-center py-2 text-xl font-bold text-primary font-[system-ui]'>{props.name}</figcaption>
      </div>
    </motion.div>
  )
}

export default Frame