import React from 'react';
import Draggable from 'react-draggable';
const Animado = () => {
  return (
<Draggable>

    <div className="neu  bg-white w-48 h-64 rounded-lg">
      <div className="flex p-2 gap-1">
        <div className>
          <span className="bg-blue-500 inline-block center w-3 h-3 rounded-full" />
        </div>
        <div className="circle">
          <span className="bg-purple-500 inline-block center w-3 h-3 rounded-full" />
        </div>
        <div className="circle">
          <span className="bg-pink-500 box inline-block center w-3 h-3 rounded-full" />
        </div>
      </div>
      <div className="card__content">
      </div>
    </div></Draggable>
  );
}

export default Animado;
