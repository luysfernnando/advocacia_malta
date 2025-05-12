import React from 'react';
import styled from 'styled-components';
import { FaGlobe, FaHandshake, FaBalanceScale, FaMoneyBillWave } from 'react-icons/fa';

const DiferenciaisSection = styled.section`
  padding: 100px 0;
  background-color: #fff;
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

const DiferenciaisContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
`;

const DiferencialCard = styled.div`
  flex: 1;
  min-width: 250px;
  max-width: 500px;
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 40px 30px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  text-align: center;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }
`;

const DiferencialIcon = styled.div`
  font-size: 2.5rem;
  color: var(--secondary-color);
  margin-bottom: 20px;
`;

const DiferencialTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 15px;
  color: var(--primary-color);
`;

const DiferencialDescription = styled.p`
  color: #666;
  line-height: 1.6;
`;

const Diferenciais: React.FC = () => {
  const diferenciais = [
    {
      icon: <FaGlobe />,
      title: 'Atendemos em todo o Brasil',
      description: 'Nossa equipe está preparada para atender clientes em qualquer estado brasileiro, garantindo acessibilidade e comodidade para todos.',
    },
    {
      icon: <FaHandshake />,
      title: 'Atendemos clientes de fora do Brasil',
      description: 'Contamos com atendimento internacional para brasileiros residentes no exterior que precisam de assistência jurídica no Brasil.',
    },
    {
      icon: <FaBalanceScale />,
      title: 'Atuamos em mais de 3 mil processos',
      description: 'Com vasta experiência forense, nosso escritório já atuou em mais de 3 mil processos nas diversas áreas do Direito.',
    },
    {
      icon: <FaMoneyBillWave />,
      title: 'Mais de 7 anos no mercado',
      description: 'Com mais de 7 anos de experiência e já recuperamos mais de 2 milhões de reais para nossos clientes em diferentes causas.',
    },
  ];

  return (
    <DiferenciaisSection id="diferenciais">
      <Container>
        <SectionTitle>Nossos Diferenciais</SectionTitle>
        <SectionSubtitle>
          Conheça os benefícios que fazem da Malta Advocacia a escolha certa para cuidar do seu caso
        </SectionSubtitle>

        <DiferenciaisContainer>
          {diferenciais.map((diferencial, index) => (
            <DiferencialCard key={index}>
              <DiferencialIcon>{diferencial.icon}</DiferencialIcon>
              <DiferencialTitle>{diferencial.title}</DiferencialTitle>
              <DiferencialDescription>{diferencial.description}</DiferencialDescription>
            </DiferencialCard>
          ))}
        </DiferenciaisContainer>
      </Container>
    </DiferenciaisSection>
  );
};

export default Diferenciais;