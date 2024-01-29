import axios from "axios";
import Image from "next/image";
import { React, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useAnimationContext } from "../contexts/AnimationContext";

export default function Tissue() {
  const { controlsTissue } = useAnimationContext();

  const camada1 = "pele1";
  const [layer1, setCamada1] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://neurofisiologia-back-end-2a85b59bd567.herokuapp.com/api/objetos?populate=*"
      )
      .then((response) => {
        const filterLayer1 = response.data.data.filter(
          (element) => element.attributes.nome === camada1
        );

        setCamada1(filterLayer1);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <motion.div animate={controlsTissue}>
        {layer1.map((element) => (
          <motion.div
            key={element.id}
            className={`camada-${element.id} mix-blend-multiply`}
          >
            <Image
              id="layer1uid"
              nome={element.attributes.nome}
              src={element.attributes.cover.data[0].attributes.url}
              width={500}
              height={50}
              alt={`camada-${element.id}`}
            />
          </motion.div>
        ))}
      </motion.div>
    </>
  );
}
