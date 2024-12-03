import React, { useEffect, useState } from 'react';
import Draggable from 'react-draggable';
import styled, { keyframes } from 'styled-components';

// Animação de movimento
const slideIn = keyframes`
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  50% {
    transform: translateX(0);
    opacity: 1;
  }
  100% {
    transform: translateX(100%);
    opacity: 0;
  }
`;

// Estilo do container do aviso
const AvisoContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column; /* Adiciona flex-direction para empilhar os textos */
  margin-top: 20%;
  z-index: 50;
`;

// Estilo do texto com animação
const AvisoText = styled.h1`
  color: #3b82f6; /* Cor azul */
  font-weight: 800; /* font-extrabold */
  font-size: 2vw;
  transform: rotate(-85deg);
  animation: ${slideIn} 5s linear infinite; /* Animação em loop */
  margin: 0; /* Remove margens padrão */

  @media (max-width: 600px) {
        font-size: 1.5; /* Aumenta o tamanho da fonte em telas menores */
    }
    @media (max-width: 300px) {
     font-size: 1rem;
 }
`;

const Aviso = () => {
  return (
    <Draggable>
      <AvisoContainer>
        <AvisoText>Vários itens podem ser arrastados</AvisoText>
        <AvisoText>Inclusive esse</AvisoText>
      </AvisoContainer>
    </Draggable>
  );
}

export default Aviso;