import React, { createContext, useContext } from "react";
import { useAnimationContext } from "../contexts/AnimationContext";
import gsap from "gsap";
import { motion, useAnimation } from "framer-motion";

const ScrollContext = createContext();

export const useScrollContext = () => useContext(ScrollContext);

export const ScrollProvider = ({ children }) => {
  const controlsLayer1 = useAnimation();
  const controlsLayer2 = useAnimation();
  const controlsLayer3 = useAnimation();
  const controlsLayer4 = useAnimation();

  const startLayers = async () => {
    controlsLayer1.start({
      transition: { duration: 1 },
    });
    controlsLayer2.start({
      x: 50,

      transition: { duration: 1 },
    });
    controlsLayer3.start({
      x: 100,
      transition: { duration: 1 },
    });
    controlsLayer4.start({
      x: 130,
      transition: { duration: 1 },
    });
  };
  const stopLayers = async () => {
    controlsLayer1.start({
      transition: { duration: 1 },
    });
    controlsLayer2.start({
      x: 0,

      transition: { duration: 1 },
    });
    controlsLayer3.start({
      x: 0,
      transition: { duration: 1 },
    });
    controlsLayer4.start({
      x: 0,
      transition: { duration: 1 },
    });
  };

  const ScrollState = {
    playScroll: () => {
      const layer1 = document.getElementById("layer1uid");
      const layer2 = document.getElementById("layer2uid");
      const layer3 = document.getElementById("layer3uid");
      const layer4 = document.getElementById("layer4uid");
      gsap.to([layer1, layer2, layer3, layer4], { y: -100, opacity: 0.5, scale:0.8, duration: 1 });
    },
    stopScroll: () => {
      const layer1 = document.getElementById("layer1uid");
      const layer2 = document.getElementById("layer2uid");
      const layer3 = document.getElementById("layer3uid");
      const layer4 = document.getElementById("layer4uid");
      gsap.to([layer1, layer2, layer3, layer4], { y: 0, opacity: 1, scale:1, duration: 1 });
    },
    controlsLayer1,
    controlsLayer2,
    controlsLayer3,
    controlsLayer4,
    startLayers,
    stopLayers,
  };

  return (
    <ScrollContext.Provider value={ScrollState}>
      {children}
    </ScrollContext.Provider>
  );
};
