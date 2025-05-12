import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import AreasAtuacao from './components/AreasAtuacao/AreasAtuacao';
import Localizacao from './components/Localizacao/Localizacao';
import Depoimentos from './components/Depoimentos/Depoimentos';
import Diferenciais from './components/Diferenciais/Diferenciais';
import Contato from './components/Contato/Contato';
import Footer from './components/Footer/Footer.tsx';
import SEO from './components/SEO/SEO';
import './App.css';

const AppContainer = styled.div`
  font-family: 'Montserrat', sans-serif;
`;

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <HelmetProvider>
      <AppContainer>
        <SEO
          title="Malta Advocacia | Escritório de Advocacia Especializado"
          description="Escritório de advocacia com mais de 15 anos de experiência, oferecendo serviços jurídicos especializados em direito civil, trabalhista, tributário e empresarial."
        />
        <Header scrollPosition={scrollPosition} />
        <Hero />
        <AreasAtuacao />
        <Diferenciais />
        <Depoimentos />
        <Localizacao />
        <Contato />
        <Footer />
      </AppContainer>
    </HelmetProvider>
  );
}

export default App;
