import { createContext, useState } from "react";

export const QuestContext = createContext();

export function QuestProvider({ children }) {
  const [indexQuest, setIndexQuest] = useState(0);
  const [texte, setTexte] = useState("paapapa");

  const count = () => {
    setIndexQuest((previous) => previous + 1);
    console.log("valor index: ", indexQuest);
  };


  return (
    <QuestContext.Provider value={{ indexQuest, count, texte, setTexte }}>
      {children}
    </QuestContext.Provider>
  );
}
