import React from 'react'
import Image from 'next/image'


export const Hero = () => {
  return (
   <div className='text-white py-16 px-6'>
    <div className='mt-6 relative flex items-center justify-center sm:h-screen hero-image bg-cover bg-center rounded-2xl'>
      <div className='absolute top-0 bottom-0 left-0 right-0 bg-black/70 z-[2] rounded-2xl'/>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
      <h1 className='text-white font-extrabold sm:text-4xl text-2xl z-[2]'>HONEST, TRANSPARENT, SUSTAINABLE.</h1>
    </div>
    </div>
    
   
    <div className='grid sm:grid-cols-3 grid-cols-1 gap-4 mt-10 justify-items-center'>
      <div className='text-black justify-items-center m-auto'>
      <h1 className='font-bold text-5xl'>Some Heading</h1>
      </div>
      <div className='text-black sm:col-span-2 justify-items-center mt-4'>
        <p className='sm:text-right text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    </div>

    <div className='grid sm:grid-cols-3 grid-cols-1 gap-4 mt-10 justify-items-center'>
      
      <div className='text-black sm:col-span-2 justify-items-center mt-4'>
        <p className='sm:text-right text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
      <div className='text-black justify-items-center m-auto'>
      <h1 className='font-bold text-5xl'>Some Heading</h1>
      </div>
    </div>

    <div className='grid sm:grid-cols-3 grid-cols-1 gap-4 mt-10 justify-items-center'>
      <div className='text-black justify-items-center m-auto'>
      <h1 className='font-bold text-5xl'>Some Heading</h1>
      </div>
      <div className='text-black sm:col-span-2 justify-items-center mt-4'>
        <p className='sm:text-right text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    </div>
   </div>
  )
}
