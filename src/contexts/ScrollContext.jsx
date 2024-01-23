import React, { createContext, useContext } from "react";
import gsap from "gsap";

const ScrollContext = createContext();

export const useScrollContext = () => useContext(ScrollContext);

export const ScrollProvider = ({ children }) => {

  const ScrollState = {
    playScroll: () => {
      const camadas1 = document.getElementById('camadas');
      gsap.to(camadas1, { y: -100, opacity: 0.5, duration: 1 });

    },
    stopScroll: () => {
      const camadas1 = document.getElementById('camadas');
      gsap.to(camadas1, { y: 0, opacity: 1,  duration: 1 });
      
  
    },
  };

  

  return (
    <ScrollContext.Provider value={ScrollState}>
      {children}
    </ScrollContext.Provider>
  );
};
