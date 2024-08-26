import React from 'react'
import blockhaven from '../Assets/blockhaven.png'
import ecommerce from '../Assets/ecommerce.png'
import SingleProject from './SingleProject'

const Projects = () => {
  let projectsArr = [
    {
      pimg: blockhaven,
      name: "BlockHaven",
      description: 'BlockHaven is a responsive cryptocurrency tracking website built with React and Vite. The application dynamically fetches live data using an API and displays it, including interactive charts',
      techStack: ["React", "JavaScript", "Material UI", "Tailwind"],
      jump: "https://block-haven.netlify.app/"
    },
    {
      pimg: ecommerce,
      name: "Ecommerce-Nike",
      description: 'This is a shoe ecommerce website project that I built using React. The UI design is heavily inspired by the Nike website.',
      techStack: ["React", "JavaScript", "Material UI", "Tailwind"],
      jump: "https://ecommerce-nike-react.netlify.app/"
    }
  ]
  return (
    <div className='w-[48rem] '>
      {projectsArr.map((item, index) => (<SingleProject key={index} project={item}></SingleProject>))}
    </div>
  )
}

export default Projects
