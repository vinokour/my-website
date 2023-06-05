import Image from 'next/image'
import Navbar from './components/navbar'
import Picture from './components/picture'
import Aboutbar from './components/aboutbar'
export default function Home() {
  return (
    <div className=" bg-[#ffff] w-full h-[100vh]">
      <Navbar></Navbar>
      <div className="flex flex-col w-full h-[50vh] bg-white-400">
        <div className="flex flex-row justify-center w-full py-10 mr-20 mt-10 text-black ">
          <div className="flex flex-col w-[50%] px-10 h-[50%]">
          <Picture></Picture>   
          </div>

        </div>
        <div className='flex flex-row bg-blue-400 w-full h-full py-15 mt-20'>
            <Aboutbar></Aboutbar>

          </div>
    </div>
    
      </div>
  )
}
