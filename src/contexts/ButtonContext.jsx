import gsap from "gsap";
import React, { createContext, useContext, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const ButtonContext = createContext();

export const useButtonContext = () => useContext(ButtonContext);

export const ButtonProvider = ({ children }) => {
  const camadas = [
    "cornea",
    "granulosa",
    "espinhosa",
    "derme",
    "musculo_eretor",
    "camada6",
    "arteria",
    "veia",
    "adiposo",
    "camada9",
    "corpusculo_merkel",
    "Corpúsculo de Ruffini",
    "raiz_pelo",
    "plexo_raiz_capilar",
    "plexo_raiz_capilar2",
    "corpusculo_pacini",
    "corpusculo_bulboso",
    "corpusculo_meissner",
    "terminacoes_nervosas",
    "bulbo_capilar",
    "vaso14",
    "vaso15",
    "vaso16",
    "vaso17",
    "glandula_sudoripara",
  ];
  const [imgName, setImgName] = useState();


  function testando {

    console.log(imgName)
  }

  //gsap
  const ScrollState = {
    imgName,
    setImgName,
    camadas, testando
  };

  return (
    <ButtonContext.Provider value={ScrollState}>
      {children}
    </ButtonContext.Provider>
  );
};
