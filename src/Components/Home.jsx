import React from 'react'
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion"
import image3 from '../Assets/image3.jpg'
import html5_svg from '../Assets/html5.svg'
import css3_svg from '../Assets/css3.svg'
import js_svg from '../Assets/JS.svg'
import react_svg from '../Assets/react.svg'
import redux_svg from '../Assets/redux.svg'
import tailwind_svg from  '../Assets/tailwind.svg'
import sql_svg from '../Assets/Sql.svg'
import emoji from '../Assets/emoji.svg'

const Home = () => {
  const techStack=[html5_svg, css3_svg, tailwind_svg, js_svg, react_svg, redux_svg, sql_svg]
  const { ref: ref1, inView: inView1 } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: ref2, inView: inView2 } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: ref3, inView: inView3 } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: ref4, inView: inView4 } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: ref5, inView: inView5 } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const { ref: ref6, inView: inView6 } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  return (
    <section className='md:grid md:grid-cols-3 md:grid-rows-5 md:gap-2 md:w-[48rem] md:h-[40rem] px-6 md:px-0 overflow-x-hidden md:overflow-visible'>
      <motion.div className='col-span-2 row-span-1 bg-[#1d1d1d] rounded-lg p-3 md:p-0'  ref={ref1}
        initial={{ x: -80, opacity: 0 }}
        animate={inView1 &&{ x: 0, opacity: 1 }}
        transition={{ ease: 'easeOut', duration: 0.5 }}>
        <div className='p-2'>
          <h1 className='text-xl'>Who am I?</h1>
          <p className='text-sm text-[#6b6b6b]'>Hello! my name is Abhishek Paste. I am a self-taught Front-End Developer with a keen interest in the MERN stack. Passionate about learning new technologies, I am always looking for new challenges.</p>
        </div>
      </motion.div>

      <motion.div className='md:col-span-1 md:row-span-2 bg-[#1d1d1d] rounded-lg hidden md:block'
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: 'easeOut', duration: 0.7 }}>
        <img src={image3} alt="" className="w-full h-full object-cover rounded-lg" loading="lazy"/>
      </motion.div>

      <motion.div className='col-span-1 row-span-1 bg-[#2c5f87] rounded-lg flex justify-center items-center text-xl font-semibold flex-col py-4 mt-4 md:py-0 md:mt-0' ref={ref2}
        initial={{ x: -80, opacity: 0 }}
        animate={inView2 &&{ x: 0, opacity: 1 }}
        transition={{ ease: 'easeOut', duration: 1.5 }}>
        <h1>Self-Taught</h1>
        <h1>Front-End Developer</h1>
      </motion.div>

      <div className='col-span-1 row-span-2 bg-[#1d1d1d] rounded-lg flex felx-col justify-center items-center py-4 mt-4 md:py-0 md:mt-0'>
        <motion.div className='flex justify-center items-center flex-col' ref={ref3}
        initial={{opacity:0}}
        animate={inView3 &&{opacity:1}}
        transition={{ease:'easeOut', duration:2}}>
        <img src={emoji} alt="" className='h-11 w-11'/>
        <h1 className='text-[#2c5f87] font-bold text-2xl'>Abhishek Paste</h1>
        </motion.div>
      </div>

      <motion.div className='col-span-1 row-span-3 bg-[#1d1d1d] rounded-lg py-4 mt-4 md:py-0 md:mt-0' ref={ref4}
      initial={{y:50 , opacity:0}}
      animate={inView4 &&{y:0, opacity:1}}
      transition={{ease:'easeOut', duration:1.1}}>
        <center>
        <h1 className='text-xl p-4'>Technologies I have learned</h1>
        <div className='grid grid-cols-3 justify-items-center'>
        {techStack.map((item, index)=>(<img src={item}  key={index} className='w-11 h-11 my-3'></img>))}
        </div>
        </center>
      </motion.div>

      <motion.div className='col-span-1 row-span-1 rounded-lg bg-[#2c5f87] flex justify-center items-center flex-col font-semibold text-lg py-4 mt-4 md:py-0 md:mt-0' ref={ref5}
        initial={{ x: 50, opacity: 0 }} 
        animate={inView5 &&{ x: 0, opacity: 1 }}
        transition={{ ease: 'easeOut', duration: 1.5 }}>
        <h1>"People’s dreams have no end</h1>
        <h1>they only evolve and grow."</h1>
      </motion.div>

      <motion.div className='col-span-2 row-span-2 bg-[#1d1d1d] rounded-lg py-4 mt-4 md:py-0 md:mt-0' ref={ref6}
      initial={{x:80 , opacity:0}}
      animate={inView6 &&{x:0, opacity:1}}
      transition={{ease:'easeOut', duration:0.9}}>
      <div className='px-2'>
        <h1 className='text-xl font-semibold'>Education</h1>
        <div className='flex justify-between text-[#6b6b6b]'>
        <p className='text-[#6b6b6b]'>BBA(Computer Application) <span className='text-[10px]'>(2019-2022)</span></p>
        <p>78.11%</p>
        </div>
        <div className='flex justify-between text-[#6b6b6b]'>
        <p className='text-[#6b6b6b]'>HSC <span className='text-[10px]'>(2017-2019) </span></p>
        <p>70.15%</p>
        </div>
        <div className='flex justify-between text-[#6b6b6b]'>
        <p>SSC <span className='text-[10px]'>(2017) </span></p> 
        <p>70.20%</p>
        </div>
        <h1 className='text-xl font-semibold mt-3'>Journey So Far</h1>
        <p className='text-sm text-[#6b6b6b]'>My career started at vtail.co, a UK-based Healthcare & Communication startup, where I worked as a Data Entry Clerk. However, my curiosity for technology and a passion for web development was always there and one day I decided to quit my job. Transitioning to Front-End Development has been a thrilling adventure.</p>
        </div>
      </motion.div>
    </section>
  )
}

export default Home
