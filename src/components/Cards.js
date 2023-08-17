import React from 'react'
import Image from '../asssets/3918929.jpg'
import Image2 from '../asssets/6587173.jpg'
import Image3 from '../asssets/20945851.jpg'

function Cards() {
  return (
    <div className='w-full py-[10rem] px-4 bg-white '>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 grid-cols-3 gap-8'>
            <div className='w-full p-4 flex flex-col my-4 rounded-lg hover:scale-105 duration-300 shadow-xl'>
                {/* negative rem makes the image sit halfway through the border */}
                <img className='w-20 mx-auto mt-[-3rem] bg-white ' src={Image} alt="" /> 
                <h2 className='text-2xl font-bold text-center py-8'>Single Page</h2>
                <p className='text-center text-4xl font-bold'>$349</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>Display your company's branding in a clean, personlized, one-apge website curated by our design and development team.</p>
                    <p className='py-2 border-b mx-8'>No storage</p>
                    <p className='py-2 border-b mx-8'>Send up to 2 GB a month</p>
                </div>
                <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trail</button>
            </div>
            <div className='w-full p-4 flex flex-col my-8 md:my-0 bg-gray-100 rounded-lg hover:scale-105 duration-300 shadow-xl'>
                <img className='w-20 mx-auto mt-[-3rem] bg-transparent ' src={Image2} alt="" /> 
                <h2 className='text-2xl font-bold text-center py-8'>Multi Page w DB</h2>
                <p className='text-center text-4xl font-bold'>$549</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>Host your entire website through many different pages with a database to store your important clients and imformation. Mainted monthly by our team.</p>
                    <p className='py-2 border-b mx-8'>500GB Storage</p>
                    <p className='py-2 border-b mx-8'>One-on-one Consulting</p>
                </div>
                <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Best Value</button>
            </div>
            <div className='w-full p-4 flex flex-col my-4 rounded-lg hover:scale-105 duration-300 shadow-xl'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white ' src={Image3} alt="" /> 
                <h2 className='text-2xl font-bold text-center py-8'>Single Page w DB</h2>
                <p className='text-center text-4xl font-bold'>$499</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>Host your simplistic company page with database mangement included.</p>
                    <p className='py-2 border-b mx-8'>500GB Storage</p>
                    <p className='py-2 border-b mx-8'>Monthly Consultations</p>
                </div>
                <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trail</button>
            </div>
        </div>
    </div>
  )
}

export default Cards