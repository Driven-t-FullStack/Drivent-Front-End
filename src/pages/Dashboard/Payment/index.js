import Title from '../../../components/Dashboard/Title';
import ModalityContainer from '../../../components/Dashboard/Payments/ModalityContainer';
import HotelContainer from '../../../components/Dashboard/Payments/HotelContainer';
import Button from '../../../components/Dashboard/Button';
import { useState } from 'react';
import styled from 'styled-components';
import { useEffect } from 'react';

export default function Payment() {
  const [totalPrice, setTotalPrice] = useState(0);
  const [modality, setModality] = useState(null);
  const [modalityPrice, setModalityPrice] = useState(0);
  const [hotel, setHotel] = useState(false);
  const [hotelPrice, setHotelPrice] = useState(0);
  useEffect(() => {
    if (hotel) {
      setTotalPrice(modalityPrice + hotelPrice);
    } else {
      setTotalPrice(modalityPrice);
    }
  }, [modalityPrice, hotel]);

  useEffect(() => {
    if (modality === 'Online' || modality === null) {
      setHotel(false);
      setHotelPrice(0);
    }
  }, [modality]);

  return (
    <>
      <Title>Ingresso e pagamento</Title>
      <ModalityContainer
        text="Primeiro, escolha sua modalidade de ingresso"
        options={[
          { title: 'Presencial', price: 250 },
          { title: 'Online', price: 100 },
        ]}
        modality={modality}
        setModality={setModality}
        setModalityPrice={setModalityPrice}
      />
      {modality === 'Presencial' && (
        <HotelContainer
          text="Ótimo! Agora escolha sua modalidade de hospedagem"
          options={[
            { title: 'Sem Hotel', price: 0 },
            { title: 'Com Hotel', price: 350 },
          ]}
          hotel={hotel}
          setHotel={setHotel}
          setHotelPrice={setHotelPrice}
        />
      )}
      {modality === 'Online' && (
        <>
          <SubTitle>Fechado! O total ficou em R${totalPrice}. Agora é só confirmar:</SubTitle>
          <Button>RESERVAR INGRESSO</Button>
        </>
      )}
      {/* {HotelClick && } */}
    </>
  );
}

const SubTitle = styled.h2`
  color: #8e8e8e;
  font-size: 20px;
  margin-bottom: 15px;
`;
