import React, {useState, useEffect} from 'react'
import Link from 'next/link';
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';



const Navbar = () => {

    const [nav, setNav] = useState(false);
    const [color, setColor] = useState('transparent');
    const [textColor, setTextColor] = useState('white');


    const handleNav = () => {
        setNav(true)
    }

    useEffect(() => {
     const changeColor = () => {
        if(window.scrollY >= 90){
           setColor('#ffffff')
           setTextColor('#000000')
        } else {
            setColor('transparent')
            setTextColor('ffffff')
        }
     }
     window.addEventListener('scroll', changeColor)
    }, [])


  return (
    <div style={{backgroundColor: `${color}`}} className='fixed left-0 top-0 w-full z-10 ease-in duration-300'>
        <div className="max-2-[1240px] m-auto flex justify-between items-center p-4 text-white">
            <Link href='/'>
            <h1 style={{color: `${textColor}`}} className='font-bold text-4xl'> YETI FROZEN CUSTARD</h1>
            </Link>
            <ul style={{color: `${textColor}`}} className='hidden sm:flex gap-10'>
                <li>
                    <Link href='/'>Home</Link>
                </li>
                <li>
                    <Link href='/'>Gallery</Link>
                </li>
                <li>
                    <Link href='/'>About</Link>
                </li>
                <li>
                    <Link href='/'>Contact</Link>
                </li>
            </ul>

            {/* Mobile Button */}
            <div onClick={handleNav} className='block sm:hidden z-10'>
                {nav ? <AiOutlineClose size={20} style={{color: `${textColor}`}}/> : <AiOutlineMenu size={20} style={{color: `${textColor}`}}/>}
            </div>

            {/* Mobile Menu */}
            <div className={nav ? 
            'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
        : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'}>
            <ul style={{color: `${textColor}`}}>
                <li className='p-4 text-4xl hover:text-gray-500'>
                    <Link href='/'>Home</Link>
                </li>
                <li className='p-4 text-4xl hover:text-gray-500'>
                    <Link href='/'>Gallery</Link>
                </li>
                <li className='p-4 text-4xl hover:text-gray-500'>
                    <Link href='/'>About</Link>
                </li>
                <li className='p-4 text-4xl hover:text-gray-500'>
                    <Link href='/'>Contact</Link>
                </li>
            </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar