import axios from "axios";
import { useContext, useState } from "react";
import { QuestContext } from "@/contexts/QuestContext";
import { useButtonContext } from "@/contexts/ButtonContext";

export default function Button({ obj }) {
  const { count, setCounter } = useContext(QuestContext);
  const [borderColor, setBorderColor] = useState("border");
  const [clicked, setClicked] = useState(false);
  const { setImgName } = useButtonContext();

  const stylesOnClick = (stringCounter) => {
    axios
      .get(
        "https://neurofisiologia-back-end-2a85b59bd567.herokuapp.com/api/respostas?populate=*"
      )
      .then((response) => {
        const nomesDosObjetos = response.data.data.map(
          (item) => item.attributes.objeto.data.attributes.nome
        );

      // Verificar se obj.attributes.opcao está no array nomesDosObjetos
      const opcaoEncontrada = nomesDosObjetos.includes(obj.attributes.opcao)
        ? obj.attributes.opcao
        : null;

      if (opcaoEncontrada) {
        console.log(`"${obj.attributes.opcao}" está no array nomesDosObjetos`);
        console.log("Valor encontrado:", opcaoEncontrada);
      } else {
        console.log(`"${obj.attributes.opcao}" não está no array nomesDosObjetos`);
      }

      // Agora você pode usar a constante opcaoEncontrada conforme necessário.


        const imgName = opcaoEstaNoArray;
        setImgName(imgName);
        console.log("Tentando pegar img:", imgName);
      })
      .catch((error) => {
        console.log(error);
      });

    // setCounter(`${stringCounter}`); //contra-resposta

    console.log("Console button", stringCounter);

    if (obj.attributes.correta) {
      console.log("Correto:", obj.attributes.opcao);
      setBorderColor("border-green-500 border-2");
    } else {
      console.log("Errou");
      setBorderColor("border-red-500 border-2");
    }

    setClicked(true);

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
        }}
      >
        {obj.attributes.opcao}
      </button>
    </>
  );
}
