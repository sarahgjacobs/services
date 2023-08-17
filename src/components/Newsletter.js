import React from 'react'

function Newsletter() {
  return (
    <div className='w-full py-16 text-white bg-black px-4'>
        <div className='max-w-[1240px] mx-aito grid lg:grid-cols-3'>
            <div className='lg:col-span-2'>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Want tips on driving customer traffic?</h1>
                <p>Sign up for our newsletter for weekly info.</p>
            </div>
            <div className='my-4'>
                <div className='flex flex-col sm:flex-row items-center justify-between w-full '>
                    <input className='p-3 flex w-full rounded-md text-black ' type='email' placeholder='Email address' />
                    <button className='bg-[#00df9a] text-black rounded-md font-medium w-[150px] h-[48px] ml-4 my-6 px-6 '>Submit</button>
                </div>
            </div>
            <p>We care about your website privacy. Read our <span className='text-[#00df9a]'> privacy policy </span>for more.</p>
        </div>
    </div>
  )
}

export default Newsletter