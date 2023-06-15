export default function aboutbar() {
  return (
    <div className="flex flex-row text-xl font-mono items-center   ml-20 justify-between  py-3 gap-20 bg-blue-400">
      <p className="flex flex-col gap-5">
        {" "}
        From
        <p className="  text-blue-800">Los Angeles</p>
      </p>
      <p className="flex flex-col gap-5">
        Based in
        <p className="  text-yellow-300">Ann Arbor</p>
      </p>
      <p className="flex flex-col gap-5">
        {" "}
        Watched over
        <p className=" text-blue-800">300+ films</p>
      </p>
      <p className="flex flex-col gap-5">
        Love to
        <p className=" text-yellow-300">Code & Learn </p>
      </p>
      <p className="flex flex-col gap-5">
        Working on
        <p className=" text-blue-800 ">Project KEVIN</p>
      </p>
    </div>
  );
}
