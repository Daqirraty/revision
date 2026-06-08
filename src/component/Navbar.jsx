import React, { useState } from 'react'
import hero from '../assets/hero.png'
import vite from '../assets/vite.svg'
// import { IoSunnyOutline } from "react-icons/io5";
// import { AiFillMoon } from "react-icons/ai"
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";


const Navbar = () => {
    const [toggle, setToggle] = useState(true)
    const [dropDownOne, setDropDownOne] = useState(false)

    const handleToggle = () => {
        setToggle(!toggle)
    }
    const handleDropDownOne = () => {
        setDropDownOne(!dropDownOne)
    }
  return (
    <div className='relative flex justify-center items-center'>
        <div className='w-[75%]  border-2 flex items-center justify-between'>
            <div className='w-full md:w-[30%] flex items-center justify-between gap-5 border-2 border-yellow-500 p-5'>
                <p>Mono</p>
                {
                    toggle ?  <RxHamburgerMenu onClick={handleToggle} className='w-10 md:hidden'/> : <IoCloseOutline onClick={handleToggle} className='w-10 md:hidden'/> 


                }
            </div>
            <div className={`${toggle ? 'hidden' : 'block'} w-full md:w-[70%] flex items-center justify-between gap-5 border-2 border-green-500 absolute md:static md:flex top-[100%] left-0 `}>
                <ul className='w-full flex flex-col md:w-[60%] md:flex-row justify-between items-center gap-4'>
                    <li className='w-[70%] md:w-fit group p-5 border-4'>
                        <span className='flex justify-between'>
                            <p>Product</p>
                            <img src={vite} alt="vite" className='md:hidden' onClick={handleDropDownOne}/>
                        </span>
                        <div className={`${dropDownOne ? 'block' : 'hidden'} w-[100%] flex md:justify-center md:items-center static  md:group-hover:block md:absolute md:left-[.2rem] md:top-[5rem] border-2 border-red-500`}>
                            <div className='w-full md:w-[75%] border-4'>1</div>
                        </div>
                    </li>
                    <li>Use cases</li>
                    <li>Company</li>
                    <li>developer</li>
                    <li>Pricing</li>
                </ul>
                <div className='hidden md:block flex items-center gap-5'>
                 <img src="" alt="" />
                   <span className='flex items-center gap-5'>
                     <button>Login</button>
                    <button>Sign Up</button>
                   </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar