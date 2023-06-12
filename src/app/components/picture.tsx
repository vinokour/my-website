export default function Picture() {
  return (
    <div className="flex flex-col items-start px-10 gap-20 rounded-full e text-3xl">
      <div className="flex flex-col">
        <p className="flex text-lg font-mono py-3  text-blue-400"> Hi, I'm </p>
        <p className="text-7xl font-mono text-white">Nicholas Vinokour,</p>
        <p className="text-7xl font-mono text-blue-200">
          and I build things for fun.
        </p>
      </div>

      <p className="flex text-base  text-gray-400 py-5 leading-loose">
        {" "}
        I am a junior at the University of Michigan majoring in Computer Science
        and minoring in Business. I'm passoniate about new technologies and how
        they will impact and chnage the world. I am interested in Sports
        analytics, entertainmet industry, artificial intelligence, and of course
        watching Ohio State lose to Michigan in about anything. I am currently
        seeking 2024 SWE/Ai Summer internships. On the side from school, I am
        focused on devolping products for a digital identity verification
        platform, Soul
      </p>
    </div>
  );
}
