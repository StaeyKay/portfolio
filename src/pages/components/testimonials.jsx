import React from 'react'
import { customer1, customer2, customer3 } from '../../assets'

const Testimonials = () => {
  return (
    <div className='p-16'>
        <p className='text-[#1E88E9] font-bold'>Testimonials</p>
        <p className='text-[40px]'>What They Say</p>
        <div className='flex'>
            <div className='border-gray-400 space-y-4'>
                <img src={customer1} alt="image of a customer" className='rounded-full h-16' />
                <p className='text-[#1E88E9]'>John, Pixar Studio</p>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                     totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto.
                </p>
            </div>
            <div className='border-gray-400 space-y-4'>
                <img src={customer2} alt="image of a customer" className='rounded-full h-16' />
                <p className='text-[#1E88E9]'>Sarah, Microsoft</p>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                     totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto.
                </p>
            </div>
            <div className='border-gray-400 space-y-4'>
                <img src={customer3} alt="image of a customer" className='rounded-full h-16' />
                <p className='text-[#1E88E9]'>Japhlett, Apple</p>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                     totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Testimonials