import Image from "next/image";
import { motion } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import Itens from "./Itens";
import Fisico from "./Fisico";
import Tecido from "./Tecido";
import PainelCima from "./PainelCima";
import PainelDireito from "./PainelDireito";
import { useAnimationContext } from "../contexts/AnimationContext";

// imgs
import gifNeuronio from "../image/neuronio.gif";
import seta_voltar from "../image/seta_voltar.png";

function Dashboard() {
  const { swithAnimate } = useAnimationContext();

  const [divVisivel, setDivVisivel] = useState(true);
  const desabilitarDiv = () => {
    setTimeout(() => {
      setDivVisivel(!divVisivel);
    }, "500");
  };

  return (
    <motion.div
      className="flex flex-row font-mono"
      initial={{ opacity: 0, scale: 1.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Image
        src={seta_voltar}
        alt="seta"
        className="h-8 w-8 absolute ml-[5px] hover:cursor-pointer"
        onPointerDown={swithAnimate}
      />

      {/* left */}
      <div className="flex flex-col bg-white m-10 left-container p-8 space-y-10 w-64 black text-black pt-20">
        {/* <span></span> */}
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
      {divVisivel ? (




        <div className="container">
          {/* mid up */}
          <PainelCima />

          {/* mid down*/}
          <motion.div
            className="mix-blend-multiply painelBaixo "
            initial={{ opacity: 0, scale: 2 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            id="fisico"
            // onClick={desabilitarDiv}
          >
            <Fisico />
          </motion.div>
        </div>
      ) : null}

      {/* right */}
      {divVisivel ? (
        <div>
          <PainelDireito />
        </div>
      ) : null}

      {!divVisivel ? (
        <div>
          <Tecido />
        </div>
      ) : null}
    </motion.div>
  );
}

export default Dashboard;
