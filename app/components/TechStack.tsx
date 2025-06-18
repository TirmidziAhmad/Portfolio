"use client";
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
import { motion } from "framer-motion";

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

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

function TechStack() {
  return (
    <div className="py-10 w-full overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
            Tech Stack
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            Technologies i have worked with
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
        >
          {techstackData.map((tech, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ scale: 1.05 }}
              className={`flex flex-col items-center p-6 rounded-lg bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-all duration-300 ${tech.hoverColor}`}
            >
              <div className="text-4xl mb-3">{tech.icon}</div>
              <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200">
                {tech.name}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default TechStack;
