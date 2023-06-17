export default function Projects() {
  return (
    <div className="flex flex-col lg:items-center w-full gap-5 lg:mt-20 h-full py-6 px-4 font-mono text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-blue-400 mt-10 bg-slate-800">
      <h1 className="text-start text-xl md:text-3xl lg:text-7xl">Projects</h1>
      <div className="text-base flex flex-col lg:items-center md:text-lg font-mono text-blue-200 lg:text-3xl">
        Kevin: The AI Marketing Tool
        <p className="text-sm text-gray-400 md:text-base lg:w-2/3 mt-4 lg:text-center">
        In a team of three, we developed an AI-driven system capable of understanding user-inputted business goals and product information. This intelligent tool delves deep into the world of market research, identifies the right points of contact, and autonomously sends out customized marketing emails. We designed the entire process to be both efficient and user-friendly, enabling businesses to concentrate on their main operations while the AI system handles the marketing aspects.

During the development of this project, I utilized my skills in TypeScript to write web scraping scripts, and we created four distinct API endpoints. The core of this system is the GPT-3.5 Turbo model from the OpenAI API. By integrating this model into the system, users automated marketing efforts are backed by sophisticated, intelligent, and flexible AI technology.

This integration not only enhances the accuracy of our marketing strategies but also allows the system to adapt to the ever-changing market trends and business goals.
        </p>
      </div>
    </div>
  );
}
