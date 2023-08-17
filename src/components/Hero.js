import React from 'react'
import Typed from 'react-typed'

function Hero() {
  return (
    <div className='text-white '>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <p className='text-[#00df9a] font-bold p-2'>GROWING WITH WEBSITES</p>
            <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
                Grow with <span className='text-[#00df9a]'>Services.</span>
                </h1>
            <div className=' justify-center items-center max-w-[1240px]'>
                <p className='md:text-5xl sm:text-4xl text-xl font-bold'>
                    Web Development for: 
                </p>
                <Typed 
                className='md:text-5xl sm:text-4xl text-xl font-bold'
                strings={['Small Buisnesses', 'Local Companies', 'Growing Communities']} 
                typeSpeed={40}
                backSpeed={50}
                loop 
                />
            </div>
            <p className='md:text-2xl text-xl font-bolld pt-2 text-gray-500'>
                Solve your web problems with ease through Service's efficient 
                web-building skills targeted toward your small buisness needs.
                </p>
                <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black '>Get Started</button>
        </div>
    </div>
  )
}

export default Hero