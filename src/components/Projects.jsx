import rc001 from "../assets/projects/rock-clicker/rc001.png";

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-12 px-6 sm:px-8 md:px-12 flex text-slate-950"
    >
      <div className="">
        <h2 className="text-4xl font-bold py-1">
          Proyectos<span className="text-indigo-600 px-1">.</span>
        </h2>
        <div
          className="w-full border-0 border-b border-indigo-600"
          aria-hidden="true"
        ></div>

        {/* Proyecto */}
        <div className="pt-8">
          <div className="w-full cursor-pointer">
            <p className="text-xl text-indigo-600 font-semibold py-2">
              Rock Clicker
            </p>
            <img src={rc001} alt="rc-home" className="rounded-lg shadow-lg" />
          </div>
        </div>
      </div>
    </section>
  );
}
