export default function Experience() {
  return (
    <div className="flex flex-col gap-y-10 h-full font-mono text-6xl text-blue-400 justify-between  text-center items-left bg-slate-800">
      Professional Experience
      <p className="flex flex-row justify-center items-center gap-x-10 gap-20">
        <a href="https://soulstamps.com/">
        <img className="object-contain px-10 h-20" src="soul4.png"></img>
        </a>
        <a href="https://www.honeywell.com/us/en">
        <img src="Honeywell.png" className=" px-10 object-contain h-20" />
        </a>
        <a href="https://www.mlb.com/">
        <img src="mlb.png" className=" px-10 object-contain h-20" />
        </a>

      </p>
    </div>
  );
}
