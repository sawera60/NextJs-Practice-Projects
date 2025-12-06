'use client'
import { useRouter } from 'next/navigation';
import React from 'react'


const Destination = () => {
  const destination = ['paris', 'tokyo', 'new york'];
  const router = useRouter()
  return (
    <div className='flex justify-center items-center gap-4 text-white h-full'>
      <div className='font-bold text-2xl'>
        Choose your destination
      </div>
      <div className='flex flex-col gap-4'>
        {destination.map((d, index) => (
          <div key={index} className=' font-bold text-2xl flex items-center justify-center rounded-2xl w-[200px] h-[100px] hover:opacity-[0.5] text-black bg-white transition-all' onClick={()=>router.push(`/destination/${d}`)}>
            {d}

          </div>
        ))}
      </div>
    </div>
  )
}

export default Destination