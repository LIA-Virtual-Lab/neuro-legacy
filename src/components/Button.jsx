import { QuestContext } from "@/contexts/QuestContext";
import { useContext, useState, useEffect } from "react";

export default function Button({ obj }) {
  const { count, setCounter } = useContext(QuestContext);
  const [borderColor, setBorderColor] = useState("border");


  const stylesOnClick = (stringCounter) => {
    setCounter(`${stringCounter}`)

    console.log(obj.attributes.correta);

    if (obj.attributes.correta) {
      console.log("acertou");
      setBorderColor("border-green-500 border-2");
    } else {
      console.log("errou");
      setBorderColor("border-red-500 border-2");
    }
    setTimeout(() => {
      setBorderColor("border"); // Reset border color after a delay (1.5 seconds in your case)
      count();
    }, 1500);
  };

  return (
    <>
      <button
        id={obj.attributes.opcao}
        className={`p-2 rounded ${borderColor} border-solid hover:border-black hover:scale-110 duration-300 mt-5 shadow-xl`}
        onPointerDown={()=>{stylesOnClick(obj.attributes.contra_resposta)}}
      >
        {obj.attributes.opcao}
      </button>
    </>
  );
}
