import React from 'react'
import { Lightbulb, BarChartBig, Camera } from 'lucide-react'

const Services = () => {
  return (
    <div className='text-center text-white'>
      <p className='text-[#1E88E9] font-bold'>My Services</p>
      <p className='text-[40px]'>I'm Available For Hire</p>
      <div className='flex justify-center w-screen gap-x-5'>
        <div className='bg-[#FFFFFF1E] place-content-center rounded-lg p-8 hover:bg-[#1E88E9] group'>
          <Lightbulb className='items-center' size={48} color="#1E88E9" />
          <h3 className='font-bold text-[18px] p-6'>Design</h3>
          <p>Sed ut perspiciatis unde omnis iste</p>
          <p>natus error sit voluptatem accusantium</p>
          <p>doloremque laudantium, totam rem.</p>
        </div><br />
        <div className='bg-[#FFFFFF1E] place-content-center rounded-lg p-8'>
          <BarChartBig className='items-center' size={48} color="#1E88E9" />
          <h3 className='font-bold text-[18px] p-6'>Marketing</h3>
          <p>Sed ut perspiciatis unde omnis iste</p>
          <p>natus error sit voluptatem accusantium</p>
          <p>doloremque laudantium, totam rem.</p>
        </div><br />
        <div className='bg-[#FFFFFF1E] place-content-center rounded-lg p-8'>
          <Camera className='items-center' size={48} color="#1E88E9" />
          <h3 className='font-bold text-[18px] p-6'>Photography</h3>
          <p>Sed ut perspiciatis unde omnis iste</p>
          <p>natus error sit voluptatem accusantium</p>
          <p>doloremque laudantium, totam rem.</p>
        </div>
      </div>

      <style jsx>{`
  .group:hover .items-center {
    color: #ffffff;
  }
`}
      </style>
    </div>


  )
}

export default Services

