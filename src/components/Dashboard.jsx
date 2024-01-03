import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import gifNeuronio from '../image/neuronio.gif';
import fire from '../image/fogo.png'
import agua from '../image/agua.png'
import agulha from '../image/agulha.png'
import neuro from '../image/neuro.png'
import fisico from '../image/fisico.png'
import Draggable from 'react-draggable';


function Dashboard() {

    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleStop = () => {
        // Atualiza o estado para resetar a posição para (0, 0)
        setPosition({ x: 0, y: 0 });
    };
  return (
      <div className='flex flex-row font-mono'>
        {/* left */}
        <div className='flex flex-col bg-white m-10 left-container p-8 space-y-10 w-64 black text-black'>
            <span></span>
            <Image src={gifNeuronio} alt='neuronio' width={200} className='rounded-xl'/>
            <p className='red-line linha-superior'></p>
            <p className='black'>Itens:</p>

            <div className='flex flex-row space-x-4'>
                <Draggable 
                    position={position}
                    onStop={handleStop}
                    bounds="parent" // Restringe o arrasto ao componente pai
                >
                <Image src={fire} alt='fogo' width={50} id='movableDiv'/></Draggable>
                <Draggable><Image src={agua} alt='fogo' width={50}/></Draggable>
                <Draggable><Image src={agulha} alt='fogo' width={50}/></Draggable>
            </div>
            <p className='red-line linha-inferior'></p>

        </div>

        

        <div className='container'>
            {/* mid up */}
            <div className='bg-withe mt-10 mr-5 mid-containers p-6 h-32 text-right text-top div1'>
                <p>Calor</p>
                <Image src={neuro} alt='neuronio' width={100} className='rounded-xl'/>
            </div>
            <div className='bg-withe mt-10 mr-5 mid-containers p-6 h-32 text-right text-top div2'>
                <p>Frio</p>

                <Image src={neuro} alt='neuronio' width={100} className='rounded-xl'/>
            </div>
            <div className='bg-withe mt-10 mid-containers p-6 h-32 text-right text-top div3'>
                <p>Dor</p>

                <Image src={neuro} alt='neuronio' width={100} className='rounded-xl'/>
            </div>

            {/* mid */}
            <div className='mix-blend-multiply div4'>
                <Image src={fisico} alt='fisico' width={200} />

            </div>
            
        </div>




        {/* right */}
        <div className='bg-white m-10 left-container p-5 w-[500px] black text-black space-y-5'>
            <p className='font-bold text-lg'>Pergunta:</p>
            <p className='text-sm'>Os neurônios especializados em detectar e responder a estímulos térmicos (calor ou frio) são conhecidos como termorreceptores. Esses neurônios têm a capacidade de detectar mudanças na temperatura do ambiente e enviar sinais elétricos ao sistema nervoso central, permitindo que o organismo perceba e responda a variações de temperatura. Existem diferentes tipos de termorreceptores, alguns sensíveis ao calor (termorreceptores de calor) e outros sensíveis ao frio (termorreceptores de frio). Esses termorreceptores desempenham um papel crucial na regulação da temperatura corporal e na resposta a estímulos térmicos no ambiente.</p>
            <div className='flex flex-col space-y-4'>
                <button className='rounded-lg bg-red-600 p-2'>A - Calor transmitido por indução</button>
                <button className='rounded-lg bg-red-600 p-2'>B - Frio transmitido por indução</button>
                <button className='rounded-lg bg-red-600 p-2'>C - Dor</button> 
            </div>
            
        </div>
    </div>
    
        
  )
}

export default Dashboard