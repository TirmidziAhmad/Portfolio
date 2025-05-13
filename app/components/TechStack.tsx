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
    <>
      <h2 className="text-lg md:text-6xl text-center">
        Tech I Have Experience With
      </h2>
      <div className="flex flex-wrap gap-10 justify-center items-center mt-10">
        {techstackData.map((item, index) => (
          <div key={index} className="flex justify-center items-center">
            <h1
              className={`text-md md:text-4xl flex ${item.hoverColor} gap-2 justify-center text-slate-500`}
            >
              {item.name} {item.icon}
            </h1>
          </div>
        ))}
      </div>
    </>
  );
}

export default TechStack;
