"use client";

import Introduction from "./components/Introduction";
import TechStack from "./components/TechStack";
import Project from "./components/Project";
import { motion, useAnimation } from "framer-motion";
import { ReactNode } from "react";

const textVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};
interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  stagger?: number;
}

function AnimatedSection({ children, className }: AnimatedSectionProps) {
  const controls = useAnimation();

  return (
    <motion.div
      className={className}
      initial="hidden"
      animate={controls}
      whileInView="visible"
      onViewportEnter={() => controls.start("visible")}
      onViewportLeave={() => controls.start("hidden")}
      viewport={{ margin: "-100px" }}
      variants={{
        visible: { transition: { staggerChildren: 0.1 } },
        hidden: { transition: { staggerChildren: 0.05 } },
      }}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <div className="flex flex-col justify-center items-center h-screen ">
        <motion.div
          className="text-center"
          variants={{
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          <AnimatedSection>
            <motion.h1
              variants={textVariant}
              className="text-6xl md:text-[180px] font-semibold"
            >
              TIRMIDZI
            </motion.h1>
          </AnimatedSection>
          <AnimatedSection>
            <motion.p
              variants={textVariant}
              className="text-slate-400 text-xs md:text-xl"
            >
              FULLSTACK DEV | FRONT END DEV
            </motion.p>
          </AnimatedSection>
          <AnimatedSection>
            <motion.h1
              variants={textVariant}
              className="text-6xl md:text-[180px] font-semibold"
            >
              AHMAD
            </motion.h1>
          </AnimatedSection>
        </motion.div>
      </div>
      {/* introduction */}
      <section className="h-[50vh] flex flex-col justify-center items-center  gap-4 font-normal">
        <Introduction />
      </section>
      {/* tech stack */}
      <section className="h-[90vh] flex flex-col items-center justify-center gap-2">
        <TechStack />
      </section>
      {/* personal project */}
      <section className="h-[90vh] flex flex-col items-center justify-center">
        <Project />
      </section>
    </div>
  );
}
