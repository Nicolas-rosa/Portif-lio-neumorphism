import React from 'react';
import styled from 'styled-components';
import 'tailwindcss/tailwind.css';

const Card = ({ title, skills }) => {
  return (
    <CardContainer href="/portifolio" className="mt-10  neumorphism group relative block w-full sm:w-[40vw] md:w-[30vw] lg:w-[20vw] h-[30vh] sm:h-80 lg:h-96 ring-2 ring-blue-300 transition-transform duration-500">
      <BorderSpan className="absolute inset-0  hover:ring-2 w-[20vw] hover:ring-blue-300"></BorderSpan>
      <ContentContainer className="relative  flex h-full items-center w-[20vw] justify-center bg-[#c7c7c7] transition-transform group-hover:scale-105 ">
        <FrontContent className="!pt-0 h-[20vw] transition-opacity ring-blue-300 group-hover:absolute group-hover:opacity-0  duration-500">
          <Title className="font-bold text-[6vw] sm:text-[3.5vh] text-blue-400">{title}</Title>
        </FrontContent>
        <BackContent className="absolute opacity-0 transition-opacity group-hover:relative group-hover:opacity-100">
          <Title className='text-blue-600 font-black'>{title}</Title>
          <Skills className='text-blue-400 font-extrabold'>{skills}</Skills>
          <LearnMore className="mt-2 font-bold hover:text-blue-200 text-blue-300 transition-colors">Saiba Mais</LearnMore>
        </BackContent>
      </ContentContainer>
    </CardContainer>
  );
};

const Trio = () => {
  return (
    <TrioContainer className="flex justify-center">
      <Card title="Front-End" skills="React, Tailwind, JavaScript, React, Vue.js" />
      <Card title="Full-Stack" skills="JavaScript, Vite , Java, PHP, SQL" />
      <Card title="Back-End" skills="Node.js, Python, SQL, Java, CRUD, RESTful APIs" />
    </TrioContainer>
  );
};

export default Trio;

const TrioContainer = styled.div`
  flex-direction: row;
  display: flex;
  justify-content: center;
  gap: 2vw; /* Ajuste o espaço entre os cards */
`;

const CardContainer = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  transition: all 0.6s ease;
  width: 100%;
  max-width: 350px; /* Aumente a largura máxima dos cards */
  border-radius: 10px; /* Borda arredondada para o efeito neumorphism */
`;

const BorderSpan = styled.span`
  border: 2px dashed blue;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 10px; /* Borda arredondada para o efeito neumorphism */
  box-shadow: 8px 8px 15px rgba(0, 0, 0, 0.2), -8px -8px 15px rgba(255, 255, 255, 0.9);
  background-color: #c7c7c7; /* Cor de fundo neumorphism */
`;

const FrontContent = styled.div`
  @apply pt-0 transition-opacity;
`;

const BackContent = styled.div`
  @apply absolute opacity-0 transition-opacity;
`;

const Title = styled.h2`
  @apply text-xl font-bold mb-2 text-blue-400; /* Cor do título em azul claro */
  text-align: center; /* Centraliza o texto */
`;

const Skills = styled.p`
  @apply text-center text-gray-600;
`;

const LearnMore = styled.p`
  @apply mt-8 font-bold cursor-pointer;
`;