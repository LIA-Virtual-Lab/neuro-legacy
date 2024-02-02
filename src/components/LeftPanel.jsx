import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { QuestContext } from "@/contexts/QuestContext";
import { useAnimationContext } from "../contexts/AnimationContext";
import Button from "./Button";

export default function LeftPanel() {
  const { controlsLeft } = useAnimationContext();

  const { indexQuest, counter } = useContext(QuestContext);
  const [index, setIndex] = useState(indexQuest);
  const [data, setData] = useState();
  const [quest, setQuest] = useState();
  const [answer, setAnswer] = useState();

  // chamada unica ao banco
  useEffect(() => {
    axios
      .get(
        "https://neurofisiologia-back-end-2a85b59bd567.herokuapp.com/api/perguntas?populate=*"
      )
      .then((response) => {
        // console.log(response);
        setData(response.data);
        setQuest(response.data.data[0].attributes.questao);
        setAnswer(response.data.data[0].attributes.respostas.data);
        
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
 
  //atualizar os states
  useEffect(() => {
    // console.log("atualizei", indexQuest);
    setIndex(indexQuest);
    nextQuest();
  }, [indexQuest, index]);

  function nextQuest() {
    if (!data) return;
    if (data.data.length - 1 < indexQuest) return;
    setQuest(data.data[index].attributes.questao);
    setAnswer(data.data[index].attributes.respostas.data);
  }
  console.log(counter);

  return (
    <motion.div
      animate={controlsLeft}
      className="space-y-5 m-10 ml-20 w-[600px] black text-black "
      id="painelEsquerdo"
    >
      <p className="font-style text-xl">Pergunta:</p>
      <p className="text-2xl font-sans font-extralight">{quest && quest}</p>

      <div className="w-[300px] flex flex-col font-sans">
        {answer &&
          answer.map((resposta, i) => {
            return <Button key={i} obj={resposta} />;
          })}
      </div>
      <br></br>

      <div>
        <p className="text-xl font-sans font-extralight"> {counter} </p>
      </div>
    </motion.div>
  );
}
