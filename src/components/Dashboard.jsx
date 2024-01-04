import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import Button from "./Button";
import axios from "axios";
import Itens from "./Itens";

// imgs
import gifNeuronio from "../image/neuronio.gif";

import neuro from "../image/neuro.png";
import fisico from "../image/fisico.png";

function Dashboard() {
  const [index, setIndex] = useState(1);

  const [data, setData] = useState();
  const [quest, setQuest] = useState();
  const [answer, setAnswaer] = useState();

  useEffect(() => {
    axios
      .get(
        "https://neurofisiologia-back-end-2a85b59bd567.herokuapp.com/api/perguntas?populate=*"
      )
      .then((response) => {
        console.log(response);
        setData(response.data);

        setQuest(response.data.data[index].attributes.questao);
        setAnswaer(response.data.data[index].attributes.respostas.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


  return (
    <div className="flex flex-row font-mono">

      {/* left */}
      <div className="flex flex-col bg-white m-10 left-container p-8 space-y-10 w-64 black text-black">
        <span></span>
        <Image
          src={gifNeuronio}
          alt="neuronio"
          width={200}
          className="rounded-xl pointer-events-none transform"
        />
        <p className="red-line linha-superior"></p>
        <p className="black">Itens:</p>

        <div className="flex flex-row space-x-4">
          
            <Itens />
          
        </div>
        <p className="red-line linha-inferior"></p>
      </div>

      {/* mid */}
      <div className="container">
        {/* mid up */}
        <div className="bg-withe mt-10 mr-5 mid-containers p-6 h-32 text-right text-top div1">
          <p>Calor</p>
          <Image
            src={neuro}
            alt="neuronio"
            width={100}
            className="rounded-xl"
          />
        </div>
        <div className="bg-withe mt-10 mr-5 mid-containers p-6 h-32 text-right text-top div2">
          <p>Frio</p>

          <Image
            src={neuro}
            alt="neuronio"
            width={100}
            className="rounded-xl"
          />
        </div>
        <div className="bg-withe mt-10 mid-containers p-6 h-32 text-right text-top div3">
          <p>Dor</p>

          <Image
            src={neuro}
            alt="neuronio"
            width={100}
            className="rounded-xl"
          />
        </div>

        {/* mid down*/}
        <div className="mix-blend-multiply div4 pointer-events-none transform">
          <Image src={fisico} alt="fisico" width={200} />
        </div>
      </div>

      {/* right */}
      <div className="bg-white m-10 left-container p-5 w-[500px] black text-black space-y-5">
        <p className="font-bold text-xl">Pergunta:</p>
        <p className="text-md">{quest && quest}</p>
        <div className="flex flex-col space-y-4">
          {answer &&
            answer.map((resposta, i) => {
            //   console.log(resposta);
              return <Button key={i} obj={resposta} />;
            })}
        </div>
      </div>

    </div>
  );
}

export default Dashboard;
