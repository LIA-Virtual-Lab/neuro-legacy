import { useContext, useEffect, useState } from "react";
import { QuestContext } from "@/contexts/QuestContext";
import gsap from "gsap";
import { useAnimationContext } from "@/contexts/AnimationContext";

export default function Button({ obj }) {
  const { count, setCounter } = useContext(QuestContext);
  const [borderColor, setBorderColor] = useState("border");
  const [clicked, setClicked] = useState(false);
  const { imgs } = useAnimationContext();

  const stylesOnClick = (answerCounter) => {
    setCounter(`${answerCounter}`);
    // console.log("Console button", answerCounter);

    //estilos
    if (obj.attributes.correta) {
      // console.log("Correto:", obj.attributes.opcao);
      setBorderColor("border-green-500 border-2");
    } else {
      // console.log("Errou");
      setBorderColor("border-red-500 border-2");
    }

    setClicked(true);

    setTimeout(() => {
      setBorderColor("border");
      count();
    }, 1500);
  };


  const checkImgResponse = (objId) => {
    imgs.forEach((all_id) => {
      const target = document.getElementById(all_id);

      gsap.to(target, { alpha: 0.2, scale: 1 });
      // debugger;

      setTimeout(() => {
        gsap.to(target, { alpha: 1 })
      }, 1500);

    });

    const layer = document.getElementById(`layer_${objId}`);

    gsap.to(layer, { alpha: 1, scale: 1.3, background: "rgba(115,200, 115, 0.5)" });
    // debugger;

    setTimeout(() => {
      gsap.to(layer, { scale: 1, background: "rgba(255, 0, 0, 0)" })
    }, 1500);
  };

  return (
    <>
      <button
        id={obj.attributes.opcao}
        className={`p-2 rounded ${borderColor} border-solid ${clicked ? "" : "hover:border-black"
          } hover:scale-110 active:translate-x-10 duration-300 mt-5 shadow-xl`}
        onPointerDown={() => {
          stylesOnClick(obj.attributes.contra_resposta);
          checkImgResponse(obj.attributes.objeto.data.id);

        }}
      >
        {obj.attributes.opcao}
      </button>
    </>
  );
}
