import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer';

const SingleProject = ({project}) => {

  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <div className='md:h-56 md:grid md:grid-cols-2 md:grid-rows-4 gap-2 overflow-hidden px-6 md:0 mt-4'>

      <motion.div className='row-span-4'
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{ ease: 'easeOut', duration: 1 }}>
        <img src={project.pimg} alt="blockhaven" className='h-full w-full rounded-lg' loading="lazy"/>
      </motion.div>

      <div className='md:row-span-3 rounded-lg mt-2 md:mt-0 md:h-full overflow-hidden'>
      <motion.div className='md:grid md:grid-rows-5 overflow-hidden w-full h-full bg-[#1d1d1d] p-2' ref={ref1}
      initial={{y:-50, opacity:0}}
      animate={inView1 &&{y:0, opacity:1}} 
      transition={{ease:'easeOut', delay:0.2, duration:0.5}}>
        <h1 className='font-semibold md:text-2xl text-xl'>{project.name}</h1>
        <p className='md:text-sm mt-2 row-span-3 text-xs'>{project.description}</p>
        <div className='flex items-end'>
        {project.techStack.map((value, index)=><div className='flex justify-center items-center' key={index}><p className=' bg-[#6b6b6b] px-2 py-[1px] rounded-lg m-1 mt-4 md:mt-0 md:text-xs text-[8px] text-center'>{value}</p></div>)}
        </div>
      </motion.div>
      </div>

      <div className='flex justify-center items-center bg-[#1d1d1d] rounded-lg mt-2 py-2 md:mt-0 md:py-0 '>
        <a href={project.jump} target="_blank" className="text-white hover:text-gray-400">
          See Live!
        </a>
      </div>
    </div>
  )
}

export default SingleProject
