"use client"
import React, { useEffect, useState } from "react"
import { BsThreeDotsVertical } from "react-icons/bs"
import { AiFillFolder } from "react-icons/ai"
import Header from "./Header"
import Link from "next/link"
import { HashLoader } from "react-spinners"



const Intro = () => {
    const [unique_id, setUnique_id] = useState('')
    const [loading, setLoading] = useState(true)
    const [model, setModel] = useState(false)
    const [input, setInput] = useState('')

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }, [])

    const nameSave = (e) => {
        setModel(false)
        generateRandomId()
    }

    const generateRandomId = () => {
        // const min = 1000; // minimum number that can be generated (4-digit)
        // const max = 9999; // maximum number that can be generated (4-digit)
        // const randomNum = Math.floor(Math.random() * (max - min + 1) + min); // generate a random number between min and max (inclusive)
        // console.log(randomNum.toString()) // convert the random number to string and return
        // // alert(randomNum.toString())

        // setLoading(true)
        // setModel(true)

        const id = crypto.randomUUID()
        setUnique_id(id)

        // setLoading(false)

    };

    // const random = generateRandomId();
    // console.log(random)
    return (
        <div className=" relative border-2 w-screen h-screen">

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

            {
                model &&
                <div className="bg-white-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50  border-gray-400 absolute top-[40%] left-[40%] flex flex-col border p-4 w-fit ">
                    <h1>Enter name of Document</h1>
                    <form action="">
                        <input onChange={(e) => setInput(e.target.value)} className="my-2 outline-none border p-2 rounded-md" type="text" placeholder="Type Here ...." />
                        <div className="flex justify-between">
                            <Link onClick={nameSave}  href={{ pathname: `/${unique_id}`, query: { name: input } }}><p className="bg-[#2196f3] py-1 px-2 rounded-md text-white">Go ahead</p></Link>
                            <button onClick={()=>setModel(false)} className="border  py-1 px-2 rounded-md w-[5rem] ">Cancel</button>
                        </div>
                    </form>
                </div>
            }



            <Header />
            <section className='bg-[#f1f3f4] pb-10 px-10'>
                <div className='max-w-3xl mx-auto text-black'>
                    <div className='py-4 flex items-center justify-between'>
                        <h2 className='text-gray-700'>Start Document</h2>
                        <BsThreeDotsVertical className='text-gray-700' />
                    </div>

                    <div className='relative w-40  '>
                        {/* <Image width={100} height={} src="https://ssl.gstatic.com/docs/templates/thumbnails/docs-blank-googlecolors.png" /> */}

                        <img onClick={() => setModel(true)} className='w-full cursor-pointer border-2 hover:border-blue-200' src="https://ssl.gstatic.com/docs/templates/thumbnails/docs-blank-googlecolors.png" alt="" />

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
        </div>
    )
}

export default Intro
