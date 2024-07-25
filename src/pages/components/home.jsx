import React from 'react'

const Home = () => {
  return (
    <div id='home' className='flex flex-col px-[24px] items-start justify-center h-[500px]'>
      <p className='text-sm font-bold'>Introduction</p>
      <span className='text-[55px] mb-0 pb-0'>My name is Hello, a</span>
      <span className='text-[55px] mt-0 pt-0'>London-based web developer</span><br /><br />
      <button className='bg-[#0099ff] px-5 py-3 font-semibold rounded-md'>SEE MY PORTFOLIO</button>
    </div>
  )
}

export default Home