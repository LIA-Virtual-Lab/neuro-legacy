import axios from "axios";
import Image from "next/image";
import { React, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useAnimationContext } from "../contexts/AnimationContext";
import { useButtonContext } from "@/contexts/ButtonContext";

export default function Tissue() {
  const { controlsTissue } = useAnimationContext();
  const { tissueFilter } = useButtonContext();

  const [hoveredImage, setHoveredImage] = useState(null);

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
      <motion.div animate={controlsTissue} style={{ position: 'relative', left: 50 }}>
        {layer1.map((element) => (
          <motion.div
            key={element.id}
            className={`camada-${element.id} `}
            onMouseEnter={() => setHoveredImage(element.id)}
            onMouseLeave={() => setHoveredImage(null)}
            style={{ position: 'absolute', top: 0, left: 0, zIndex: 100,}}
            >
            <Image
              id="layer1uid"
              nome={element.attributes.nome}
              src={element.attributes.cover.data[0].attributes.url}
              width={400}
              height={50}
              alt={`camada-${element.id}`}
              style={(hoveredImage === element.id ? tissueFilter : null)}
            />
          </motion.div>
        ))}
        {layer2.map((element) => (
          <motion.div
            key={element.id}
            className={`camada-${element.id} `}
            style={{ position: 'absolute', top: 140, left: 0, zIndex: 90,}}
            onMouseEnter={() => setHoveredImage(element.id)}
            onMouseLeave={() => setHoveredImage(null)}
          >
            <Image
              id="layer2uid"
              nome={element.attributes.nome}
              src={element.attributes.cover.data[0].attributes.url}
              width={400}
              height={50}
              alt={`camada-${element.id}`}
              style={hoveredImage === element.id ? tissueFilter : null}
            />
          </motion.div>
        ))}
        {layer3.map((element) => (
          <motion.div
            key={element.id}
            className={`camada-${element.id} `}
            style={{ position: 'absolute', top: 150, left: 0, zIndex: 80, }}
            onMouseEnter={() => setHoveredImage(element.id)}
            onMouseLeave={() => setHoveredImage(null)}
          >
            <Image
              id="layer3uid"
              nome={element.attributes.nome}
              src={element.attributes.cover.data[0].attributes.url}
              width={400}
              height={50}
              alt={`camada-${element.id}`}
              style={hoveredImage === element.id ? tissueFilter : null}
            />
          </motion.div>
        ))}
        {layer4.map((element) => (
          <motion.div
            key={element.id}
            className={`camada-${element.id} `}
            style={{ position: 'absolute', top: 155, left: 0, zIndex: 0, }}
            onMouseEnter={() => setHoveredImage(element.id)}
            onMouseLeave={() => setHoveredImage(null)}
          >
            <Image
              id="layer4uid"
              nome={element.attributes.nome}
              src={element.attributes.cover.data[0].attributes.url}
              width={400}
              height={50}
              alt={`camada-${element.id}`}
              style={hoveredImage === element.id ? tissueFilter : null}
            />
          </motion.div>
        ))}
      </motion.div>
    </>
  );
}
