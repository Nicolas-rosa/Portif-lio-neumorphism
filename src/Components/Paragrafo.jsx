import React from 'react';
import styled from 'styled-components';
import Draggable from 'react-draggable';

const Paragrafo = () => {
  return (
    <Draggable>
      <Container>
        <div className="flex flex-col items-center">
          <ProfileImage className="neumorphism flex items-center justify-center rounded-full hover:bg-[#40bfff6e]">
            <img
              alt="Foto do desenvolvedor fullstack sorrindo"
              className="hover:w-[23vw] transition-all duration-500 hover:h-[23vw] h-full w-full rounded-full shadow-md object-cover object-top hover:ring-2 hover:ring-blue-500"
              src="https://i.ibb.co/X5v1mRh/Whats-App-Image-2024-06-08-at-21-41-41.jpg"
            />
          </ProfileImage>
          <TextContainer className="mt-[1vw] text-center max-w-2xl">
            <h2 className="font-bold text-blue-400">Sobre Mim</h2>
            <Description className="mt-[3vw] hover:ring-2 hover:ring-blue-500 hover:text-black neumorphismIN shadow-md rounded-full p-[2vw]">
              <p className="text-gray-700 font-extrabold textShadow">
                Olá! Eu sou um desenvolvedor fullstack com experiência em diversas tecnologias e frameworks. Adoro criar soluções eficientes e inovadoras para problemas complexos. Estou sempre em busca de novos desafios e oportunidades para aprender e crescer profissionalmente.
              </p>
            </Description>
          </TextContainer>
        </div>
      </Container>
    </Draggable>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProfileImage = styled.div`
  height: 25vw;
  width: 25vw;
  
  @media (max-width: 768px) {
    height: 35vw; /* Aumenta a altura em dispositivos móveis */
    width: 35vw; /* Aumenta a largura em dispositivos móveis */
  }

  @media (max-width: 480px) {
    height: 40vw; /* Aumenta a altura em telas muito pequenas */
    width: 40vw; /* Aumenta a largura em telas muito pequenas */
  }
`;

const TextContainer = styled.div`
  margin-top: 1vw;
  text-align: center;
  max-width: 2xl;

  h2 {
    font-size: 2.5vw; /* Tamanho padrão do texto */
    
    @media (max-width: 768px) {
      font-size: 4vw; /* Aumenta o tamanho do texto em dispositivos móveis */
    }

    @media (max-width: 480px) {
      font-size: 5vw; /* Aumenta o tamanho do texto em telas muito pequenas */
    }
  }
`;

const Description = styled.div`
 margin-bottom: 5vw;
  margin-top: 3vw;
  width: 50vw;
  height: 20vw;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    width: 80vw; /* Aumenta a largura em dispositivos móveis */
    height: 30vw; /* Aumenta a altura em dispositivos móveis */
  }

  @media (max-width: 480px) {
    width: 90vw; /* Aumenta a largura em telas muito pequenas */
    height: 40vw; /* Aumenta a altura em telas muito pequenas */
  }

  p {
    font-size: 1.5vw; /* Tamanho padrão do texto */
    
    @media (max-width: 768px) {
      font-size: 2.5vw; /* Aumenta o tamanho do texto em dispositivos móveis */
    }

    @media (max-width: 480px) {
      font-size: 3vw; /* Aumenta o tamanho do texto em telas muito pequenas */
    }
  }
`;

export default Paragrafo;