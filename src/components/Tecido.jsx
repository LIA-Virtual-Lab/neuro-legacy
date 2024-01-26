import { React, useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import { motion } from "framer-motion";
import { useAnimationContext } from "../contexts/AnimationContext";
import { useScrollContext } from "@/contexts/ScrollContext";

export default function Tecido() {
  const { controlsLayer1, controlsLayer2, controlsLayer3, controlsLayer4 } = useScrollContext();
  const { controlsTecido } = useAnimationContext();

  const camada1 = "camada1";
  const [layer1, setCamada1] = useState([]);
  const camada2 = "camada2";
  const [layer2, setCamada2] = useState([]);
  const camada3 = "camada3";
  const [layer3, setCamada3] = useState([]);
  const camada4 = "camada4";
  const [layer4, setCamada4] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://neurofisiologia-back-end-2a85b59bd567.herokuapp.com/api/objetos?populate=*"
      )
      .then((response) => {
        const filterLayer1 = response.data.data.filter(
          (element) => element.attributes.nome === camada1
        );
        const filterLayer2 = response.data.data.filter(
          (element) => element.attributes.nome === camada2
        );
        const filterLayer3 = response.data.data.filter(
          (element) => element.attributes.nome === camada3
        );
        const filterLayer4 = response.data.data.filter(
          (element) => element.attributes.nome === camada4
        );

        setCamada1(filterLayer1);
        setCamada2(filterLayer2);
        setCamada3(filterLayer3);
        setCamada4(filterLayer4);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  

  return (
    <>
      <motion.div animate={controlsTecido}>
        {layer1.map((element) => (
          <motion.div
            animate={controlsLayer1}
            key={element.id}
            className={`camada-${element.id} mix-blend-multiply ml-[150px]`}
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
        {layer2.map((element) => (
          <motion.div
            animate={controlsLayer2}
            key={element.id}
            className={`camada-${element.id} mix-blend-multiply ml-[150px]`}
           
          >
            <Image
              id="layer2uid"
              nome={element.attributes.nome}
              src={element.attributes.cover.data[0].attributes.url}
              width={500}
              height={50}
              alt={`camada-${element.id}`}
            />
          </motion.div>
        ))}
        {layer3.map((element) => (
          <motion.div
          animate={controlsLayer3}
            key={element.id}
            className={`camada-${element.id} mix-blend-multiply ml-[150px]`}
          >
            <Image
              id="layer3uid"
              nome={element.attributes.nome}
              src={element.attributes.cover.data[0].attributes.url}
              width={500}
              height={50}
              alt={`camada-${element.id}`}
            />
          </motion.div>
        ))}
        {layer4.map((element) => (
          <motion.div
          animate={controlsLayer4}
            key={element.id}
            className={`camada-${element.id} mix-blend-multiply ml-[150px]`}
          >
            <Image
              id="layer4uid"
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
