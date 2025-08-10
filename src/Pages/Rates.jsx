import React from 'react'
import star from '../../public/Dawn.svg' 

function rates() {
  return (
    <section className='mt-8 md:mt-21 xl:mt-29  w-96 md:w-full mx-auto container  h-150 md:h-62 xl:h-93 rounded-xl border    xl:py-20  border-[#646464]'>
        <div className='flex flex-col md:flex-row items-center justify-around md:justify-evenly h-full'>
            <div className='font-poppins text-[#c8fec7]'>
                <h1 className='text-[50px] md:text-[55px] text-center xl:text-left xl:text-9xl font-bold '>90%</h1>
                <p className='md:text-xl text-lg xl:text-3xl text-center xl:text-left font-semibold leading-none'>Job Success </p>
                <p className='md:text-xl text-lg xl:text-3xl  text-center xl:text-left font-semibold leading-none'>Score on Upwork</p>
            </div>
            <img className=' hidden xl:block h-20 w-20 animate-spin-slow' src={star} alt="star"  />
            
            <div className='flex'>
                <h1 className='font-poppins  text-[#c8fec7] text-[50px]  font-semibold md:text-[55px] xl:text-9xl '>></h1>
                <div className=' font-poppins text-[#c8fec7]'>
                <h1 className='text-[50px] md:text-[55px] text-center xl:text-left xl:text-9xl font-bold '>25.000</h1>
                <p className=' md:text-xl text-lg xl:text-3xl  text-center xl:text-left font-semibold leading-none'>Duplicates on Figma </p>
                <p className=' md:text-xl text-lg xl:text-3xl text-center xl:text-left  font-semibold leading-none'>Community</p>
            </div>
            </div>
             
           <img className='h-20 hidden xl:block w-20 animate-spin-slow' src={star} alt="star"  />
            <div className=' flex'>
                <h1 className='font-poppins   text-[#c8fec7] text-[50px] font-semibold md:text-[55px] xl:text-9xl '>></h1>
                <div className=' font-poppins text-[#c8fec7]'>
                <h1 className='text-[50px] md:text-[55px] text-center xl:text-left xl:text-9xl font-bold '>2K</h1>
                <p className=' md:text-xl text-lg xl:text-3xl text-center xl:text-left font-semibold leading-none '>In Finished  </p>
                <p className=' md:text-xl text-lg xl:text-3xl text-center xl:text-left font-semibold leading-none'>Works</p>
            </div>
            </div>
        </div>
    </section>
  )
}

export default rates