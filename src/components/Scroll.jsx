import { React, useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import { motion } from "framer-motion";
import { useAnimationContext } from "../contexts/AnimationContext";
import Draggable from "gsap/dist/Draggable"; //isso resolveu todos os meus problemas
import gsap from "gsap";

export default function Scroll() {
  const { controlsTecido } = useAnimationContext();
  const scrollBar = "scroll_bar";
  const scrollBtn = "scroll_btn";
  const [barscroll, setbarscroll] = useState([]);
  const [btnscroll, setScroll] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://neurofisiologia-back-end-2a85b59bd567.herokuapp.com/api/objetos?populate=*"
      )
      .then((response) => {
        const scrollBarFilter = response.data.data.filter(
          (element) =>
            element.attributes.tipo.data.attributes.nome === scrollBar
        );
        const scrollBtnFilter = response.data.data.filter(
          (element) =>
            element.attributes.tipo.data.attributes.nome === scrollBtn
        );

        setbarscroll(scrollBarFilter);
        setScroll(scrollBtnFilter);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

    gsap.registerPlugin(Draggable)

    const makeDraggable = (element) => {
      Draggable.create(element, {
        type: "y",
        bounds: { minY:0, maxY: 240},
        onPress: () => {
          gsap.set(element, { zIndex: 1 });
        },
        onDrag: () => {
            const currentPosition = Draggable.get(element).y;
            console.log(`Posição Y durante o arrasto: ${currentPosition}`);
            
            // Você pode adicionar lógica aqui para verificar a posição específica
            if (currentPosition >=40 && currentPosition <= 50) {
              console.log("Chegou em Y = 50");
            }
          },
        onRelease: () => {
          // gsap.set(element, { zIndex: 0, x: 0, y: 0, delay: 0.5});
          //checar se houve colisao

        },
      });
    };

  return (
    <>
      <motion.div animate={controlsTecido} className="mt-[100px] relative">
        {barscroll.map((element) => (
          <Image
            key={element.id}
            nome={element.attributes.nome}
            src={element.attributes.cover.data[0].attributes.url}
            className="pointer-events-none transform"
            width={30}
            height={60}
            alt="itens"
          />
        ))}

        {btnscroll.map((element) => (
          <Image
            key={element.id}
            nome={element.attributes.nome}
            src={element.attributes.cover.data[0].attributes.url}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
            }}
            width={30}
            height={60}
            alt="itens"
              ref={(el) => el && makeDraggable(el)}
          />
        ))}

        {/* <motion.div
          drag="y"
          dragElastic={0.2}
          dragConstraints={{ top: -290, bottom: -50 }}
        >
          {btnscroll.map((element) => (
            <Image
              key={element.id}
              nome={element.attributes.nome}
              src={element.attributes.cover.data[0].attributes.url}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                
              }}
              width={30}
              height={60}
              alt="itens"
              //   ref={(el) => el && makeDraggable(el)}
            />
          ))}

          
        </motion.div> */}
      </motion.div>
    </>
  );
}
