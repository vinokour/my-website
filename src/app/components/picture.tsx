export default function Picture() {
    return (
        <div className="flex flex-row items-start px-10 gap-20 rounded-full e text-3xl">
            <div className="flex flex-col">
            <p className="text-4xl font-mono py-10   text-blue-400"> My Story</p>
            <p className="text-lg leading-loose">My name is Nicholas Vinokour. I am a rising junior at the University of Michigan majoring in 
            Computer Science and minoring in Business. I'm passoniate about new technologies and how they will impact and chnage the world. I am interested in 
            Sports analytics, entertainment industry, artificial intelligence, and of course watching Ohio State lose to Michigan in about anything
             </p>
            </div > 
            <div className="flex flex-col">
            <img src="/Photo.jpg" className="rounded-md drop-shadow-lg w-[150vw] h-60 ml-20" />
            </div>
            
        </div>
    )
}
