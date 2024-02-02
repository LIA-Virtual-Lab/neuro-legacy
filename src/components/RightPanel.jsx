import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useAnimationContext } from "../contexts/AnimationContext";
import Tissue from "./Tissue";


export default function RightPanel() {
  const { controlsRight } = useAnimationContext();



  return (
    <motion.div
      animate={controlsRight}
      className="space-y-5 m-10 ml-0 black text-black "
      id="painelDireito"
    >
      <div className="h-[500px] w-[500px] rounded-[40px] border border-solid border-gray-400">
       <Tissue/>
      </div>
    </motion.div>
  );
}
