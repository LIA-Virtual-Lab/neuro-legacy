import Image from "next/image";
import fisico from "../image/fisico.png";
import React from "react";
import gsap from "gsap";
import { motion, useAnimation } from "framer-motion";
import { useAnimationContext } from "../contexts/AnimationContext";

export default function Fisico() {
  // const handleClick = () => {

  //   const painelDireito = document.getElementById('painelDireito');
  //   const painelCima = document.getElementById('painelCima');
  //   const figuraFisico = document.getElementById('fisico');
  //   gsap.to(painelDireito, { opacity: 0, scale: 2, x: '+=500', duration: 1, pointerEvents: "none" });
  //   gsap.to(painelCima, { opacity: 0, scale: 2, y: '-=500', duration: 1 });
  //   gsap.to(figuraFisico, { opacity: 0, scale: 2, duration: 2 });
  //   gsap.to(figuraFisico, { opacity: 0, scale: 2, duration: 2 });

  // };

  // const { startAnimation } = useAnimationContext();

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
    <motion.div
      animate={controlsFisico}
      style={
        {
          // backgroundColor: "blue",
        }
      }
    >
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
