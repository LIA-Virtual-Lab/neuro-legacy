// AnimationContext.js
import { motion, useAnimation } from "framer-motion";
import React, { createContext, useContext, useEffect, useState } from "react";

const AnimationContext = createContext();

export const AnimationProvider = ({ children }) => {
  const [animationActive, setAnimationActive] = useState(false);

  const [divVisivel, setDivVisivel] = useState(true);

  const controlsCima = useAnimation();
  const controlsFisico = useAnimation();
  const controlsDireita = useAnimation();
  const controlsTecido = useAnimation();
  



  const startAnimation = async () => {
    setAnimationActive(true);
    
    controlsCima.start({
      opacity: 0,
      scale: 2,
      y: -600,
      transition: { duration: 1 },
    });
    
    controlsFisico.start({
      opacity: 0,
      scale: 2,
      transition: { duration: 0.5 },
    });

    await controlsDireita.start({
      opacity: 0,
      scale: 2,
      x: 800,
      transition: { duration: 0.5 },
    });
    
    setDivVisivel(false);
  };
  
  
  async function swithAnimate() {
    await controlsTecido.start({
      opacity: 0,
      scale: 0.1,
      transition: { duration: 1 },
    });
    
    !divVisivel ? setDivVisivel(true) : null
  }
  
  
  
  const value = {
    animationActive,
    startAnimation,
    swithAnimate,
    controlsCima,
    controlsFisico,
    controlsDireita,
    controlsTecido,
    divVisivel,
    

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
