"use client"
import Navbar from "./components/navbar.client";
import Picture from "./components/picture";
import Aboutbar from "./components/aboutbar";
import Experience from "./components/experience";

export default function Home() {

  return (
    <div className="min-w-screen min-h-screen bg-slate-800">
      <Navbar></Navbar>
      <Picture></Picture>
      < Experience></Experience>
      </div>
      /* <div className="flex flex-col w-full h-screen bg-slate-800 ">
        <div className="flex bg-slate-800 flex-row justify-center w-full py-10 mr-20 mt-10 text-black">
          <div className="bg-slate-800 flex flex-col w-[50%] mr-10 h-[50%]">
            <Picture />
          </div>
        </div>
        <Experience />
        <div className=" bg-slate-800 w-full h-full"> Nick</div>
      </div>
    </div> */

  );
}
