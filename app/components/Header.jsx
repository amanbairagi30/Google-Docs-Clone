import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx"
import { AiOutlineSearch } from "react-icons/ai"
import { BsFillGrid3X3GapFill } from "react-icons/bs"
import Image from 'next/image'
import logo from "../../public/main-logo.svg"
import Aman from "../../public/aman_img.jpg"

const Header = () => {
    return (
        <div className='flex items-center flex-start py-3 px-5 shadow-md  w-full'>
            <RxHamburgerMenu className='text-xl mx-2 hover:cursor-pointer' />

            <Image src={logo} width={40} height={40} />
            <h1 className='mr-2 md:mr-20 '>Docs</h1>

            <div className="flex flex-grow border items-center px-2 py-1 mx-1 text-gray-500 bg-gray-100 rounded-full">
                <AiOutlineSearch className='text-xl' />
                <input type="text" className='flex flex-grow mx-2 text-gray-500 bg-transparent outline-none' placeholder='Search your Docs' />
            </div>
            <BsFillGrid3X3GapFill className='text-gray-500 ml-5 md:ml-20 text-2xl mx-2'/>
            <Image className=' rounded-[100%] object-cover' src={Aman} width={30} height={30} />
        </div>
    )
}

export default Header
