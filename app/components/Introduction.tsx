import Image from "next/image";
import me from "../../public/me.png";
import jakarta from "../../public/jakarta.jpg";
import fullstack from "../../public/fullstack.webp";
import coding from "../../public/coding.jpg";
import functionality from "../../public/functionality.jpg";

function Introduction() {
  return (
    <div className="text-center space-y-4">
      <h2 className="text-base md:text-4xl lg:text-6xl">
        <span className="flex flex-wrap gap-2 items-center justify-center">
          Tirmidzi Ahmad{" "}
          <Image
            src={me}
            alt="me"
            width={60}
            height={60}
            className="hidden md:inline w-12 md:w-16 rounded-full object-cover"
          />
          is Indonesian
          <Image
            src={jakarta}
            alt="jakarta"
            width={90}
            height={90}
            className="hidden md:inline w-16 md:w-24 rounded-md object-cover"
          />
        </span>
      </h2>

      <h2 className="text-base md:text-4xl lg:text-6xl">
        <span className="flex flex-wrap gap-2 items-center justify-center">
          Experienced web developer
          <Image
            src={fullstack}
            alt="fullstack"
            width={90}
            height={90}
            className="hidden md:inline w-16 md:w-24 rounded-md object-cover"
          />
          ,
        </span>
      </h2>

      <h2 className="text-base md:text-4xl lg:text-6xl text-slate-500">
        <span className="flex flex-wrap gap-2 items-center justify-center">
          Who turns{" "}
          <Image
            src={coding}
            alt="coding"
            width={90}
            height={90}
            className="hidden md:inline w-16 md:w-24 rounded-md object-cover"
          />
          ideas
        </span>
      </h2>

      <h2 className="text-base md:text-4xl lg:text-6xl text-slate-500">
        <span className="flex flex-wrap gap-2 items-center justify-center">
          into{" "}
          <Image
            src={functionality}
            alt="functionality"
            width={90}
            height={90}
            className="hidden md:inline w-16 md:w-24 rounded-md object-cover"
          />
          functionality.
        </span>
      </h2>
    </div>
  );
}

export default Introduction;
