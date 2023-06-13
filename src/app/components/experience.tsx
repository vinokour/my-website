export default function Experience() {
  return (
    <div className="flex flex-col gap-y-6 h-full font-mono text-3xl md:text-4xl lg:text-5xl text-blue-400 mt-10 text-center items-center bg-slate-800 px-4 md:px-0">
      <h1 className="text-4xl md:text-5xl lg:text-6xl">Professional Experience</h1>
      <div className="flex flex-wrap justify-center items-center gap-x-6 mt-6">
        <a href="https://soulstamps.com/">
          <img className="object-contain h-12 md:h-16" src="soul4.png" alt="Soul Stamps" />
        </a>
        <a href="https://www.honeywell.com/us/en">
          <img className="object-contain h-12 md:h-16" src="Honeywell.png" alt="Honeywell" />
        </a>
        <a href="https://www.mlb.com/">
          <img className="object-contain h-12 md:h-16" src="mlb.png" alt="MLB" />
        </a>
      </div>
    </div>
  );
}
