import Introduction from "@/components/Introduction";
import TechStack from "@/components/TechStack";
import Project from "@/components/Project";
export default function Home() {
  return (
    <>
      {/* hero */}
      <section className="flex flex-col justify-center items-center h-[100vh]">
        <h1 className="text-6xl md:text-[180px] font-semibold ">TIRMIDZI</h1>
        <p className="text-slate-400 text-lg md:text-xl">
          FULLSTACK DEV | FRONT END DEV
        </p>
        <h1 className="text-6xl md:text-[180px] font-semibold">AHMAD</h1>
      </section>
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
    </>
  );
}
