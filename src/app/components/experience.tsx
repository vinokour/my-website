import { useState } from "react";

export default function Experience() {
  const [selected, setSelected] = useState<string | null>(null);

  const handleClick = (id: string) => {
    if (id === selected) {
      setSelected(null);
    } else {
      setSelected(id);
    }
  };

  return (
    <div className="flex flex-col gap-5 h-full lg:mt-20 py-6 font-mono text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-blue-400 mt-10 bg-slate-800 px-4 md:px-0">
      <h1 className="text-center text-xl md:ml-10 md:text-3xl lg:text-5xl xl:text-7xl">
        Professional Experience
      </h1>
      <div className="flex lg:flex-row flex-col flex-wrap gap-5 justify-center items-center lg:mt-6">
        <div
          className="card rounded-3xl cursor-pointer bg-white p-4 md:p-3"
          onClick={() => handleClick("soul")}
        >
          <img
            className="object-contain h-12 md:h-16 md:ml-2 lg:ml-3 lg:px-1"
            src="soul4.png"
            alt="Soul Stamps"
          />
          <p className="font-mono text-center text-sm text-black mt-4">
            Software Engineer
          </p>
          <p className="font-mono text-center text-sm text-black">
            October 2022 - Present
          </p>
        </div>

        <div
          className="card rounded-3xl cursor-pointer bg-white p-4"
          onClick={() => handleClick("honeywell")}
        >
          <img
            className="object-contain h-12 md:h-16 md:ml-0 lg:ml-0"
            src="Honeywell.png"
            alt="Honeywell"
          />
          <p className="font-mono text-center text-sm text-black">
            Software Engineer Intern
          </p>
          <p className="font-mono text-center text-sm text-black">
            May 2023 - Present
          </p>
        </div>

        <div
          className="card rounded-3xl cursor-pointer bg-white p-4"
          onClick={() => handleClick("mlb")}
        >
          <img
            className="object-contain h-12 md:h-16 md:ml-5 lg:ml-10"
            src="mlb.png"
            alt="MLB"
          />
          <p className="font-mono text-center text-sm text-black mt-4">
            Creative Studio Intern
          </p>
          <p className="font-mono text-center text-sm text-black">
            June 2022 - August 2022
          </p>
        </div>
      </div>

      {selected === "soul" && (
        <p className="font-mono w-full  md:w-11/12 lg:text-lg md:text-base  m md:ml-10 lg:w-1/2 lg:ml-96 xl:w-1/2 xl:ml-96 text-gray-400 text-xs mt-6">
          Since October of my Sophomore year, I have been working on Soul. Soul
          is a digital identity authenticator built on Solana, and we are a
          small startup based in Los Angeles. At Soul, I have been deeply
          involved in creating innovative blockchain-based identity solutions.
          Our team has won over $60,000 in hackathons for our work with
          Soulstamps and AquaID, which combined into Soul. I am a Software
          Engineer on the team and am currently developing a RESTful backend
          system for controlling autonomous lead finding and direct email
          marketing.
        </p>
      )}

      {selected === "honeywell" && (
        <p className="font-mono md:text-base w-full lg:text-lg  md:w-11/12 md:ml-10 lg:w-1/2 lg:ml-40 xl:w-1/2 xl:ml-96 text-gray-400 text-sm mt-6">
          Starting this May, I have been a Software Engineer intern at Honeywell
          in their Atlanta offices. I am working under Honeywell Connected
          Enterprises (HCE) with Logistics and Warehouse team, developing
          applications and APIs for the Operational Intelligence team.
        </p>
      )}

      {selected === "mlb" && (
        <p className="font-mono w-full md:text-base lg:text-lg md:w-11/12 md:ml-10 lg:w-1/2 lg:ml-40 xl:w-1/2 xl:ml-96 text-gray-400 text-sm mt-6">
          Last Summer I was a Creative Studio intern at Major League Baseball.
          During my time at MLB, I put my coding skills to use by creating a web
          application that made the process of reviewing live game tweets from
          MLB accounts a breeze. With a combination of React.js for frontend
          development, Python for backend tasks, and deftly written calls to
          RESTful and Twitter APIs, I managed to boost our tracking efficiency
          significantly by over 80%. My role also saw me keeping a close eye on
          the performance of a massive number of social media posts - over 3,500
          to be exact - spanning Instagram, Facebook, and Twitter for both
          domestic and international MLB accounts.
        </p>
      )}
    </div>
  );
}
