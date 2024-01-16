// AnimationContext.js
import { motion, useAnimation } from "framer-motion";
import React, { createContext, useContext, useEffect, useState } from "react";

const AnimationContext = createContext();

export const AnimationProvider = ({ children }) => {
  const [animationActive, setAnimationActive] = useState(false);


  const controls = useAnimation();

  const controlsFisico = useAnimation();
  const controlsDireita = useAnimation();

  const startAnimation = () => {
    console.log("aqui");
    setAnimationActive(true);

    controls.start({
      opacity: 0,
      scale: 2,
      y: -600,
      transition: { duration: 1 },
    });


    controlsFisico.start({
      opacity: 0,
      scale: 2,
      transition: { duration: 0.5 },
    })
    controlsDireita.start({
      opacity: 0,
      scale: 2,
      x: 800,
      transition: { duration: 0.5 },
    })
  };



  function swithAnimate() {
    controls.start({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 1 },
    });

    controlsFisico.start({
      opacity: 1,
      scale: 1,
      transition: { duration: 1 },
    })
    controlsDireita.start({
      opacity: 1,
      scale: 1,
      x: 0,
      transition: { duration: 1 },
    })
  }

  const value = {
    animationActive,
    startAnimation,
    swithAnimate,
    controls,
    controlsFisico,
    controlsDireita,
  };

  return (
    <AnimationContext.Provider value={value}>
      {children}
    </AnimationContext.Provider>
  );
};

export const useAnimationContext = () => {
  return useContext(AnimationContext);
};
