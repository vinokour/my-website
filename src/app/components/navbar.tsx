export default function Navbar() {
  return (
    <div className="flex flex-row text-base  bg-slate-800  w-full py-10  font-mono justify-between   text-gray-300">
      <p className="ml-10">Nicholas Vinokour</p>
      <div className="flex flex-row gap-20 text-gray-300 mr-20 px-10  justify-between">
        <p className="font-mono">
          <span className="text-blue-400 px-3">01.</span>About
        </p>
        <p>
          <span className="text-blue-400 px-3">02.</span>Professional Experience
        </p>
        <p>
          <span className="text-blue-400 px-3">03.</span>Projects
        </p>
        <button className="animate-pulse rounded-none bg-slate-800 border-blue-400 border-solid border-2 px-5 ">
          Resume
        </button>
      </div>
    </div>
  );
}
