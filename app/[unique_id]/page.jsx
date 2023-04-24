"use client"
import React from 'react'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import logo from "../../public/main-logo.svg"
import Image from 'next/image'
import { BsShareFill } from "react-icons/bs"
import TextEditor from '../components/TextEditor'
import { useParams } from 'next/navigation'
import { HashLoader } from "react-spinners"
import { useSearchParams } from 'next/navigation';

// import { useRouter } from 'next/router'


const Main = ({ params }) => {
  const [loading, setLoading] = useState(true)

  // useEffect(() => {
  //   setLoading(true)
  //   setTimeout(() => {
  //     setLoading(false)
  //   }, 1000)
  // }, [])

  const id = params.unique_id
  const router = useRouter();

  const searchParams = useSearchParams();

  const name = searchParams.get('name');

  
  // const id = router.query.unique_id;
  // alert(id)

  return (
    <div>
      {
        loading ?
          <div className="absolute left-[45%] top-[50%]">
            <HashLoader
              className=""
              color="#2196f3"
              size={65}
            />
          </div>
          : null
      }

      <header className='flex shadow-md  items-center justify-between p-3 pb-1'>
        <div className='flex'>

          <span onClick={() => router.push("/")} className='cursor-pointer'>
            <Image className='text-2xl' src={logo} width={40} height={40} />
          </span>
          <div className=''>
            <h1 className='font-semibold'>{name}</h1>
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
      <TextEditor id={id} />
    </div>
  )
}

export default Main
