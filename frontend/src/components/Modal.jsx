import React from 'react'

const Modal = ({live, github}) => {
    return (
        <div className='absolute top-0 right-0 left-0 bottom-0 bg-[#00000081] flex items-center justify-evenly cursor-pointer'>
            {live && <div className='h-10 w-10'><a href={live} target='_blank'><i className="fa fa-eye text-white text-4xl hover:scale-110  hover:text-primary"></i></a></div>}
            <div className='h-10 w-10'><a href={github} target='_blank'><i className="fab fa-github text-white text-4xl hover:scale-110 hover:text-primary"></i></a></div>
        </div>
    )
}

export default Modal