import React from 'react'
import Web from '../asssets/3918929.jpg'

function Analytics() {
  return (
    <div className='w-full bg-white py-16 px-4 '>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[500px] mx-auto my-1 pr-6' src={Web} alt="/" />
            <div className='flex flex-col justify-center'>
                <p className='text-[#00df9a]  font-bold '>
                    Website Development Process
                    <h1 className='md:text-4xl sm:text-3xl text-2xl text-black font-bold py-2'>Service's Web Development</h1>
                    <p className='text-black '>At our company, we specialize in crafting exceptional 
                        web solutions tailored to the unique needs of small 
                        businesses. Our web development process is meticulously
                         designed with a focus on efficiency and quality. From 
                         the outset, we collaborate closely with you to 
                         understand your vision and goals. Our team of skilled 
                         developers then works diligently to create a seamless 
                         online presence that reflects your brand identity and 
                         engages your audience. Throughout the process, we 
                         prioritize efficiency without compromising on the quality
                          of our work. By leveraging the latest technologies and 
                          best practices, we ensure that your website not only 
                          meets but exceeds industry standards. We take pride in 
                          delivering web solutions that empower your business to 
                          thrive in the digital landscape, offering a user-friendly
                           experience that resonates with your target market. Your 
                           success is our driving force, and we are dedicated to 
                           crafting web experiences that leave a lasting impact.</p>
                </p>
                <button className='text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 bg-black '>Get Started</button>

            </div>
        </div>
    </div>
  )
}

export default Analytics