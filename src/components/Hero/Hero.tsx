import React from 'react';
import styled from 'styled-components';
import { FaWhatsapp } from 'react-icons/fa';
import advogadaImg from '../../assets/images/advogada.png';

const HeroSection = styled.section`
  height: 100vh;
  width: 100%;
  background: linear-gradient(135deg, #2c3e50 0%, #1a252f 100%);
  color: white;
  display: flex;
  align-items: center;
  padding-top: 80px;
  overflow: hidden;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(5px);
    z-index: 0;
    opacity: 0.5;
  }

  &:hover {
    &.hero-section {
      cursor: pointer;
    }
  }
`;

const HeroContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 2;

  @media screen and (max-width: 992px) {
    flex-direction: column;
    justify-content: center;
    padding-top: 60px;
    text-align: center;
  }
`;

const HeroContent = styled.div`
  flex: 1;
  max-width: 700px;
  z-index: 3;
  position: relative;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);

  @media screen and (max-width: 992px) {
    margin-bottom: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 1.5rem;
  font-weight: 700;
  color: #fff;
  line-height: 1.2;
  white-space: nowrap;

  @media screen and (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  font-weight: 500;

  @media screen and (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const WhatsappButton = styled.a`
  display: inline-flex;
  align-items: center;
  padding: 15px 30px;
  background-color: #25D366;
  color: white;
  border-radius: 50px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  position: relative;
  z-index: 3;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.4);
    background-color: #20ba57;
  }

  svg {
    margin-right: 10px;
    font-size: 1.5rem;
  }
`;

const HeroImageContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  pointer-events: none; /* Permite que os eventos de mouse passem através deste elemento */
`;

const HeroImage = styled.img`
  width: 100%;
  max-width: 1200px;
  height: auto;
  object-fit: cover;
  opacity: 0.8;
  border-radius: 10px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.5));
  transition: all 0.5s ease;
  border: 2px solid transparent;
  pointer-events: none; /* Permite que os eventos de mouse passem através deste elemento */

  .hero-hover-active & {
    box-shadow: 0 0 30px 5px var(--secondary-color);
    border: 2px solid var(--secondary-color);
    filter: drop-shadow(0 0 15px var(--secondary-color));
  }

  @media screen and (max-width: 992px) {
    width: 100%;
  }
`;

const BackgroundPattern = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: radial-gradient(rgba(255, 255, 255, 0.1) 2px, transparent 2px);
  background-size: 30px 30px;
  opacity: 0.3;
  z-index: 0;
`;

const Hero: React.FC = () => {
  const [isHovering, setIsHovering] = React.useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <HeroSection
      id="hero"
      className={isHovering ? 'hero-hover-active' : ''}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <BackgroundPattern />
      <HeroImageContainer>
        <HeroImage src={advogadaImg} alt="Malta Advocacia - Advogada" />
      </HeroImageContainer>
      <HeroContainer>
        <HeroContent>          <HeroTitle>
          Para contratar um advogado,<br />
            chame no Whatsapp abaixo
          </HeroTitle>
          <HeroSubtitle>Malta Advocacia <br /> (62) 9 9463-5330</HeroSubtitle>
          <WhatsappButton href="https://wa.me/5562994635330" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp /> Fale conosco no WhatsApp
          </WhatsappButton>
        </HeroContent>
      </HeroContainer>
    </HeroSection>
  );
};

export default Hero;