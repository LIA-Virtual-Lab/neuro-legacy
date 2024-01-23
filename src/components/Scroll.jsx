import { React, useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import gsap from "gsap";
import Draggable from "gsap/dist/Draggable";
import _debounce from "lodash/debounce";
import { motion } from "framer-motion";
import { useAnimationContext } from "../contexts/AnimationContext";
import { useScrollContext } from "@/contexts/ScrollContext";

export default function Scroll() {
  const { controlsTecido } = useAnimationContext();
  const scrollBar = "scroll_bar";
  const scrollBtn = "scroll_btn";
  const [barscroll, setbarscroll] = useState([]);
  const [btnscroll, setScroll] = useState([]);

  const { playScroll, stopScroll } = useScrollContext();

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

  gsap.registerPlugin(Draggable);

  const makeDraggable = (element) => {
    Draggable.create(element, {
      type: "y",
      bounds: { minY: 3, maxY: 240 },

      onPress: () => {
        gsap.set(element, { zIndex: 1 });
      },
      
      onDrag: () => {
        playScroll();
      },
      onRelease: () => {
        stopScroll();

      },
    });
  };

  return (
    <>
      <motion.div animate={controlsTecido} className="mt-[100px] fixed top-0 right-5">
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
      </motion.div>
    </>
  );
}
