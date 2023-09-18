import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';

const CircularProgressBar = ({ progress }) => {
    const circumference = 88.4; // Circumference of the circle
    const dashOffset = circumference - (progress / 100) * circumference;

    const isInView = useInView({ 
      // triggerOnce: true,
      threshold: 0.7, 
   })

    return (
      <div ref={isInView.ref} className="relative vs:w-24 vs:h-24 w-32 h-32">
          <svg className="absolute w-full h-full rounded-full bg-primary bg-opacity-40 " viewBox="0 0 32 32">
          {/* Background circle */}
  
          {/* Progress circle */}
          <motion.circle
            
            initial = {{strokeDashoffset: circumference }}
            animate = 
              {
                isInView.inView? {strokeDashoffset: dashOffset, transition: {duration: 1.2}} :
                {strokeDashoffset: circumference, transition: {duration: 1.2}}
              }
            className={`stroke-current text-blue-500`}
            cx="16"
            cy="16"
            r="14"
            strokeWidth="4"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={dashOffset}
          />
  
          {/* Outer fill circle */}
          <circle
              className="fill-current text-dark"
              cx="16"
              cy="16"
              r="12"
          />
          </svg>
          <span className="absolute inset-0 flex items-center justify-center text-blue-500 text-2xl font-semibold">
          {progress}%
          </span>
      </div>
      );
  };


export default CircularProgressBar 