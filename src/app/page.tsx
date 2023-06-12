import Image from "next/image";
import Navbar from "./components/navbar";
import Picture from "./components/picture";
import Aboutbar from "./components/aboutbar";
import Experience from "./components/experience";
export default function Home() {
  return (
    <div className="  w-full h-[100vh]">
      <Navbar></Navbar>
      <div className="flex flex-col w-full h-[50vh] bg-slate-800 ">
        <div className="flex bg-slate-800 flex-row justify-center w-full py-10 mr-20 mt-10 text-black ">
          <div className="bg-slate-800 flex flex-col w-[50%] mr-10 h-[50%]">
            <Picture></Picture>
         
          </div>
        </div>
        <Experience></Experience>
    </div>
    </div>
  );
}
