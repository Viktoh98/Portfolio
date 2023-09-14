import { useState } from "react"
import { motion } from "framer-motion"

const Header = () => {
  const [showMenu, setShowMenu] = useState(false)
  const menuVariant = {
    initial: { x: 2000 },
        animate: { 
            x: 0,
            transition: {duration: 0.5} 
        }
  }
  return (
    <header className="fixed right-0 left-0 z-10 bg-white shadow-md">
        <nav className="flex justify-between items-center pt-4 pb-2">
          <div className="flex flex-1 pl-8 font-extrabold text-2xl sm:text-[2rem] text-primary"> <h3>Vict<i className="fas fa-circle-half-stroke rotate-90"></i>r</h3> </div>
          <ul className="hidden sm:flex flex-auto justify-around items-center">
            {['Home', 'About', 'Testimonials', 'Project'].map( (item, index) => {
              return <li className="flex" key={index} ><a href={`#${item}`}>{item}</a></li>
            })}
          </ul>
          <i className="fas fa-bars sm:hidden pr-4 text-2xl" onClick={() => setShowMenu(prev => !prev)}></i>
          {showMenu && 
            <motion.div 
              initial = 'initial'
              animate = 'animate'
              variants = {menuVariant}

              className="fixed top-0 bottom-0 right-0 bg-primary w-2/4">
              <div className="text-end pr-4 pt-2 font-bold text-3xl text-white">
                <i className="fas fa-times" onClick={() => setShowMenu(prev => !prev)}></i>
              </div>
              <ul className="flex flex-col gap-10 font-semibold text-white items-start pl-4 pt-20 shadow-md h-full">
                {['Home', 'About', 'Testimonials', 'Project'].map( (item, index) => {
              return <li className="flex" key={index} onClick={() => setShowMenu(prev => !prev)}><a     href={`#${item}`}>{item}</a></li>
                })}
              </ul>
            </motion.div>
          }
        </nav>
    </header>
  )
}

export default Header