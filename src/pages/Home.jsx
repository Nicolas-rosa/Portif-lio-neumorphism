import React from "react";
import Card from "../Components/Card";
import Card1 from "../Components/Card1";
import Circle from "../Components/Circle";
import Card2 from "../Components/Card2";
import Quadro from "../Components/Quadro";
import Animado from "../Components/Animado";
import Paragrafo from "../Components/Paragrafo";
import Trio from "../Components/Trio";
import Draggable from "react-draggable";
import Aviso from "../Components/Card";
export default function Home(){
return(

<div className="">
<div class="flex flex-col items-center ">
        <Aviso/>
<h2 class="text-[7vw] font-bold text-blue-400 mb-[4%] text-center 
transition-transform transform hover:scale-105 
animate-fade-in mobile:text-[10vw] ">
    Dev FullStack
</h2>

        <Paragrafo/>
<Draggable>
        <div className="flex gap-[2vw] flex-wrap-reverse items-center justify-center h-screen space-y-8">
      <div className="flex items-center space-x-4">
      <Circle percentage={20} color="#3498db" />
      <div class = "hm" className="text-[3vw] font-extrabold" style={{ color: '#3498db' }}>Front-end</div>
      </div>
      <div className="flex items-center space-x-4">
        <Circle percentage={20} color="#e74c3c" />
        <div  class = "hm" className="text-[3vw] font-extrabold" style={{ color: '#e74c3c' }}>Back-end</div>
      </div>
      <div className="flex items-center space-x-4 ">
      <Circle percentage={60} color="#2ecc71" />
      <div class = "hm" className="text-[3vw] font-extrabold" style={{ color: '#2ecc71' }}>Full-stack</div>
      </div>
      
    </div>
    </Draggable>
    <Draggable>
        <Trio/>
        </Draggable>
  
        <Draggable>
        <Quadro/>
        </Draggable>
  

      
        </div>
    
</div>

)

};