import React from 'react';
import styled from 'styled-components';
import { FaEnvelope, FaPhone, FaClock, FaMapMarkerAlt } from 'react-icons/fa';

const ContatoSection = styled.section`
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

const ContatoContainer = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContatoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  width: 100%;
  max-width: 800px;
`;

const ContatoItem = styled.div`
  text-align: center;
`;

const ContatoIcon = styled.div`
  font-size: 2.5rem;
  color: var(--secondary-color);
  margin-bottom: 15px;
`;

const ContatoTitle = styled.h3`
  font-size: 1.3rem;
  color: var(--primary-color);
  margin-bottom: 10px;
`;

const ContatoInfo = styled.p`
  color: #666;
  line-height: 1.6;
`;

const FormularioContato = styled.div`
  margin-top: 60px;
  width: 100%;
  max-width: 700px;
`;

const FormTitle = styled.h3`
  text-align: center;
  font-size: 1.5rem;
  color: var(--primary-color);
  margin-bottom: 30px;
`;

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FormGroup = styled.div`
  &.full-width {
    grid-column: span 2;

    @media (max-width: 768px) {
      grid-column: span 1;
    }
  }
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  color: var(--primary-color);
`;

const FormInput = styled.input`
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  transition: all 0.3s;

  &:focus {
    border-color: var(--secondary-color);
    box-shadow: 0 0 0 2px rgba(192, 167, 115, 0.2);
    outline: none;
  }
`;

const FormTextArea = styled.textarea`
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  transition: all 0.3s;
  resize: vertical;
  min-height: 150px;

  &:focus {
    border-color: var(--secondary-color);
    box-shadow: 0 0 0 2px rgba(192, 167, 115, 0.2);
    outline: none;
  }
`;

const FormButton = styled.button`
  background-color: var(--secondary-color);
  color: white;
  border: none;
  padding: 12px 25px;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s;
  margin-top: 20px;

  &:hover {
    background-color: var(--primary-color);
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  grid-column: span 2;

  @media (max-width: 768px) {
    grid-column: span 1;
  }
`;

const Contato: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você implementaria a lógica para enviar o formulário
    alert('Mensagem enviada com sucesso!');
  };

  return (
    <ContatoSection id="contato">
      <Container>
        <SectionTitle>Contato</SectionTitle>
        <SectionSubtitle>
          Entre em contato conosco e descubra como podemos ajudar no seu caso
        </SectionSubtitle>

        <ContatoContainer>
          <ContatoGrid>
            <ContatoItem>
              <ContatoIcon>
                <FaEnvelope />
              </ContatoIcon>
              <ContatoTitle>E-mail</ContatoTitle>
              <ContatoInfo>contato@maltaadvogados.com.br</ContatoInfo>
            </ContatoItem>

            <ContatoItem>
              <ContatoIcon>
                <FaPhone />
              </ContatoIcon>
              <ContatoTitle>Telefone</ContatoTitle>
              <ContatoInfo>(62) 9 9463-5330</ContatoInfo>
            </ContatoItem>

            <ContatoItem>
              <ContatoIcon>
                <FaClock />
              </ContatoIcon>
              <ContatoTitle>Horário</ContatoTitle>
              <ContatoInfo>Segunda à Sexta: 8:00h às 18:00h</ContatoInfo>
            </ContatoItem>

            <ContatoItem>
              <ContatoIcon>
                <FaMapMarkerAlt />
              </ContatoIcon>
              <ContatoTitle>Endereço</ContatoTitle>
              <ContatoInfo>Rua 10, Nº 10, Qd. F-10, Lt. 10, St. Bueno Goiânia – GO, 77777-999</ContatoInfo>
            </ContatoItem>
          </ContatoGrid>

          <FormularioContato>
            <FormTitle>Envie-nos uma mensagem</FormTitle>

            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <FormLabel>Nome</FormLabel>
                <FormInput type="text" placeholder="Seu nome" required />
              </FormGroup>

              <FormGroup>
                <FormLabel>E-mail</FormLabel>
                <FormInput type="email" placeholder="Seu e-mail" required />
              </FormGroup>

              <FormGroup>
                <FormLabel>Telefone</FormLabel>
                <FormInput type="tel" placeholder="Seu telefone" />
              </FormGroup>

              <FormGroup>
                <FormLabel>Assunto</FormLabel>
                <FormInput type="text" placeholder="Assunto da mensagem" required />
              </FormGroup>

              <FormGroup className="full-width">
                <FormLabel>Mensagem</FormLabel>
                <FormTextArea placeholder="Digite sua mensagem aqui..." required />
              </FormGroup>

              <ButtonContainer>
                <FormButton type="submit">Enviar Mensagem</FormButton>
              </ButtonContainer>
            </Form>
          </FormularioContato>
        </ContatoContainer>
      </Container>
    </ContatoSection>
  );
};

export default Contato;