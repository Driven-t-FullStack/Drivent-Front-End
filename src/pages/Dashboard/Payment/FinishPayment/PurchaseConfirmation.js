import styled from 'styled-components';
import { IoCheckmarkCircleSharp } from 'react-icons/io5';

export default function PurchaseConfirmation() {
  return (
    <Container>
      <Right>
        <IoCheckmarkCircleSharp />
      </Right>
      <Left>
        <p style={{ marginBottom: '3px', fontWeight: '700' }}>Pagamento confirmado!</p>
        <p>Prossiga para escolha de hospedagem e atividades</p>
      </Left>
    </Container>
  );
}

const Container = styled.section`
  height: 50px;
  display: flex;
  align-items: center;
`;
const Right = styled.div`
  svg {
    font-size: 50px;
    color: #36b853;
  }
`;
const Left = styled.div`
  margin-left: 13px;
  p {
    font-style: normal;
    font-size: 16px;
    line-height: 19px;
    color: #454545;
  }
`;
