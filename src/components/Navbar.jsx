import React from 'react'
import pic from "../../public/hacker.avif"

function Navbar() {
  return (
   <>
   <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 shadow-md'>
    <div className='flex justify-between items-center h-16 '>
        <div className='flex space-x-2'>
            <img src={pic} className='h-12 w-12 rounded-full' alt="" />
            <h1 className='font-semibold text-xl cursor-pointer'>Md Jishan <span className='text-green-500 text-2xl'>Ahmad</span> <p>Web Developer</p></h1> 
            
        </div>

       {/* Desktop Navbar */} 
        <div>
            <ul className='hidden md:flex space-x-8 '>
                <li>Home</li>
                <li>About</li>
                <li>Portfolio</li>
                <li>Contact</li>
            </ul>
        </div>
    </div>
{/* Mobile Navbar */}
    <div> 
        <ul className='md:hidden'>
        <li>Home</li>
                <li>About</li>
                <li>Portfolio</li>
                <li>Contact</li>  
        </ul>
    </div>
   </div>
    </>
  )
}

export default Navbar