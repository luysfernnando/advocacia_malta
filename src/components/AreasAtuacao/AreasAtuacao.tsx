import React from 'react';
import styled from 'styled-components';
import { FaGavel, FaUserInjured, FaHome, FaBuilding, FaHands, FaUserTie } from 'react-icons/fa';

const AreasSection = styled.section`
  padding: 100px 0;
  background-color: #f8f9fa;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  color: var(--primary-color);
  margin-bottom: 20px;
`;

const SectionSubtitle = styled.p`
  font-size: 1.1rem;
  text-align: center;
  color: #666;
  max-width: 700px;
  margin: 0 auto 60px;
`;

const AreasGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
`;

const AreaCard = styled.div`
  background-color: #fff;
  border-radius: 8px;
  padding: 30px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
  }

  &:hover svg {
    color: var(--secondary-color);
    transform: scale(1.1);
  }
`;

const AreaIcon = styled.div`
  font-size: 3rem;
  color: var(--primary-color);
  margin-bottom: 20px;
  transition: all 0.3s ease;

  svg {
    transition: all 0.3s ease;
  }
`;

const AreaTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: var(--primary-color);
`;

const AreaDescription = styled.p`
  color: #666;
  line-height: 1.6;
`;

const AreasAtuacao: React.FC = () => {
  const areas = [
    {
      title: 'Direito Criminal',
      description: 'Defesa em processos criminais, habeas corpus, recursos e revisões criminais.',
      icon: <FaGavel />,
    },
    {
      title: 'Direito Previdenciário',
      description: 'Aposentadoria, pensão por morte, auxílio-doença e outros benefícios do INSS.',
      icon: <FaUserInjured />,
    },
    {
      title: 'Direito Imobiliário',
      description: 'Contratos de compra e venda, locação, usucapião e regularização de imóveis.',
      icon: <FaHome />,
    },
    {
      title: 'Direito Empresarial',
      description: 'Constituição de empresas, contratos empresariais e resolução de conflitos.',
      icon: <FaBuilding />,
    },
    {
      title: 'Direito de Família',
      description: 'Divórcio, guarda de filhos, pensão alimentícia e inventários.',
      icon: <FaHands />,
    },
    {
      title: 'Direito Trabalhista',
      description: 'Reclamações trabalhistas, verbas rescisórias e direitos do trabalhador.',
      icon: <FaUserTie />,
    },
  ];

  return (
    <AreasSection id="areas-atuacao">
      <Container>
        <SectionTitle>Áreas de Atuação</SectionTitle>
        <SectionSubtitle>
          Nossa equipe conta com advogados especializados em diversas áreas do Direito
          para oferecer o melhor atendimento para cada caso.
        </SectionSubtitle>

        <AreasGrid>
          {areas.map((area, index) => (
            <AreaCard key={index}>
              <AreaIcon>{area.icon}</AreaIcon>
              <AreaTitle>{area.title}</AreaTitle>
              <AreaDescription>{area.description}</AreaDescription>
            </AreaCard>
          ))}
        </AreasGrid>
      </Container>
    </AreasSection>
  );
};

export default AreasAtuacao;