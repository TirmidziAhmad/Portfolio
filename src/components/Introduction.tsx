import React from "react";
import Image from "next/image";
import me from "../../public/me.png";
import jakarta from "../../public/jakarta.jpg";
import fullstack from "../../public/fullstack.webp";
import coding from "../../public/coding.jpg";
import functionality from "../../public/functionality.jpg";

function Introduction() {
  return (
    <>
      <h2 className="text-md md:text-6xl">
        <span className="flex gap-2">
          Tirmidzi Ahmad <Image src={me} alt="me" width={60} height={60} /> is
          Indonesian{" "}
          <Image
            src={jakarta}
            alt="me"
            width={90}
            height={90}
            className="rounded-md"
            objectFit="cover"
          />
        </span>
      </h2>
      <h2 className="text-md md:text-6xl flex gap-2">
        Experienced web developer{" "}
        <Image
          src={fullstack}
          alt="me"
          width={90}
          height={90}
          className="rounded-md"
          objectFit="cover"
        />
        ,
      </h2>
      <h2 className="text-lg md:text-6xl text-slate-500 flex gap-2">
        Who turns{" "}
        <Image
          src={coding}
          alt="me"
          width={90}
          height={90}
          className="rounded-md"
          objectFit="cover"
        />{" "}
        ideas
      </h2>
      <h2 className="text-lg md:text-6xl text-slate-500 flex gap-2">
        into{" "}
        <Image
          src={functionality}
          alt="me"
          width={90}
          height={90}
          className="rounded-md"
          objectFit="cover"
        />{" "}
        functionality.
      </h2>
    </>
  );
}

export default Introduction;
