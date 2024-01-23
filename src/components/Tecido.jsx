import { React, useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import { motion } from "framer-motion";
import { useAnimationContext } from "../contexts/AnimationContext";

export default function Tecido() {
  const { controlsTecido } = useAnimationContext();

  const camadas = "camadas";
  const [camada1, setCamada1] = useState([]);
  const [imagemVisibility, setImagemVisibility] = useState({});

  useEffect(() => {
    axios
      .get(
        "https://neurofisiologia-back-end-2a85b59bd567.herokuapp.com/api/objetos?populate=*"
      )
      .then((response) => {
        const filteredItens = response.data.data.filter(
          (element) => element.attributes.tipo.data.attributes.nome === camadas
        );

        console.log("a saida do filtro é: ", filteredItens);
        setCamada1(filteredItens);

        // Inicializando o estado de visibilidade para todas as imagens como true
        const initialVisibilityState = {};
        filteredItens.forEach((item) => {
          initialVisibilityState[item.id] = true;
        });
        setImagemVisibility(initialVisibilityState);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleImageClick = (id) => {
    // Tornar invisível apenas a imagem com o ID correspondente
    setImagemVisibility((prevVisibility) => ({
      ...prevVisibility,
      [id]: false,
    }));
  };

  return (
    <>
      <motion.div animate={controlsTecido}>
        {camada1.map((element) => (
          <Image
            key={element.id}
            id="camadas"
            nome={element.attributes.nome}
            src={element.attributes.cover.data[0].attributes.url}
            className={"mix-blend-multiply ml-[150px] "}
            width={500}
            height={50}
            alt="itens"
            onClick={() => handleImageClick(element.id)}
            style={{ visibility: imagemVisibility[element.id] ? 'visible' : 'hidden' }}
          />
        ))}
      </motion.div>
    </>
  );
}
