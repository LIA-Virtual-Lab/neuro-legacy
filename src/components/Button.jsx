import { QuestContext } from "@/contexts/QuestContext";
import gsap from "gsap";
import { useContext } from "react";

export default function Button({ obj }) {
  const onEnter = (e) => {
    gsap.to(e.target, { scale: 1.1 });
  };

  const onLeave = (e) => {
    gsap.to(e.target, { scale: 1 });
  };

  const handleClick = (e) => {
    //animation
    gsap.to(e.target, {
      duration: 2,
      ease: "elastic.out(1,0.1)",
      y: -5,
      yoyo: true,
      onComplete: () => {
        gsap.set(e.target, { y: 0 }); 
      },
    });
  };

  const { indexQuest, count, texte, setTexte } = useContext(QuestContext);



  return (
    <>
      <button
        id={obj.attributes.opcao}
        className="rounded-lg bg-red-600 p-2"
        onClick={handleClick}
        onPointerDown={() => {
          // setTexte('lalala')
          console.log(obj.attributes.correta);
          if (obj.attributes.correta) {
            // console.log("acertou")
            //score
          }
          setTimeout(() => count(), 500);
        }}
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
      >
        {obj.attributes.opcao}
      </button>
    </>
  );
}
