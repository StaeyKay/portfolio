import React from 'react'

const About = () => {
  return (
    <div id='about' className='text-center text-white'>
      <p className='text-[#1E88E9] font-bold'>About me</p>
      <p className='text-[40px]'>Welcome To My Site</p>
      <p className='text-gray-400'>I am a website designer from London, with a strong focus in UI/UX design. I love to get new experiences and</p>
      <p className='text-gray-400'>always learn from my surroundings. I've done more than 285 projects. You can check it through portfolio section</p>
      <p className='text-gray-400'>on this website. I looking forward to any opportunities and challenges.</p>
      <div>
        <div className='space-y-5 md:flex justify-center items-center place-content-center'>
          <div className='mx-10 lg: w-[33%]'>
            <div className='flex justify-between'>
              <h2>Design</h2>
              <p>80%</p>
            </div>
            <div className="flex items-center mt-2 relative w-full">
              <div className="h-1 bg-black-900 w-full rounded-md ">
                <div className="h-1 bg-[#337eff] absolute rounded-full" style={{ width: '80%' }}></div>
              </div>
            </div>
          </div>
          <div className='mx-10 lg: w-[33%]'>
            <div className='flex justify-between'>
              <h2>Branding</h2>
              <p>70%</p>
            </div>
            <div className="flex items-center mt-2 relative w-full">
              <div className="h-1 bg-black-900 w-full rounded-md ">
                <div className="h-1 bg-[#337eff] absolute rounded-full" style={{ width: '70%' }}></div>
              </div>
            </div>
          </div>
          <div className='mx-10 lg: w-[33%]'>
            <div className='flex justify-between'>
              <h2>Marketing</h2>
              <p>70%</p>
            </div>
            <div className="flex items-center mt-2 relative w-full">
              <div className="h-1 bg-black-900 w-full rounded-md ">
                <div className="h-1 bg-[#337eff] absolute rounded-full" style={{ width: '70%' }}></div>
              </div>
            </div>
          </div>
        </div>
        <div className='space-y-5 md:flex w-full'>
          <div className='mx-10'>
            <div className='flex justify-between'>
              <h2>Development</h2>
              <p>80%</p>
            </div>
            <div className="flex items-center mt-2 relative w-full">
              <div className="h-1 bg-black-900 w-full rounded-md ">
                <div className="h-1 bg-[#337eff] absolute rounded-full" style={{ width: '80%' }}></div>
              </div>
            </div>
          </div>
          <div className='mx-10'>
            <div className='flex justify-between'>
              <h2>Photography</h2>
              <p>90%</p>
            </div>
            <div className="flex items-center mt-2 relative w-full">
              <div className="h-1 bg-black-900 w-full rounded-md ">
                <div className="h-1 bg-[#337eff] absolute rounded-full" style={{ width: '90%' }}></div>
              </div>
            </div>
          </div>
          <div className='mx-10'>
            <div className='flex justify-between'>
              <h2>SEO</h2>
              <p>75%</p>
            </div>
            <div className="flex items-center mt-2 relative w-full">
              <div className="h-1 bg-black-900 w-full rounded-md ">
                <div className="h-1 bg-[#337eff] absolute rounded-full" style={{ width: '75%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About