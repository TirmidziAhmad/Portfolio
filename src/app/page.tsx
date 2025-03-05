"use client";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiExpress, SiJavascript, SiTypescript, SiSwagger, SiPostman } from "react-icons/si";
import Image from "next/image";
import me from "../../public/me.png";
import jakarta from "../../public/jakarta.jpg";
import fullstack from "../../public/fullstack.webp";
import coding from "../../public/coding.jpg";
import functionality from "../../public/functionality.jpg";
import { BiLogoPostgresql } from "react-icons/bi";
import { GrMysql } from "react-icons/gr";
export default function Home() {
  return (
    <div>
      <section id="hero" className="flex flex-col justify-center items-center h-[100vh]">
        <h1 className="text-6xl md:text-[180px] font-semibold ">TIRMIDZI</h1>
        <p className="text-slate-400 text-lg md:text-xl">FULLSTACK DEV | FRONT END DEV</p>
        <h1 className="text-6xl md:text-[180px] font-semibold">AHMAD</h1>
      </section>

      <section id="about" className="flex flex-col justify-center items-center h-[50vh] gap-4 font-normal">
        <h2 className="text-md md:text-6xl">
          <span className="flex gap-2">
            Tirmidzi Ahmad <Image src={me} alt="me" width={60} height={60} /> is Indonesian <Image src={jakarta} alt="me" width={90} height={90} className="rounded-md" objectFit="cover" />
          </span>
        </h2>
        <h2 className="text-md md:text-6xl flex gap-2">
          Experienced web developer <Image src={fullstack} alt="me" width={90} height={90} className="rounded-md" objectFit="cover" />,
        </h2>
        <h2 className="text-lg md:text-6xl text-slate-500 flex gap-2">
          Who turns <Image src={coding} alt="me" width={90} height={90} className="rounded-md" objectFit="cover" /> ideas
        </h2>
        <h2 className="text-lg md:text-6xl text-slate-500 flex gap-2">
          into <Image src={functionality} alt="me" width={90} height={90} className="rounded-md" objectFit="cover" /> functionality.
        </h2>
      </section>
      <section id="tech-stack" className="h-[90vh] flex flex-col items-center justify-center gap-2">
        <h2 className="text-lg md:text-6xl">Tech that i have experience with</h2>
        <p className="flex flex-col md:text-6xl">
          <div className="flex  items-center justify-center  gap-2  text-slate-500">
            <span className="hover:text-blue-500 flex">
              React <FaReact />
            </span>
            ,
            <span className="hover:text-black flex gap-3">
              Next <RiNextjsFill />
            </span>
            ,
            <span className="hover:text-white flex gap-3">
              Express <SiExpress />
            </span>
          </div>
          <div className="flex items-center justify-center gap-2 text-slate-500">
            <span className="flex hover:text-blue-400 gap-3">
              postgresql <BiLogoPostgresql />
            </span>
            ,
            <span className="flex hover:text-blue-400 gap-3">
              mysql <GrMysql />
            </span>
            ,
            <span className="flex hover:text-yellow-300 gap-3">
              javascipt <SiJavascript />,
            </span>
          </div>
          <div className="flex items-center justify-center gap-2 text-slate-500">
            <span className="flex hover:text-blue-400 gap-3">
              typescript <SiTypescript />
            </span>
            ,
            <span className="flex hover:text-green-400 gap-3">
              swagger <SiSwagger />
            </span>
            ,
            <span className="flex hover:text-orange-400 gap-3">
              postman <SiPostman />
            </span>
          </div>
        </p>
      </section>
      <section id="my-work" className="h-[90vh] flex flex-col items-center justify-center">
        <h2 className="text-lg md:text-6xl mb-3">Personal Project</h2>
        <div className="flex gap-5">
          <div className="bg-[#1e201e] rounded-lg border border-[#85858526] p-5 ">
            <h4 className="text-xl capitalize">Rice disease detection</h4>
            <p>app to detect rice disease expert system, built with next js and postgresql as database</p>
            <button className="rounded-lg bg-transparent border border-[#85858526] p-2">
              <a href="">visit</a>
            </button>
          </div>
          <div className="bg-[#1e201e] rounded-lg border border-[#85858526] p-5">
            <h4 className="text-xl capitalize">chill-Netflix clone</h4>
            <p>fullstack netflix clone app built with react and express using zustand for front end state management</p>
            <button className="rounded-lg bg-transparent border border-[#85858526] p-2">
              <a href="https://chill-netflix-clone.vercel.app/">visit</a>
            </button>
          </div>
          <div className="bg-[#1e201e] rounded-lg border border-[#85858526] p-5 ">
            <h4 className="text-xl ">Si Paling persegi</h4>
            <p>An app to determine area and perimeter of a square bulit bith HTML,CSS, and javascirpt</p>
            <button className="rounded-lg bg-transparent border border-[#85858526] p-2">
              <a href="https://tirmidziahmad.github.io/SiPalingPersegi/">visit</a>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
