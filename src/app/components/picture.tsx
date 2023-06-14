export default function Picture() {
  return (
    <div className="flex items-center flex-col px-10 mr-10 gap-5">
      <div className="flex flex-col">
        <p className="flex text-lg ml-20 font-mono text-blue-400 md:text-xl lg:text-2xl"> Hi, my name is </p>
        <p className="text-5xl ml-20 font-mono text-white md:text-7xl lg:text-7xl">Nicholas Vinokour,</p>
        <p className="text-5xl ml-20 font-mono text-blue-200 md:text-7xl lg:text-7xl">
          and I build things for fun.
        </p>
      </div>
      
      <p className="flex ml-20 py-5    sm: w-full text-xs md:text-sm px-5 lg:text-base items-center text-gray-400 mb-5 leading-normal md:leading-loose">
        {" "}
        I am a junior at the University of Michigan, majoring in Computer Science and minoring in Business. I am passionate about new technologies and how they will impact and change the world. My interests include sports analytics, the entertainment industry, artificial intelligence, and of course, watching Ohio State lose to Michigan in just about anything. I am currently seeking 2024 SWE/AI Summer internships. Outside of school, I am focused on developing products for a digital identity verification platform, Soul.
      </p>
    </div>
  );
}
