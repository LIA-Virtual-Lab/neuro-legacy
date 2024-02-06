import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";

import { motion } from "framer-motion";
import { useAnimationContext } from "../contexts/AnimationContext";
import { useButtonContext } from "@/contexts/ButtonContext";

export default function Tissue() {
  const { controlsTissue } = useAnimationContext();
  const { tissueFilter } = useButtonContext();

  const [hoveredImage, setHoveredImage] = useState(null);

  const camadas = ["camada1", "camada2", "camada3", "camada4",];
  const [layers, setLayers] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://neurofisiologia-back-end-2a85b59bd567.herokuapp.com/api/objetos?populate=*"
      )
      .then((response) => {
        const filteredLayers = camadas.map((camada) =>
          response.data.data.filter(
            (element) => element.attributes.nome === camada
          )
        );
        setLayers(filteredLayers);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleMouseEnter = (id) => {
    setHoveredImage(id);
    console.log(id);
  };

  const handleMouseLeave = () => {
    setHoveredImage(null);
  };
  
  const individualTopValues = [-35, 144, 155, 163, -35, -30];
  const indexValues = [3, 2, 1, 0, 10, 11];


  return (
    <>
      <motion.div
        animate={controlsTissue}
        style={{ position: "relative", left: 50 }}
      >
        {layers.map((layer, index) => (
          <React.Fragment key={index}>
            {layer.map((element) => ( 
              <motion.div
                key={element.id}
                className={`camada-${element.id} `}
                onMouseEnter={() => handleMouseEnter(element.id)}
                onMouseLeave={handleMouseLeave}
                style={{
                  position: "absolute",
                  top: individualTopValues[index], // Use individualTopValues array for custom top values
                  left: 0,
                  zIndex: indexValues[index],
                }}
              >
                <Image
                  id={`layer${index + 1}uid`}
                  nome={element.attributes.nome}
                  src={element.attributes.cover.data[0].attributes.url}
                  width={500}
                  height={50}
                  alt={`camada-${element.id}`}
                  style={tissueFilter}
                  // style={{
                  //   ...(hoveredImage !== null && hoveredImage !== element.id && tissueFilter),
                  //   transition: "filter 0.3s ease-in-out",
                  // }}
                />
              </motion.div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </>
  );
}
