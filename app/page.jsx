import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from './components/Header'
import { BsThreeDotsVertical } from "react-icons/bs"
import { AiFillFolder } from "react-icons/ai"
import Intro from './components/Intro'
import Login from './components/Login'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <>
        {/* <Intro/> */}
      <main>
        {true ? <Intro/> : <Login/>}
      </main>
    </>
  )
}
