import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import { FaChevronUp } from 'react-icons/fa';

const FooterSection = styled.footer`
  background-color: var(--primary-color);
  color: #fff;
  padding: 40px 0 20px;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  text-align: center;
`;

const Copyright = styled.p`
  font-size: 0.9rem;
  margin-bottom: 20px;
  color: rgba(255, 255, 255, 0.8);
`;

const BackToTop = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: var(--secondary-color);
  color: #fff;
  border-radius: 50%;
  position: fixed;
  bottom: 30px;
  right: 30px;
  cursor: pointer;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s;
  opacity: 0.8;
  z-index: 99;

  &:hover {
    transform: translateY(-5px);
    opacity: 1;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }
`;

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterSection>
      <Container>
        <Copyright>
          Copyright {currentYear} © Malta Advogados - Advocacia em Goiânia
        </Copyright>
      </Container>
      <BackToTop to="hero" smooth={true} duration={800}>
        <FaChevronUp />
      </BackToTop>
    </FooterSection>
  );
};

export default Footer;