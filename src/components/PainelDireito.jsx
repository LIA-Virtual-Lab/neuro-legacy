import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { QuestContext } from "@/contexts/QuestContext";
import { motion, useAnimation } from "framer-motion";
import { useAnimationContext } from "../contexts/AnimationContext";
import Button from "./Button";

export default function painelDireito() {
  const { controlsDireita } = useAnimationContext();

  // const { questIndex } = useContext(QuestContext);
  const { indexQuest, count, texte } = useContext(QuestContext);
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
        console.log(response);
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
    console.log("atualizei", indexQuest);
    setIndex(indexQuest);
    nextQuest();
  }, [indexQuest, index]);

  function nextQuest() {
    if (!data) return;
    if (data.data.length - 1 < indexQuest) return;
    setQuest(data.data[index].attributes.questao);
    setAnswer(data.data[index].attributes.respostas.data);
  }

  return (
    <motion.div animate={controlsDireita} className="bg-white space-y-5 m-10 left-container p-5 w-[300px] black text-black " id="painelDireito">
      <p className="font-bold text-xl">Pergunta:</p>
      <p className="text-md">{quest && quest}</p>
      <span></span>
      <div className="flex flex-col space-y-4">
        {answer &&
          answer.map((resposta, i) => {
            // console.log(resposta);
            return <Button key={i} obj={resposta} />;
          })}
      </div>
    </motion.div>
  );
}
