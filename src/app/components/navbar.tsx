export default function Navbar() {
  return (
    <div className="flex flex-row text-lg bg-gradient-to-b from-blue-400  w-full py-20 justify-between px-10 text-black">
      <p>Nicholas VInokour</p>
      <div className="flex flex-row gap-20 text-black mr-20 px-10  justify-between">
        <p>About</p>
        <p>Professional Experience</p>
        <p>Projects</p>
        <button className=" rounded-full bg-blue-400 px-5 ">Resume</button>
      </div>
    </div>
  );
}
