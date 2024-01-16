import gsap from "gsap";
import React from "react";
import Image from "next/image";
import tecido from "../image/pele.jpeg";

export default function Tecido() {


  return (
    <>
      <div>
        <Image
          src={tecido}
          alt="seta"
          className="mix-blend-multiply"
          
        />
      </div>
    </>
  );
}
