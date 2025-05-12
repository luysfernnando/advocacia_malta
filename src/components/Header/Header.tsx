import React, { useState } from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';

const HeaderContainer = styled.header<{ scrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: ${(props) => (props.scrolled ? '15px 0' : '25px 0')};
  background-color: ${(props) => (props.scrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent')};
  z-index: 1000;
  transition: all 0.3s ease;
  box-shadow: ${(props) => (props.scrolled ? '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none')};
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Logo = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
  cursor: pointer;
`;

const LogoLink = styled(Link)<{ scrolled: boolean }>`
  color: ${(props) => (props.scrolled ? 'var(--primary-color)' : 'white')};
  text-decoration: none;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -5px;
    left: 0;
    background-color: var(--secondary-color);
    transition: width 0.3s;
  }

  &:hover:after {
    width: 100%;
  }
`;

const NavMenu = styled.nav<{ isOpen: boolean }>`
  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 250px;
    background-color: var(--primary-color);
    padding: 80px 30px;
    transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(100%)')};
    transition: transform 0.3s ease-in-out;
    z-index: 999;
    box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
  }
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const NavItem = styled.li`
  margin: 0 15px;

  @media (max-width: 768px) {
    margin: 15px 0;
  }
`;

const NavLink = styled(Link)<{ scrolled: boolean }>`
  font-weight: 500;
  position: relative;
  color: ${(props) => (props.scrolled ? 'var(--primary-color)' : 'white')};
  cursor: pointer;

  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -5px;
    left: 0;
    background-color: var(--secondary-color);
    transition: width 0.3s;
  }

  &:hover:after {
    width: 100%;
  }

  @media (max-width: 768px) {
    color: white;
    font-size: 1.2rem;
  }
`;

const MenuToggle = styled.div`
  display: none;
  cursor: pointer;
  font-size: 1.5rem;
  z-index: 1000;

  @media (max-width: 768px) {
    display: block;
  }
`;

interface HeaderProps {
  scrollPosition: number;
}

const Header: React.FC<HeaderProps> = ({ scrollPosition }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrolled = scrollPosition > 50;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <HeaderContainer scrolled={scrolled}>
      <HeaderContent>
        <Logo>
          <LogoLink to="hero" smooth={true} duration={500} scrolled={scrolled}>
            Malta Advocacia
          </LogoLink>
        </Logo>

        <MenuToggle onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </MenuToggle>

        <NavMenu isOpen={isMenuOpen}>
          <NavList>
            <NavItem>
              <NavLink to="hero" smooth={true} duration={500} onClick={closeMenu} scrolled={scrolled}>
                Início
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="areas-atuacao" smooth={true} duration={500} onClick={closeMenu} scrolled={scrolled}>
                Áreas de Atuação
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="diferenciais" smooth={true} duration={500} onClick={closeMenu} scrolled={scrolled}>
                Nossos Diferenciais
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="depoimentos" smooth={true} duration={500} onClick={closeMenu} scrolled={scrolled}>
                Depoimentos
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="localizacao" smooth={true} duration={500} onClick={closeMenu} scrolled={scrolled}>
                Localização
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="contato" smooth={true} duration={500} onClick={closeMenu} scrolled={scrolled}>
                Contato
              </NavLink>
            </NavItem>
          </NavList>
        </NavMenu>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;