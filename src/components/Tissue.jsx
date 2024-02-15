import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useAnimationContext } from "../contexts/AnimationContext";

export default function Tissue() {
  const { controlsTissue, storageImgs } = useAnimationContext();

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
    "Corpúsculo de Merkel",
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
  const individualTopValues = [
    -35, 144, 155, 163, -35, -35, -35, -30, -35, -35, -35, -35, -35, -35, -35,
    -35, -35, -30, -35, -30, -30, -30, -30, -30, -35,
  ];
  const indexValues = [
    3, 2, 1, 0, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,
    26, 27, 28, 29, 30,
  ];

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
        storageImgs(filteredLayers);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  layers.map((element) => {
    console.log(element);
  });

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
                style={{
                  position: "absolute",
                  top: individualTopValues[index],
                  left: 0,
                  zIndex: indexValues[index],
                }}
              >
                <Image
                  // id={`layer${index + 1}uid`}
                  id={`layer_${layer[0].id}`}
                  nome={element.attributes.nome}
                  src={element.attributes.cover.data[0].attributes.url}
                  width={500}
                  height={50}
                  alt={`camada-${element.id}`}
                />
              </motion.div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </>
  );
}
