import { QuestContext } from "@/contexts/QuestContext";
import { useContext, useState, useEffect } from "react";
import { useButtonContext } from "@/contexts/ButtonContext";

export default function Button({ obj }) {
  const { count, setCounter } = useContext(QuestContext);
  const [borderColor, setBorderColor] = useState("border");
  const [clicked, setClicked] = useState(false);
  const { updateTissueFilter } = useButtonContext();

  const stylesOnClick = (stringCounter) => {
    setCounter(`${stringCounter}`);

    console.log("console button", stringCounter);

    if (obj.attributes.correta) {
      console.log("acertou");
      setBorderColor("border-green-500 border-2");
    } else {
      console.log("errou");
      setBorderColor("border-red-500 border-2");
    }

    setClicked(true); //verificador pra remover o hover border black dos btn

    setTimeout(() => {
      setBorderColor("border");
      count();
    }, 1500);
  };

  return (
    <>
      <button
        id={obj.attributes.opcao}
        className={`p-2 rounded ${borderColor} border-solid ${
          clicked ? "" : "hover:border-black"
        } hover:scale-110 active:translate-x-10 duration-300 mt-5 shadow-xl`}
        onPointerDown={() => {
          stylesOnClick(obj.attributes.contra_resposta);
          
          updateTissueFilter();
          
        }}
        >
        {obj.attributes.opcao}
      </button>
    </>
  );
}
