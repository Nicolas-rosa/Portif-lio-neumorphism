import React from 'react';
import styled from 'styled-components';

// Estilização do Círculo
const StyledComponent = styled.div`
    border: 2px solid rgba(64, 191, 255, 0.5);
    border-radius: 50%;
    transition: all 0.3s ease;
    background: linear-gradient(145deg, #c7c7c7, #b0b0b0); // Gradiente de fundo
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20vw; /* Usando vw para responsividade */
    height: 20vw; /* Usando vw para responsividade */
    max-width: 220px; /* Limita o tamanho máximo */
    max-height: 220px; /* Limita o tamanho máximo */
    margin: 20px;
    box-shadow: 
        15px 15px 30px rgba(0, 0, 0, 0.3), // Sombra mais escura para profundidade
        -15px -15px 30px rgba(255, 255, 255, 0.7); // Sombra mais clara para iluminação
    animation: fade-in 1s ease-in-out;
    transition: box-shadow 0.3s ease;

    &:hover {
        background: linear-gradient(145deg, #e6e6e6, #ffffff);
        animation: pulse 0.6s infinite;
        box-shadow: 
            20px 20px 40px rgba(0, 0, 0, 0.4),
            -20px -20px 40px rgba(255, 255, 255, 0.8); // Efeito de hover mais intenso
    }

    @keyframes pulse {
        0% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.2);
        }
        100% {
            transform: scale(1);
        }
    }

    @media (max-width: 600px) {
     
        width: 23vw; /* Aumenta a largura em telas menores */
        height: 23vw; /* Aumenta a altura em telas menores */
    }
    @media (max-width: 300px) {
     
     width: 30vw; /* Aumenta a largura em telas menores */
     height: 30vw; /* Aumenta a altura em telas menores */
 }
`;

// Estilização do Círculo Interno
const InnerCircle = styled.div`
    position: relative;
    width: 14vw; /* Usando vw para responsividade */
    height: 14vw; /* Usando vw para responsividade */
    max-width: 140px; /* Limita o tamanho máximo */
    max-height: 140px; /* Limita o tamanho máximo */
    background: linear-gradient(145deg, #c7c7c7, #b0b0b0);
    border-radius: 50%;
    box-shadow: 
        inset -10px 10px 20px rgba(255, 255, 255, 0.8),
        inset 10px -10px 20px rgba(0, 0, 0, 0.2);
    transition: box-shadow 0.3s ease;

    &:hover {
        box-shadow: 
            inset -5px 5px 10px rgba(255, 255, 255, 0.6),
            inset 5px -5px 10px rgba(0, 0, 0, 0.1);
    }

    @media (max-width: 600px) {
        width: 14vw; /* Aumenta a largura do círculo interno em telas menores */
        height: 14vw; /* Aumenta a altura do círculo interno em telas menores */
    }
    @media (max-width: 300px) {
     
     width: 24vw; /* Aumenta a largura em telas menores */
     height: 24vw; /* Aumenta a altura em telas menores */
 }
`;

// Estilização do Círculo de Progresso
const StyledCircle = styled.circle`
    transition: all 0.5s ease-in-out;
`;

// Estilização do Texto de Porcentagem
const PercentageText = styled.text`
    font-size: 3.2rem; /* Aumentado de 2rem para 3.2rem */
    font-weight: bolder;
    fill: ${({ color }) => color};
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    transition: text-shadow 0.3s ease;

    &:hover {
        text-shadow: 
            2px 2px 4px rgba(0, 217, 255, 0.2),
            2px 2px 10px rgba(0, 170, 255, 0.3),
            2px 2px 20px rgba(0, 170, 255, 0.2);
    }

    @media (max-width: 600px) {
        font-size: 3.3rem; /* Aumenta o tamanho da fonte em telas menores */
    }
    @media (max-width: 300px) {
     font-size: 3rem;
 }
`;

const Circle = ({ percentage, color }) => {
    const radius = 60; // Raio do círculo
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percentage / 100) * circumference;

    return (
        <StyledComponent>
            <InnerCircle className='neumorphismIN'>
                <svg width="100%" height="100%" viewBox="0 0 140 140"> {/* Ajustando o viewBox */}
                    <circle
                        className="text-gray-400 neumorphism"
                        cx="70" // Centraliza no SVG
                        cy="70" // Centraliza no SVG
                        r={radius}
                        fill="none"
                        strokeWidth="8"
                    />
                    <StyledCircle
                        cx="70" // Centraliza no SVG
                        cy="70" // Centraliza no SVG
                        r={radius}
                        fill="none"
                        stroke={color}
                        strokeWidth="9"
                        strokeDasharray={circumference}
                        strokeDashoffset={offset}
                        strokeLinecap="round"
                    />
                    <PercentageText x="50%" y="50%" textAnchor="middle" dy=".3em" color={color}>
                        {percentage}%
                    </PercentageText>
                </svg>
            </InnerCircle>
        </StyledComponent>
    );
};

export default Circle;