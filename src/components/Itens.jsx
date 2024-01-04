import gsap from "gsap";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Itens() {
  const tipo = "itens_neurologia";
  const [itens, setItens] = useState();

  useEffect(() => {
    axios
      .get(
        "https://neurofisiologia-back-end-2a85b59bd567.herokuapp.com/api/objetos?populate=*"
      )
      .then((response) => {
        console.log(response.data);

        response.data.data.foreach((el) => {
          if (el.attributes.tipo.attributes.nome === tipo)
            setItens((previous) => {
              return [...previous, el.attributes.cover.attributes.nome];
            });
        });

        debugger;
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const onEnter = (e) => {
    gsap.to(e.target, { scale: 1.2 });
  };
  return (
    <>
      {/* <Image onMouseEnter={onEnter} src={fire} alt="fogo" width={50} />
      <Image src={agua} alt="fogo" width={50} />
      <Image src={agulha} alt="fogo" width={50} /> */}
    </>
  );
}
