"use client";
import Image from "next/image";
import me from "../../public/me.png";
import jakarta from "../../public/jakarta.jpg";
import fullstack from "../../public/fullstack.webp";
import coding from "../../public/coding.jpg";
import functionality from "../../public/functionality.jpg";
import { motion, useAnimation } from "framer-motion";
import { ReactNode } from "react";

// Animation variants
const textVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const imageVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};
interface AnimatedSectionProps {
  children: ReactNode;
}

function AnimatedSection({ children }: AnimatedSectionProps) {
  const controls = useAnimation();

  return (
    <motion.div
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

function Introduction() {
  return (
    <div className="space-y-4">
      <AnimatedSection>
        <h2 className="text-base md:text-4xl lg:text-6xl">
          <span className="flex flex-wrap gap-2 items-center justify-center">
            <motion.span variants={textVariant}>Tirmidzi Ahmad</motion.span>
            <motion.span variants={imageVariant}>
              <Image
                src={me}
                alt="me"
                width={60}
                height={60}
                className="hidden md:inline w-12 md:w-16 rounded-full object-cover"
              />
            </motion.span>
            <motion.span variants={textVariant}>is Indonesian</motion.span>
            <motion.span variants={imageVariant}>
              <Image
                src={jakarta}
                alt="jakarta"
                width={90}
                height={90}
                className="hidden md:inline w-16 md:w-24 rounded-md object-cover"
              />
            </motion.span>
          </span>
        </h2>
      </AnimatedSection>

      <AnimatedSection>
        <h2 className="text-base md:text-4xl lg:text-6xl">
          <span className="flex flex-wrap ">
            <motion.span variants={textVariant}>
              Experienced web developer
            </motion.span>
            <motion.span variants={imageVariant}>
              <Image
                src={fullstack}
                alt="fullstack"
                width={90}
                height={90}
                className="hidden md:inline w-16 md:w-24 rounded-md object-cover"
              />
            </motion.span>
            <motion.span variants={textVariant}>,</motion.span>
          </span>
        </h2>
      </AnimatedSection>

      <AnimatedSection>
        <h2 className="text-base md:text-4xl lg:text-6xl text-slate-500">
          <span className="flex flex-wrap gap-2 items-center justify-center">
            <motion.span variants={textVariant}>Who turns</motion.span>
            <motion.span variants={imageVariant}>
              <Image
                src={coding}
                alt="coding"
                width={90}
                height={90}
                className="hidden md:inline w-16 md:w-24 rounded-md object-cover"
              />
            </motion.span>
            <motion.span variants={textVariant}>ideas</motion.span>
          </span>
        </h2>
      </AnimatedSection>

      <AnimatedSection>
        <h2 className="text-base md:text-4xl lg:text-6xl text-slate-500">
          <span className="flex flex-wrap gap-2 items-center justify-center">
            <motion.span variants={textVariant}>into</motion.span>
            <motion.span variants={imageVariant}>
              <Image
                src={functionality}
                alt="functionality"
                width={90}
                height={90}
                className="hidden md:inline w-16 md:w-24 rounded-md object-cover"
              />
            </motion.span>
            <motion.span variants={textVariant}>functionality.</motion.span>
          </span>
        </h2>
      </AnimatedSection>
    </div>
  );
}

export default Introduction;
