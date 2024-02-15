// AnimationContext.js
import { motion, useAnimation } from "framer-motion";
import React, { createContext, useContext, useEffect, useState } from "react";

const AnimationContext = createContext();

export const AnimationProvider = ({ children }) => {
  const [animationActive, setAnimationActive] = useState(false);

  const [divVisivel, setDivVisivel] = useState(true);

  const [imgs, setImgs] = useState([]);

  function storageImgs(layers) {
    layers.forEach((layer) => {
      setImgs((prev) => [...prev, `layer_${layer[0].id}`]);
    });
  }

  const controlsLeft = useAnimation();
  const controlsRight = useAnimation();
  const controlsTissue = useAnimation();

  const startAnimation = async () => {
    setAnimationActive(true);

    controlsLeft.start({
      opacity: 0,
      scale: 2,
      x: -600,
      transition: { duration: 0.5 },
    });

    await controlsRight.start({
      opacity: 0,
      scale: 2,
      x: 800,
      transition: { duration: 0.5 },
    });

    // setDivVisivel(false);
  };

  async function swithAnimate() {
    await controlsTissue.start({
      opacity: 0,
      scale: 0.1,
      transition: { duration: 1 },
    });

    !divVisivel ? setDivVisivel(true) : null;
  }

  const value = {
    animationActive,
    controlsLeft,
    controlsRight,
    controlsTissue,
    startAnimation,
    storageImgs,
    imgs,

    swithAnimate,
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
