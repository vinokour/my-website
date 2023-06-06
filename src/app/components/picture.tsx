export default function Picture() {
    return (
        <div className="flex flex-row items-start px-10 gap-20 rounded-full e text-3xl">
            <div className="flex flex-col">
            <p className="text-lg font-mono py-3  text-blue-400"> Hi, I'm </p>
            <p className="text-3xl">NICHOLAS VINOKOUR</p>
            <p className=" text-xs text-blue-400 py-3">Rising Junior & Computer Sceince @ <img src="/UofM.png" className="w-12 h-10 inline-block" />
            </p>
            <p className=" text-sm py-3 leading-loose"> I am a rising junior at the University of Michigan majoring in 
            Computer Science and minoring in Business. I'm passoniate about new technologies and how they will impact and chnage the world. I am interested in 
            Sports analytics, entertainmet industry, artificial intelligence, and of course watching Ohio State lose to Michigan in about anything
             </p>
            </div > 
            <div className="flex flex-col">
            <img src="/Photo.jpg" className="rounded-md drop-shadow-lg w-[150vw] h-60 ml-20" />
            </div>
            
        </div>
    )
}
