"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import logo from "../../public/main-logo.svg"
import Image from 'next/image'
import { BsShareFill } from "react-icons/bs"
import TextEditor from '../components/TextEditor'

const Main = () => {
  const router = useRouter();
  return (
    <div>
      <header className='flex shadow-mdf  items-center justify-between p-3 pb-1'>
        <div className='flex'>

          <span onClick={() => router.push("/")} className='cursor-pointer'>
            <Image className='text-2xl' src={logo} width={40} height={40} />
          </span>
          <div className=''>
            <h1 className='font-semibold'>Aman Docs</h1>
            <ul className='flex items-center text-sm space-x-4 '>
              <li>File</li>
              <li>View</li>
              <li>Insert</li>
              <li>Format</li>
              <li>Tools</li>
            </ul>
          </div>
        </div>
        <button className='flex items-center justify-center text-white h-[2.5rem] px-2 rounded-md cursor-pointer gap-2 bg-[#2196f3]'>
          <BsShareFill /> <p className='font-medium '>Share</p> 
        </button>
      </header>
      <TextEditor />
    </div>
  )
}

export default Main
