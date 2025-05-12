import React from 'react';
import styled from 'styled-components';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import { FaMapMarkerAlt } from 'react-icons/fa';

const LocalizacaoSection = styled.section`
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

const MapContainer = styled.div`
  height: 450px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`;

const LoadingContainer = styled.div`
  height: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f8f9fa;
  border-radius: 8px;
`;

const ErrorContainer = styled.div`
  height: 450px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f8f9fa;
  border-radius: 8px;
  color: var(--primary-color);
  padding: 20px;
  text-align: center;
`;

const ErrorIcon = styled.div`
  font-size: 3rem;
  color: var(--accent-color);
  margin-bottom: 20px;
`;

const mapContainerStyle = {
  width: '100%',
  height: '100%',
};

const center = {
  lat: -16.6799, // Coordenadas de Goiânia
  lng: -49.255,
};

const options = {
  disableDefaultUI: true,
  zoomControl: true,
};

const Localizacao: React.FC = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY || "", // Usando variável de ambiente para a API key
  });

  if (loadError) {
    return (
      <LocalizacaoSection id="localizacao">
        <Container>
          <SectionTitle>Nossa Localização</SectionTitle>
          <SectionSubtitle>
            Venha nos visitar em nosso endereço no centro de Goiânia
          </SectionSubtitle>

          <ErrorContainer>
            <ErrorIcon>
              <FaMapMarkerAlt />
            </ErrorIcon>
            <h3>Erro ao carregar o mapa</h3>
            <p>
              Endereço: Rua 10, Nº 10, Qd. F-10, Lt. 10, St. Bueno Goiânia – GO, 77777-999
            </p>
          </ErrorContainer>
        </Container>
      </LocalizacaoSection>
    );
  }

  if (!isLoaded) {
    return (
      <LocalizacaoSection id="localizacao">
        <Container>
          <SectionTitle>Nossa Localização</SectionTitle>
          <SectionSubtitle>
            Venha nos visitar em nosso endereço no centro de Goiânia
          </SectionSubtitle>

          <LoadingContainer>
            <p>Carregando mapa...</p>
          </LoadingContainer>
        </Container>
      </LocalizacaoSection>
    );
  }

  return (
    <LocalizacaoSection id="localizacao">
      <Container>
        <SectionTitle>Nossa Localização</SectionTitle>
        <SectionSubtitle>
          Venha nos visitar em nosso endereço no centro de Goiânia
        </SectionSubtitle>

        <MapContainer>
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={center}
            zoom={15}
            options={options}
          >
            <Marker position={center} />
          </GoogleMap>
        </MapContainer>
      </Container>
    </LocalizacaoSection>
  );
};

export default Localizacao;