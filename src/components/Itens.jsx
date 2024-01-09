import gsap from "gsap";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";
import Draggable from "gsap/dist/Draggable";//isso resolveu todos os meus problemas


export default function Itens() {
    const handleClick = (nome) => {
    console.log("foi clicado: ", nome);
    // Adicione lógica adicional para lidar com o clique, se necessário.
    gsap.to(nome, { scale: 2 });
  };

  const tipo = "neurofisiologia";
  const [itens, setItens] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://neurofisiologia-back-end-2a85b59bd567.herokuapp.com/api/objetos?populate=*"
      )
      .then((response) => {
        console.log("item response: ", response.data.data);

        const filteredItens = response.data.data.filter(
          (element) => element.attributes.propriedades.type === tipo
        );

        setItens(filteredItens);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      {itens.map((element, index) => (
        <AnimatedImage
          key={index}
          nome={element.attributes.nome}
          imageUrl={element.attributes.cover.data[0].attributes.url}
          onClick={() => handleClick(element.attributes.nome)}
        />
      ))}
    </>
  );
}

// Novo componente para imagem com animações
function AnimatedImage({ nome, imageUrl, onClick }) {
  const handleEnter = (e) => {
    gsap.to(e.target, { scale: 1.2 });
  };

  const handleLeave = (e) => {
    gsap.to(e.target, { scale: 1 });
  };

  gsap.registerPlugin(Draggable) 
  // Adicione a lógica para tornar a imagem arrastável
  const makeDraggable = (element) => {
    Draggable.create(element, {
      type: "x,y", // Permite arrastar nas direções x e y
      onPress: () => {
        gsap.set(element, { zIndex: 1 }); // Coloca a imagem em primeiro plano ao começar a arrastar
      },
      onRelease: () => {
        gsap.set(element, { zIndex: 0, x: 0, y: 0, delay: 0.5});

        //checar se houve colisao
    
      },
    });
  };

  return (
    <Image
      id={nome}
      onClick={onClick}
      onPointerOver={handleEnter}
      onPointerOut={handleLeave}
      src={imageUrl}
      width={50}
      height={50}
      alt="itens"
      ref={(el) => el && makeDraggable(el)} // Aplica a lógica de arrasto quando a imagem é renderizada
    />
  );
}
