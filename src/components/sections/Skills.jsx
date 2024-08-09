import { BiLogoNetlify, BiLogoPostgresql, BiLogoTypescript } from "react-icons/bi";
import { CgVercel } from "react-icons/cg";
import { DiGithubAlt, DiMongodb } from "react-icons/di";
import { FaDocker, FaBootstrap } from "react-icons/fa";
import { FaAws, FaCss3Alt, FaDigitalOcean, FaGitAlt, FaGitlab,FaBitbucket, FaHtml5, FaNodeJs, FaPython, FaReact, FaVuejs } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";
import { IoLogoFirebase } from "react-icons/io5";
import { SiAntdesign, SiExpress, SiFlask, SiJest, SiNuxtdotjs, SiPassport, SiPostman, SiPythonanywhere, SiSequelize, SiTailwindcss, SiTensorflow, SiDjango } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { TbBrandRedux } from "react-icons/tb";
import { FcLinux } from "react-icons/fc"

function Skills() {
  return (
    <section id="skills" className="mx-4 lg:mx-20">
      {/* =========== SKILLS TITLE =========== */}
      <h4 className="text-4xl font-bold text-center mt-20 text-custom-navyblue dark:text-white">
        Technologies I Use.
      </h4>
      {/* =========== LIST OF SKILLS =========== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 mt-8">
				<span className="inline-flex items-center justify-between gap-x-2 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-custom-blue text-custom-green dark:bg-custom-navyblue dark:text-white">
          <FaHtml5 className="text-2xl" /> HTML
        </span>

				<span className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-custom-blue text-custom-green dark:bg-custom-navyblue dark:text-white">
          <FaCss3Alt className="text-2xl" /> CSS
        </span>
				<span className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-custom-blue text-custom-green dark:bg-custom-navyblue dark:text-white">
          <IoLogoJavascript className="text-2xl" /> JavaScript

        </span>
				{/* <span className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-custom-blue text-custom-green dark:bg-custom-navyblue dark:text-white">
          <BiLogoTypescript className="text-2xl" /> TypeScript
        </span> */}
				<span className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-custom-blue text-custom-green dark:bg-custom-navyblue dark:text-white">
          <FaPython className="text-2xl" /> Python
        </span>
        <span className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-custom-blue text-custom-green dark:bg-custom-navyblue dark:text-white">
          <FaReact className="text-2xl" /> React
        </span>
				<span className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-custom-blue text-custom-green dark:bg-custom-navyblue dark:text-white">
          <FaNodeJs className="text-2xl" /> Node.js
        </span>
				<span className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-custom-blue text-custom-green dark:bg-custom-navyblue dark:text-white">
          <SiExpress className="text-2xl" /> Express.js
        </span>
				<span className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-custom-blue text-custom-green dark:bg-custom-navyblue dark:text-white">
          <SiDjango className="text-2xl" /> Django
        </span>
				<span className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-custom-blue text-custom-green dark:bg-custom-navyblue dark:text-white">
          <DiMongodb className="text-2xl" /> MongoDB
        </span>
				<span className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-custom-blue text-custom-green dark:bg-custom-navyblue dark:text-white">
          <BiLogoPostgresql className="text-2xl" /> PostgreSQL
        </span>
				<span className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-custom-blue text-custom-green dark:bg-custom-navyblue dark:text-white">
          <SiSequelize className="text-2xl" /> Sequelize
        </span>
				<span className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-custom-blue text-custom-green dark:bg-custom-navyblue dark:text-white">
          <SiTailwindcss className="text-2xl" /> Tailwind CSS
        </span>
				<span className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-custom-blue text-custom-green dark:bg-custom-navyblue dark:text-white">
          <FaBootstrap className="text-2xl" /> Bootstrap
        </span>
				<span className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-custom-blue text-custom-green dark:bg-custom-navyblue dark:text-white">
          <SiJest className="text-2xl" /> Jest
        </span>
				<span className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-custom-blue text-custom-green dark:bg-custom-navyblue dark:text-white">
          <TbBrandRedux className="text-2xl" /> Reduc ToolKit
        </span>
				<span className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-custom-blue text-custom-green dark:bg-custom-navyblue dark:text-white">
          <FaGitAlt className="text-2xl" /> Git
        </span>
				<span className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-custom-blue text-custom-green dark:bg-custom-navyblue dark:text-white">
          <DiGithubAlt className="text-2xl" /> Github
        </span>
				<span className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-custom-blue text-custom-green dark:bg-custom-navyblue dark:text-white">
          <FaBitbucket className="text-2xl" /> Bitbucket
        </span>
				<span className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-custom-blue text-custom-green dark:bg-custom-navyblue dark:text-white">
          <IoLogoFirebase className="text-2xl" /> Firebase
        </span>
				<span className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-custom-blue text-custom-green dark:bg-custom-navyblue dark:text-white">
          <SiPostman className="text-2xl" /> Postman
        </span>
				<span className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-custom-blue text-custom-green dark:bg-custom-navyblue dark:text-white">
          <FaAws className="text-2xl" /> AWS EC2
        </span>
				<span className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-custom-blue text-custom-green dark:bg-custom-navyblue dark:text-white">
          <FcLinux className="text-2xl" /> Linux
        </span>

				{/* <span className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-custom-blue text-custom-green dark:bg-custom-navyblue dark:text-white">
          <FaVuejs className="text-2xl" /> VueJS
        </span> */}
				{/* <span className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-custom-blue text-custom-green dark:bg-custom-navyblue dark:text-white">
          <SiNuxtdotjs className="text-2xl" /> NuxtJS
        </span> */}
				{/* <span className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-custom-blue text-custom-green dark:bg-custom-navyblue dark:text-white">
          <SiTensorflow className="text-2xl" /> Tensorflow
        </span> */}
				{/* <span className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-custom-blue text-custom-green dark:bg-custom-navyblue dark:text-white">
          <SiAntdesign className="text-2xl" /> Ant Design Vue
        </span> */}
				{/* <span className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-custom-blue text-custom-green dark:bg-custom-navyblue dark:text-white">
          <FaGitlab className="text-2xl" /> Gitlab
        </span> */}
				{/* <span className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-custom-blue text-custom-green dark:bg-custom-navyblue dark:text-white">
          <BiLogoNetlify className="text-2xl" /> Netlify
        </span> */}
				{/* <span className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-custom-blue text-custom-green dark:bg-custom-navyblue dark:text-white">
          <CgVercel className="text-2xl" /> Vercel
        </span> */}
				{/* <span className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-custom-blue text-custom-green dark:bg-custom-navyblue dark:text-white">
          <FaDigitalOcean className="text-2xl" /> Digital Ocean
        </span> */}
				{/* <span className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-custom-blue text-custom-green dark:bg-custom-navyblue dark:text-white">
          <SiPythonanywhere className="text-2xl" /> PythonAnywhere
        </span> */}
				{/* <span className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-custom-blue text-custom-green dark:bg-custom-navyblue dark:text-white">
          <SiPassport className="text-2xl" /> PassportJS
        </span> */}
				{/* <span className="inline-flex items-center justify-between gap-x-1.5 py-4 px-3 hover:-translate-y-1.5 transition-translate duration-500 rounded-xl font-medium bg-custom-blue text-custom-green dark:bg-custom-navyblue dark:text-white">
          <FaDocker className="text-2xl" /> Docker
        </span> */}
      </div>
    </section>
  );
}

export default Skills;
