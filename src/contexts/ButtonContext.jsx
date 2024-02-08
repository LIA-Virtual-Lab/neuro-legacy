import gsap from "gsap";
import React, { createContext, useContext, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const ButtonContext = createContext();

export const useButtonContext = () => useContext(ButtonContext);

export const ButtonProvider = ({ children }) => {
  const [tissueFilter, setTissueFilter] = useState({
    // filter: "grayscale(70%) ",
  });

  const updateTissueFilter = () => {
    const layer1 = document.getElementById("layer5uid");
    gsap.to([layer1], {
      // background: "rgba(255, 0, 0, 0.5)",
      x:4,
      duration: 0,
      
    });
    setTissueFilter({
      filter: "hue-rotate(70deg)"
    });
  };
  
  

  //gsap
  const ScrollState = {
    playScroll: () => {
      const layer1 = document.getElementById("layer1uid");
      // gsap.to([layer1], { background: 'rgba(255, 0, 0, 0.5)', x:70, duration: 0 });
    },
    tissueFilter,
    updateTissueFilter,
  };

  return (
    <ButtonContext.Provider value={ScrollState}>
      {children}
    </ButtonContext.Provider>
  );
};
