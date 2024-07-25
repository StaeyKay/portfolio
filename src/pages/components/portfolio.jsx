import React from 'react'
import { project1, project2, project3, project4, project5, project6 } from '../../assets'

const Portfolio = () => {
  return (
    <div className='mx-20'>
      <p className='text-[#1E88E9] font-bold'>About me</p>
      <p className='text-[40px]'>Welcome To My Site</p><br /><br />
      <p className='text-center'>all projects</p>
      <div className='grid grid-cols-3 gap-2'>
        <div className='relative'>
          <img src={project1} alt="Project image" />
          <div className='absolute inset-20'>
            <p>Project name</p>
            <a href="">Project link</a>
          </div>
        </div>
        <div className='relative'>
          <img src={project2} alt="" />
          <div className='absolute inset-0 bg-gray-800 opacity-0'>
            <p>Project name</p>
            <a href="">Project link</a>
          </div>
        </div>
        <img src={project3} alt="" />
        <img src={project4} alt="" />
        <img src={project5} alt="" />
        <img src={project6} alt="" />
      </div>
    </div>
  )
}

export default Portfolio