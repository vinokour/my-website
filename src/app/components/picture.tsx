export default function Picture() {
  return (
    <div className="flex lg:items-center flex-col px-4 gap-5">
      <div className="flex flex-col">
        <p className="flex text-lg font-mono text-blue-400 md:text-xl lg:text-2xl">
          Hi, my name is{" "}
        </p>
        <p className="text-5xl font-mono text-white md:text-7xl lg:text-7xl mt-2">
          Nicholas Vinokour,
        </p>
        <p className="text-5xl font-mono text-blue-200 md:text-7xl lg:text-7xl">
          and I build things for fun.
        </p>
      </div>
      <div className="flex flex-col items-center w-full">
        <p className="flex py-5 lg:w-2/3 w-full font-mono text-sm md:text-base lg:text-lg items-center text-gray-400 mb-5 leading-normal">
          I am currently a junior at the University of Michigan,
          majoring in Computer Science. New
          technologies have always intrigued me, not just for their innovative
          aspects but more importantly, for their potential to reshape our
          world. I keep a keen eye on emerging trends and advancements, and I am
          always eager to learn more about the latest developments in the tech
          industry. Being a sports enthusiast, I am particularly interested in
          sports analytics. The way data-driven insights are changing the game
          fascinates me, and I am always up for discussing the latest trends and
          innovations in this field. And yes, nothing beats the thrill of
          watching Ohio State lose to Michigan in any aspect of life. 
        </p>
        <p className="flex py-5 lg:w-2/3 w-full font-mono text-sm md:text-base lg:text-lg items-center text-gray-400 mb-5 leading-normal">
        Currently, I am actively seeking SWE/AI Summer internships for 2024, eager to
          apply my knowledge and skills in a real-world setting. Outside of
          academics and career pursuits, I am dedicated to developing products
          for Soul, a digital identity verification platform. Working on this
          project has allowed me to apply my technical skills in a practical
          setting, enhancing my understanding of blockchain technology and its
          applications in the realm of identity verification. I welcome any
          opportunity to connect and discuss my interests or potential
          collaborations. Feel free to reach out to me!
          </p>
      </div>
    </div>
  );
}
