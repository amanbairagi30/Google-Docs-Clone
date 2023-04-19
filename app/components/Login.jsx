import React from 'react'
import logo from "../../public/main-logo.svg"
import Image from 'next/image'

const Login = () => {
  return (
    <div className='flex items-center border h-[100vh] justify-center'>
      <div className='mx-auto flex flex-col border border-[#2196f3] rounded-lg w-[65%] md:w-[25%] h-[60%] md:p-6 p-4 items-center justify-center '>
        <Image className='w-[40%] md:w-[70%] my-8' src={logo} width={40} height={40} />

        <p className='text-3xl font-medium'>Google Docs Clone</p>
        <button className='my-6 bg-[#2196f3] px-4 py-2 rounded-lg text-white hover:bg-[#c8e6ff] hover:border-[#2196f3] hover:text-[#2196f3] '>Get Started</button>
      </div>
    </div>
  )
}

export default Login
