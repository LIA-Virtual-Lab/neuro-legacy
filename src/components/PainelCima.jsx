import Image from "next/image";
import neuro from "../image/neuro.png";
import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useAnimationContext } from "../contexts/AnimationContext";


export default function PainelCima() {
const { controlsCima } = useAnimationContext();

  return (
    <motion.div animate={controlsCima} className="painelCima" id="painelCima">
      <div className="bg-withe mt-10 mr-5 mid-containers p-6 h-32 text-right text-top div1">
        <p>Calor</p>
        <Image src={neuro} alt="neuronio" width={100} className="rounded-xl" />
      </div>
      <div className="bg-withe mt-10 mr-5 mid-containers p-6 h-32 text-right text-top div2">
        <p>Frio</p>

        <Image src={neuro} alt="neuronio" width={100} className="rounded-xl" />
      </div>
      <div className="bg-withe mt-10 mid-containers p-6 h-32 text-right text-top div3">
        <p>Dor</p>

        <Image src={neuro} alt="neuronio" width={100} className="rounded-xl" />
      </div>
    </motion.div>
  );
}
