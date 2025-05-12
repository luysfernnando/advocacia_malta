import React from 'react';
import styled from 'styled-components';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import avatar1 from '../../assets/images/avatars/avatar1.jpg';
import avatar2 from '../../assets/images/avatars/avatar2.jpg';
import avatar3 from '../../assets/images/avatars/avatar3.jpg';

const DepoimentosSection = styled.section`
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

const DepoimentosContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  justify-content: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const DepoimentoCard = styled.div`
  background-color: #fff;
  border-radius: 8px;
  padding: 30px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
  }
`;

const QuoteIcon = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  font-size: 2rem;
  color: rgba(0, 0, 0, 0.05);
  z-index: 1;
`;

const DepoimentoText = styled.p`
  font-style: italic;
  margin-bottom: 20px;
  color: #555;
  line-height: 1.8;
  flex-grow: 1;
`;

const ClienteInfo = styled.div`
  display: flex;
  align-items: flex-start;
  margin-top: auto;
  padding-top: 10px;
`;

const ClienteImagem = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 15px;
  overflow: hidden;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ClienteDetalhe = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const ClienteNome = styled.h4`
  margin: 0 0 3px 0;
  color: var(--primary-color);
`;

const ClienteLocal = styled.p`
  color: #777;
  font-size: 0.9rem;
  margin: 0;
`;

const Rating = styled.div`
  margin-top: 4px;
  color: #ffc107;
  display: flex;
  gap: 3px;
  font-size: 0.9rem;
`;

const Depoimentos: React.FC = () => {
  const depoimentos = [
    {
      texto: "Excelente escritório! A equipe da Malta Advocacia foi extremamente competente e dedicada ao meu caso. Resolveram o meu processo de forma rápida e eficiente. Super recomendo!",
      nome: "Carlos Silva",
      local: "Goiânia, GO",
      avatar: avatar1,
    },
    {
      texto: "Profissionais sérios e comprometidos. Meu caso previdenciário foi resolvido com sucesso graças à competência da Malta Advocacia. Agradeço imensamente pelo atendimento personalizado.",
      nome: "Maria Oliveira",
      local: "Anápolis, GO",
      avatar: avatar2,
    },
    {
      texto: "O melhor escritório de advocacia que já contratei! Sempre me mantiveram informado sobre o andamento do processo e conseguiram um resultado melhor do que o esperado.",
      nome: "João Santos",
      local: "Brasília, DF",
      avatar: avatar3,
    },
  ];

  return (
    <DepoimentosSection id="depoimentos">
      <Container>
        <SectionTitle>Depoimentos</SectionTitle>
        <SectionSubtitle>
          Veja o que nossos clientes dizem sobre o nosso trabalho
        </SectionSubtitle>

        <DepoimentosContainer>
          {depoimentos.map((depoimento, index) => (
            <DepoimentoCard key={index}>
              <QuoteIcon>
                <FaQuoteLeft />
              </QuoteIcon>
              <DepoimentoText>"{depoimento.texto}"</DepoimentoText>
              <ClienteInfo>
                <ClienteImagem>
                  <img src={depoimento.avatar} alt={`Foto de ${depoimento.nome}`} />
                </ClienteImagem>
                <ClienteDetalhe>
                  <ClienteNome>{depoimento.nome}</ClienteNome>
                  <ClienteLocal>{depoimento.local}</ClienteLocal>
                  <Rating>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </Rating>
                </ClienteDetalhe>
              </ClienteInfo>
            </DepoimentoCard>
          ))}
        </DepoimentosContainer>
      </Container>
    </DepoimentosSection>
  );
};

export default Depoimentos;