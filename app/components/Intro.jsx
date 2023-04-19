import React from "react"
import { BsThreeDotsVertical } from "react-icons/bs"
import { AiFillFolder } from "react-icons/ai"
import Header from "./Header"
import Link from "next/link"


const Intro = () => {
    return (
        <>
            <Header />
            <section className='bg-[#f1f3f4] pb-10 px-10'>
                <div className='max-w-3xl mx-auto text-black'>
                    <div className='py-4 flex items-center justify-between'>
                        <h2 className='text-gray-700'>Start Document</h2>
                        <BsThreeDotsVertical className='text-gray-700' />
                    </div>

                    <div className='relative w-40  '>
                        {/* <Image width={100} height={} src="https://ssl.gstatic.com/docs/templates/thumbnails/docs-blank-googlecolors.png" /> */}

                        <Link href={`/main`}><img className='w-full cursor-pointer border-2 hover:border-blue-200' src="https://ssl.gstatic.com/docs/templates/thumbnails/docs-blank-googlecolors.png" alt="" /></Link>

                        <p className='mt-2 ml-2 '>Blank</p>
                    </div>
                </div>
            </section>
            <section className='bg-white px-10 md:px-0 '>
                <div className='max-w-3xl mx-auto py-8 '>
                    <div className='flex items-center justify-between pb-5 '>
                        <h1 className='font-medium flex-grow'>My Documents</h1>
                        <p className='mr-12'>Date Created</p>
                        <AiFillFolder className='text-2xl cursor-pointer text-gray-700' />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Intro