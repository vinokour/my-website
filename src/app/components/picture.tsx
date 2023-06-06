export default function Picture() {
    return (
        <div className="flex flex-col items-start px-10 gap-20 rounded-full e text-3xl">
            <div className="flex flex-col">
            <p className="flex text-lg font-mono py-3  text-blue-400"> Hi, I'm </p>
            <p className="text-7xl font-mono text-white">Nicholas Vinokour,</p>
            <p className="text-7xl font-mono text-blue-200">and I build things for fun.</p>
            {/* <p className=" text-xs text-gray-400 py-3">Rising Junior & Computer Sceince @ <img src="/UofM.png" className="w-12 h-10 inline-block" />
            </p> */}
        
            </div > 
            {/* <div className="flex flex-col">
            <img src="/Photo.jpg" className="rounded-md drop-shadow-lg w-[150vw] h-60 ml-20" />
            </div> */}

          <div>  <p className="flex text-lg  text-gray-400 py-5 leading-loose"> I am a rising junior at the University of Michigan majoring in 
        Computer Science and minoring in Business. I'm passoniate about new technologies and how they will impact and chnage the world. I am interested in 
        Sports analytics, entertainmet industry, artificial intelligence, and of course watching Ohio State lose to Michigan in about anything. On the side from school, I am focused on devolping products for a digital identity verification platform, <a href="soulstamps.com">Soul</a>
         </p></div>
            
        </div>
        
    )
}
