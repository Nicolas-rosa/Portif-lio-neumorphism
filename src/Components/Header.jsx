import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faEnvelope, faBriefcase, faFileAlt } from '@fortawesome/free-solid-svg-icons';

const GlobalStyle = createGlobalStyle`
  body {
    font-size: 16px; /* Tamanho de fonte padrão */
    transition: font-size 0.3s ease;
  }
`;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <GlobalStyle />
      <StyledHeader className=''>
        <HamburgerButton 
          onClick={toggleMenu} 
          aria-expanded={isMenuOpen} 
          aria-label="Toggle menu"
          isOpen={isMenuOpen}
        >
          <span className={isMenuOpen ? 'open' : ''}></span>
          <span className={isMenuOpen ? 'open' : ''}></span>
          <span className={isMenuOpen ? 'open' : ''}></span>
        </HamburgerButton>
        <NavMenu isOpen={isMenuOpen}>
          <Button href="/">
            <FontAwesomeIcon icon={faHome} /> Home
          </Button>
          <Button href="/contato">
            <FontAwesomeIcon icon={faEnvelope} /> Contato
          </Button>
          <Button href="/portifolio">
            <FontAwesomeIcon icon={faBriefcase} /> Portfólio
          </Button>
          <Button href="/curriculo">
            <FontAwesomeIcon icon={faFileAlt} /> Currículo
          </Button>
          <div className="mr-[-3vw] neumorphismT transition-all duration-1000 hover:ring-2 hover:ring-blue-500 flex h-[6vw] w-[25vw] bg-gradient-to-(#b3b3b3, #d5d5d5); items-center justify-center rounded-full hover:bg-[#40bfff24]">
          <h2 class="text-[2vw] font-bold text-blue-400 hover:text-[#79aaff] mb-[5%] text-center 
            transition-transform transform hover:scale-105 
            animate-fade-in">
              Nicolas FCR
</h2>
          </div>

        </NavMenu>
      </StyledHeader>
    </>
  );
};
const StyledHeader = styled.header`
  gap: 5vw;
  margin: auto;
  display: flex;
  width: 95vw;
  justify-content: space-between;
  align-items: center;
  padding: 40px 60px; /* Padding padrão para telas maiores */
  border-radius: 102px;
  background: linear-gradient(135deg, #b3b3b3, #d5d5d5);
  box-shadow: -11px 11px 22px #8b8b8b, 11px -11px 22px #ffffff;
  position: relative;
  z-index: 10;

  @media (max-width: 768px) {
    margin: 2vh;
    width: 60px; /* Mantenha a largura em 100% */
    height: 18%;
    padding: 10px 20px; /* Reduzindo o padding para telas menores */
    justify-content: flex-start; /* Alinha os itens à esquerda */
  }
`;

const HamburgerButton = styled.button`
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 1.5rem; /* Largura do botão hamburguer */
  height: 1.5rem; /* Altura do botão hamburguer */
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  span {
    width: 100%;
    height: 0.2rem; /* Altura do span */
    background: #0099ff;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    &.open {
      background: #ff0000; /* Cor ao abrir */
    }
  }

  @media (max-width: 768px) {
    display: flex; /* Exibe o botão hamburguer em telas menores */
  }
`;
const NavMenu = styled.nav`
  display: flex;
  align-items: center;
  transition: opacity 0.3s ease-in-out;

  @media (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(247, 251, 255, 0.805);
    justify-content: center;
    align-items: center;
    transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(-100%)')};
    opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
    z-index: 5;
  }
`;



const Button = styled.a`
  position: relative;
  text-align: center;
  display: inline-block;
  padding: 10px 20px; /* Mantém o padding */
  margin: 0 20px; /* Aumenta a margem para aumentar a distância entre os botões */
  border-radius: 50px;
  background: #c7c7c7;
  box-shadow: inset -15px 15px 30px #a9a9a9,
              inset 15px -15px 30px #e5e5e5;
  color: #0099ff; /* Texto branco */
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  font-size: 2vw; /* Tamanho inicial do texto */
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); /* Sombra de texto inicial */

  &:hover {
    border-radius: 50px;
    background: #40bfff24;
    transform: scale(1.05); /* Aumenta levemente o tamanho */
    color: #ffffff;
    box-shadow: inset -5px 5px 10px #adadad,
                inset 5px -5px 10px #e1e1e1;
    font-size: 2.2vw; /* Aumenta o tamanho do texto no hover */
    text-shadow: 0 3px 6px rgba(0, 0, 0, 0.3); /* Aumenta a sombra do texto no hover */
  }

  @media (max-width: 768px) { /* Media query para dispositivos pequenos */
    padding: 8px 15px; /* Diminui o padding ainda mais */
    margin: 0 5px; /* Ajusta a margem para dispositivos pequenos */
    margin-bottom: 2vw;
    font-size: 6vw; /* Aumenta o tamanho da fonte */
    box-shadow: none;

    &:hover {
      background: #ffffffaa;
    transform: scale(1.05); /* Aumenta levemente o tamanho */
    color: #277eff;
    box-shadow: inset -5px 5px 10px #adadad,
                inset 5px -5px 10px #e1e1e1;
    font-size: 7.2vw; /* Aumenta o tamanho do texto no hover */
  }
    
  }
`;

export default Header;