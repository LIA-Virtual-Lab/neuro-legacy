import { motion } from "framer-motion";
import { useAnimationContext } from "../contexts/AnimationContext";
import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";


function Dashboard() {
  const { swithAnimate, divVisivel } = useAnimationContext();

  return (
    <motion.div
      className="flex flex-row font-mono"
      initial={{ opacity: 0, scale: 1.2 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >

      {/* left */}
      {divVisivel ? (
        <motion.div
          initial={{ x: -600, opacity: 0, scale: 2 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <LeftPanel />
        </motion.div>
      ) : null}

      {/* right */}
      {divVisivel ? (
        <motion.div
          initial={{ x: 800, opacity: 0, scale: 2 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <RightPanel />
        </motion.div>
      ) : null}
    

      
    </motion.div>
  );
}

export default Dashboard;
