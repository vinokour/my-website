export default function Navbar() {
  return (
    <div className="flex flex-row text-xl  bg-white w-full py-20 justify-between px-10 text-black">
      <p>Nicholas VInokour</p>
      <div className="flex flex-row gap-20 text-black mr-20 px-10  justify-between">
        <p>About</p>
        <p>Professional Experience</p>
        <p>Projects</p>
        <div className="rounded-full bg-blue-400 px-10 ">
          Resume
          </div>
      </div>
    </div>
  );
}
