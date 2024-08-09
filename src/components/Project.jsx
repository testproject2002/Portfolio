import { CiLink } from "react-icons/ci";

function Project({ title, description, technologies, link, github }) {
  return (
    <div className="hover:bg-zinc-100 text-custom-navyblue hover:dark:bg-slate-500 transition-all duration-300 p-6 md:rounded-xl">
      <div className="flex gap-2 overflow-x-scroll py-2 ">
        {/* =========== TECHNOLOGIES USED =========== */}
        {technologies.split(",").map((tech, index) => (
          <span
            className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-custom-blue text-custom-navyblue dark:bg-custom-navyblue dark:text-white"
            key={index}
          >
            {tech}
          </span>
        ))}
      </div>
      {/* =========== PROJECT TITLE =========== */}
      <h3 className="font-bold text-lg text-custom-navyblue dark:text-zinc-300 mt-4">
        {title}
      </h3>
      {/* =========== PROJECT DESCRIPTION =========== */}
      <p className="leading-7 text-zinc-500 dark:text-zinc-300 font-light text-base mt-4">
        {description}
      </p>

      <div className="flex gap-6 text-zinc-600 dark:text-zinc-300 font-medium">
        {/* =========== PROJECT LINK =========== */}
        <a href={link} className="flex gap-2 mt-4 hover:text-red-800 hover:dark:text-custom-navyblue cursor-pointer transition-all duration-300">
          <CiLink className="text-2xl self-center" />
          <span className="text-xs self-center text-custom-navyblue dark:text-white">
            View Project
          </span>
        </a>
        {/* =========== PROJECT GITHUB =========== */}
        <a href={github} className="flex gap-2 mt-4 hover:text-red-800 hover:dark:text-custom-navyblue cursor-pointer transition-all duration-300">
          <CiLink className="text-2xl self-center" />
          <span className="text-xs self-center text-custom-navyblue dark:text-white">
            View Github
          </span>
        </a>
      </div>
    </div>
  );
}

export default Project;
