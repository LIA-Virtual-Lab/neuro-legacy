import { React, useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import { motion } from "framer-motion";
import { useAnimationContext } from "../contexts/AnimationContext";

export default function Tecido() {
  const { controlsTecido } = useAnimationContext();

  const tipo = "camadas";
  const [itens, setItens] = useState([]);
  const alvo = "camadas2";
  const [alvos, setAlvos] = useState([]);
  const [dimensions, setDimensions] = useState({
    width: 500,
    height: 50,
  });
  const [isAlvos, setIsAlvos] = useState(true);

  useEffect(() => {
    axios
      .get(
        "https://neurofisiologia-back-end-2a85b59bd567.herokuapp.com/api/objetos?populate=*"
      )
      .then((response) => {
        const filteredItens = response.data.data.filter(
          (element) => element.attributes.tipo.data.attributes.nome === tipo
        );
        const filteredItens2 = response.data.data.filter(
          (element) => element.attributes.tipo.data.attributes.nome === alvo
        );

        setItens(filteredItens);
        setAlvos(filteredItens2);

        // Atualiza as dimensões com base na primeira imagem
        if (filteredItens.length > 0) {
          const firstItem = filteredItens[0];
          setDimensions({
            width: firstItem.attributes.cover.data[0].attributes.width,
            height: firstItem.attributes.cover.data[0].attributes.height,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <motion.div animate={controlsTecido}>
        {isAlvos
          ? alvos.map((element) => (
              <Image
                key={element.id}
                nome={element.attributes.nome}
                src={element.attributes.cover.data[0].attributes.url}
                onPointerDown={() => setIsAlvos(!isAlvos)}
                className="mix-blend-multiply ml-[150px]"
                width={dimensions.width}
                height={dimensions.height}
                alt="itens"
              />
            ))
          : itens.map((element) => (
              <Image
                key={element.id}
                nome={element.attributes.nome}
                src={element.attributes.cover.data[0].attributes.url}
                onPointerDown={() => setIsAlvos(!isAlvos)}
                className="mix-blend-multiply ml-[150px]"
                width={dimensions.width}
                height={dimensions.height}
                alt="itens"
              />
            ))}
      </motion.div>
    </>
  );
}
