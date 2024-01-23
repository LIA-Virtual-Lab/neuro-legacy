import { React, useEffect, useState } from "react";
import gsap from "gsap";

export default function Sinapse() {
  

  useEffect(() => {
    const polygon = document.getElementById("animatedPolygon");
    const circle = document.getElementById("animatedCircle");

    gsap.set(polygon, { attr: { points: "0,40 50,50 100,30 120,60 150,60" } });
    const animation = gsap.to("animatedCircle", {
        motionPath: "animatedPolygon",
      });

  
    // Animação do círculo ao longo da linha
    gsap.to(circle, {
      motionPath: {
        path: "#animatedPolygon",
        align: "#animatedPolygon",
        alignOrigin: [0.5, 0.5],
      },
      duration: 5, // Duração da animação em segundos
      repeat: -1, // Repetir indefinidamente
      ease: "linear", // Movimento linear
    });
  }, []);

  return (
    <svg width="150" height="150" xmlns="http://www.w3.org/2000/svg">
      <polyline
        id="animatedPolygon"
        fill="none"
        stroke="#000000"
        strokeWidth="2"
      />
      {/* Círculo animado */}
      <circle id="animatedCircle" cx="0" cy="40" r="5" fill="lightblue" />
    </svg>
  );
}

// export default function Sinapse() {
//   const [offset, setOffset] = useState(0);

//   useEffect(() => {
//     const animationInterval = setInterval(() => {

//       setOffset((prevOffset) => (prevOffset + 1) % 100);

//     }, 10);
//     return () => clearInterval(animationInterval);
//   }, []);

//   return (
//     <svg width="100%" height="100">
//       {/* Linha escura */}
//       <line x1="10" y1="50" x2="490" y2="50" stroke="black" strokeWidth="2" />

//       {/* Linha clara animada */}
//       <line
//         x1={10 + offset}
//         y1="50"
//         x2={30 + offset}
//         y2="50"
//         stroke="lightblue"
//         strokeWidth="2"
//       />
//     </svg>
//   );
// }
