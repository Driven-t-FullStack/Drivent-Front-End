import styled from 'styled-components';

export default function ChosenTicket() {
  return (
    <>
      <Label>Ingresso escolhido</Label>
      <Container>
        <Informations>Presencial + Com Hotel</Informations>
        <Price>R$ 780</Price>
      </Container>
    </>
  );
}

const Label = styled.h2`
  font-size: 18px;
  color: #aaaaaa;
  margin-bottom: 15px;
`;

const Container = styled.section`
  width: 290px;
  height: 108px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #ffeed2;
  border-radius: 20px;
  margin-bottom: 30px;
`;

const Informations = styled.p`
  margin-bottom: 12px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #454545;
`;

const Price = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #898989;
`;
