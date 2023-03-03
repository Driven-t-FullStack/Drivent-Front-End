import Title from '../../../../components/Dashboard/Title';
import ModalityContainer from '../../../../components/Dashboard/Payments/ModalityContainer';
import HotelContainer from '../../../../components/Dashboard/Payments/HotelContainer';
import { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useEffect } from 'react';
import { useContext } from 'react';
import UserContext from '../../../../contexts/UserContext';
import Button from '../../../../components/Form/Button';

export default function ChooseTicket({ setFinishPayment }) {
  const [totalPrice, setTotalPrice] = useState(0);
  const [modality, setModality] = useState(null);
  const [modalityPrice, setModalityPrice] = useState(0);
  const [hotel, setHotel] = useState(null);
  const [hotelPrice, setHotelPrice] = useState(0);
  const { userData } = useContext(UserContext);
  const { token } = userData;
  const CONFIG = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  useEffect(() => {
    if (hotel) {
      setTotalPrice(modalityPrice + hotelPrice);
    } else {
      setTotalPrice(modalityPrice);
    }
  }, [modalityPrice, hotel]);

  useEffect(() => {
    if (modality === 'Online' || modality === null) {
      setHotel(null);
      setHotelPrice(0);
    }
  }, [modality]);

  async function submitPaymentInfos() {
    let body = {};
    if (hotel === 'Com Hotel') {
      body = {
        name: `${modality} + ${hotel}`,
        price: modalityPrice + hotelPrice,
        isRemote: false,
        includesHotel: true,
      };
    } else if (hotel === 'Sem Hotel') {
      body = {
        name: `${modality} + ${hotel}`,
        price: modalityPrice,
        isRemote: false,
        includesHotel: false,
      };
    } else {
      body = {
        name: `${modality}`,
        price: modalityPrice,
        isRemote: true,
        includesHotel: false,
      };
    }

    const ticketType = await axios.post('http://localhost:4000/tickets/types', body, CONFIG);
    const ticket = await axios.post('http://localhost:4000/tickets', { ticketTypeId: ticketType.data.id }, CONFIG);
    setFinishPayment(true);
  }

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
          setHotel={setHotel}
          setHotelPrice={setHotelPrice}
        />
      )}
      {modality === 'Online' && (
        <>
          <SubTitle>Fechado! O total ficou em R${totalPrice}. Agora é só confirmar:</SubTitle>
          <Button onClick={submitPaymentInfos}>RESERVAR INGRESSO</Button>
        </>
      )}
      {hotel !== null && (
        <>
          <SubTitle>Fechado! O total ficou em R${totalPrice}. Agora é só confirmar:</SubTitle>
          <Button onClick={submitPaymentInfos}>RESERVAR INGRESSO</Button>
        </>
      )}
    </>
  );
}

const SubTitle = styled.h2`
  color: #8e8e8e;
  font-size: 20px;
  margin-bottom: 15px;
`;
