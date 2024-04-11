import React from 'react'
import Borabora from '../assets/borabora.jpg'
import Borabora2 from '../assets/borabora2.jpg'
import Maldives from '../assets/maldives.jpg'
import Maldives2 from '../assets/maldives2.jpg'
import Mombasa from '../assets/mombasa.jpg'
import Tsavo from '../assets/tsavo.jpg'

function Destinations() {
  return (
    <div className='max-w-[1240px] max-auto py-16 px-4 text-center'>
      <h1>All-inclusive Resorts</h1>
      <p className='py-4'>Best of beaches</p>
      <div className='grid grid-row-none md:grid-cols-5 py-4 gap-2 md:gap-4'>
        <img className='w-full h-full object-cover col-span-2 md:col-span-3 row-span-2' src={Borabora2} alt="/" />
        <img className='w-full h-full object-cover' src={Maldives} alt="/" />
        <img className='w-full h-full object-cover' src={Maldives2} alt="/" />
        <img className='w-full h-full object-cover' src={Mombasa} alt="/" />
        <img className='w-full h-full object-cover' src={Tsavo} alt="/" />

      </div>
    </div>
  )
}

export default Destinations