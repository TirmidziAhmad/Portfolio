import {
  SiExpress,
  SiJavascript,
  SiTypescript,
  SiSwagger,
  SiPostman,
} from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { BiLogoPostgresql } from "react-icons/bi";
import { GrMysql } from "react-icons/gr";

const techstackData = [
  { name: "React", icon: <FaReact />, hoverColor: "hover:text-blue-500" },
  {
    name: "Nextjs",
    icon: <RiNextjsFill />,
    hoverColor: "hover:text-black-400",
  },
  {
    name: "Javascript",
    icon: <SiJavascript />,
    hoverColor: "hover:text-yellow-500",
  },
  {
    name: "Typescript",
    icon: <SiTypescript />,
    hoverColor: "hover:text-blue-500",
  },
  { name: "Express", icon: <SiExpress />, hoverColor: "hover:text-black-400" },
  { name: "Swagger", icon: <SiSwagger />, hoverColor: "hover:text-green-400" },
  { name: "Postman", icon: <SiPostman />, hoverColor: "hover:text-orange-400" },
  {
    name: "Postgresql",
    icon: <BiLogoPostgresql />,
    hoverColor: "hover:text-blue-400",
  },
  { name: "Mysql", icon: <GrMysql />, hoverColor: "hover:text-blue-400" },
];

function TechStack() {
  return (
    <div className=" py-10 overflow-hidden">
      <h2 className="text-lg md:text-6xl text-center mb-10">
        Tech I Have Experience With
      </h2>

      {/* First row - scrolling left */}
      <div className="relative w-full overflow-hidden mb-10">
        <div className="flex flex-nowrap">
          <div className="flex w-max items-center gap-10 animate-marquee-left whitespace-nowrap">
            {techstackData.map((tech, index) => (
              <div
                key={`first-left-${index}`}
                className="min-w-[150px] flex items-center justify-center text-slate-500 text-md md:text-4xl"
              >
                <span className={`flex items-center gap-2 ${tech.hoverColor}`}>
                  {tech.name} {tech.icon}
                </span>
              </div>
            ))}
          </div>
          <div className="flex w-max items-center gap-10 animate-marquee-left whitespace-nowrap">
            {techstackData.map((tech, index) => (
              <div
                key={`second-left-${index}`}
                className="min-w-[150px] flex items-center justify-center text-slate-500 text-md md:text-4xl"
              >
                <span className={`flex items-center gap-2 ${tech.hoverColor}`}>
                  {tech.name} {tech.icon}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Second row - scrolling right */}
      <div className="relative w-full overflow-hidden">
        <div className="flex flex-nowrap">
          <div className="flex w-max items-center gap-10 animate-marquee-right whitespace-nowrap">
            {techstackData.map((tech, index) => (
              <div
                key={`first-right-${index}`}
                className="min-w-[150px] flex items-center justify-center text-slate-500 text-md md:text-4xl"
              >
                <span className={`flex items-center gap-2 ${tech.hoverColor}`}>
                  {tech.name} {tech.icon}
                </span>
              </div>
            ))}
          </div>
          <div className="flex w-max items-center gap-10 animate-marquee-right whitespace-nowrap">
            {techstackData.map((tech, index) => (
              <div
                key={`second-right-${index}`}
                className="min-w-[150px] flex items-center justify-center text-slate-500 text-md md:text-4xl"
              >
                <span className={`flex items-center gap-2 ${tech.hoverColor}`}>
                  {tech.name} {tech.icon}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        .animate-marquee-left {
          animation: marquee-left 30s linear infinite;
        }

        .animate-marquee-right {
          animation: marquee-right 30s linear infinite;
        }

        @keyframes marquee-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        @keyframes marquee-right {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}

export default TechStack;
