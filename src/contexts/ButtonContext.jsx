import gsap from "gsap";
import React, { createContext, useContext, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const ButtonContext = createContext();

export const useButtonContext = () => useContext(ButtonContext);

export const ButtonProvider = ({ children }) => {
  const [imgName, setImgName] = useState();

  //gsap
  const ScrollState = {
    imgName,
    setImgName,
  };

  return (
    <ButtonContext.Provider value={ScrollState}>
      {children}
    </ButtonContext.Provider>
  );
};
