import Image from "next/image";
import fisico from "../image/fisico.png";
import React from "react";
import gsap from "gsap";
import { motion, useAnimation } from "framer-motion";
import { useAnimationContext } from "../contexts/AnimationContext";

export default function Fisico() {
  const { controls, controlsFisico, startAnimation } = useAnimationContext();
  // const handleButtonClick = async () => {

  //   await controls.start({
  //     opacity: 1,
  //     scale: 1,
  //   });
  //   await controls.start({
  //     opacity: 0,
  //     scale: 2,
  //   });
  // };

  
  return (
    <motion.div animate={controlsFisico}>
      <Image
        id="fisicoo"
        src={fisico}
        alt="fisico"
        width={200}
        useMap="#imagemMapa"
      />
      <map name="imagemMapa">
        <area
          shape="circle"
          coords="38,120,10"
          alt="Área 1"
          onClick={startAnimation}
          style={{ cursor: "pointer", backgroundColor: "blue" }}
        />
        <area
          shape="circle"
          coords="22,170,10"
          alt="Área 2"
          onClick={startAnimation}
          style={{ cursor: "pointer" }}
        />
      </map>
    </motion.div>
  );
}
