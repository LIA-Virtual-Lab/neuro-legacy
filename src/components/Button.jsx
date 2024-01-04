import gsap from "gsap";

export default function Button({ obj }) {

  const onEnter = (e) => {
    gsap.to(e.target, { scale: 1.2 });
  };

  const onLeave = (e) => {
    gsap.to(e.target, { scale: 1 });
  };

  const handleClick = (e) => {
    gsap.to(e.target, {
      duration: 2,
      ease: "elastic.out(1,0.1)",
      y: -5,
      yoyo: true,
      onComplete: () => {
        gsap.set(e.target, { y: 0 }); // Reseta a posição y após a conclusão
      },
    });
  };

  return (
    <>
      <button
        id={obj.attributes.opcao}
        className="rounded-lg bg-red-600 p-2"
        onClick={handleClick}
        onPointerDown={() => {
          // alert(obj.attributes.correta);
        }}
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
      >
        {obj.attributes.opcao}
      </button>
    </>
  );
}
