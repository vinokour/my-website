export default function Experience() {
  return (
    <div className="flex    ml-96 gap-5 flex-col gap-y-6 h-full py-6 font-mono text-3xl md:text-4xl lg:text-5xl text-blue-400 mt-10  bg-slate-800  md:px-0">
      <h1 className=" md:text-5xl lg:text-7xl">Professional Experience</h1>
      <div className="flex flex-wrap  flex-col gap-y-20 gap-x-80 mt-6">
        <a href="https://soulstamps.com/">
          <img className="object-contain mt-20 h-12 md:h-16" src="soul4.png" alt="Soul Stamps" />

        </a>
        <p className="font-mono w-1/2  text-gray-400 text-sm">Since October of my Sophomore year, I have been working on Soul. Soul is a digital identity authenticator built on Solana, and we are a small startup based in Los Angeles. At Soul, I've been deeply involved in creating innovative blockchain-based identity solutions. Our team has won over $60,000 in hackathons for our work with Soulstamps and AquaID, which combined into Soul. 
          I am a Software Engineer on the team and am currently developing a RESTful backend system for controlling autonomous lead finding and direct email marketing.</p>
        <a href="https://www.honeywell.com/us/en">
          <img className="object-contain h-12 md:h-16" src="Honeywell.png" alt="Honeywell" />
          
        </a>
        <p className="font-mono w-1/2  text-gray-400 text-sm">Starting this May, I have been a Sofware Engineer intern at Honeywell in their Atlanta offices. I am working under Honeywell Connected Enterprises (HCE) with Logistics and Warehouse team, devolping applications and APIs for the Operational Intelligence team.
          </p>
        <a href="https://www.mlb.com/">
          <img className="object-contain h-12 md:h-16" src="mlb.png" alt="MLB" />
        </a>
        <p className="font-mono w-1/2  text-gray-400 text-sm">Last Summer I was a Creative Studio intern at Major League Baseball. During my time at MLB, I put my coding skills to use by creating a web application that made the process of reviewing live game tweets from MLB accounts a breeze. With a combination of React.js for frontend development, Python for backend tasks, and deftly written calls to RESTful and Twitter APIs, I managed to boost our tracking efficiency significantly by over 80%.

My role also saw me keeping a close eye on the performance of a massive number of social media posts - over 3,500 to be exact - spanning Instagram, Facebook, and Twitter for both domestic and international MLB accounts.</p>
      </div>
    </div>
  );
}
