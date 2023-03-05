/* eslint-disable indent */
import styled from 'styled-components';
import { IoCheckmarkCircleSharp, IoSyncCircleSharp, IoCloseCircleSharp } from 'react-icons/io5';

export default function PurchaseConfirmation({ processingPurchase, confirmedPurchase, errorOnPurchase }) {
  return (
    <Container>
      <StatusIcons>
        {processingPurchase === true && errorOnPurchase === false && <IoSyncCircleSharp color="orange" />}
        {errorOnPurchase === true && <IoCloseCircleSharp color="red" />}
        {confirmedPurchase === true && errorOnPurchase === false && <IoCheckmarkCircleSharp color="green" />}
      </StatusIcons>
      <StatusMessage>
        {processingPurchase === true && errorOnPurchase === false && (
          <>
            <h1> Sua compra está sendo processada! </h1>
            <p> Você ainda não pode reservar um hotel, espere a confirmação! </p>
          </>
        )}
        {errorOnPurchase === true && (
          <>
            <h1> Parece que ocorreu um erro no pagamento :/ </h1>
            <p> Retorne e tente novamente! </p>
          </>
        )}
        {confirmedPurchase === true && errorOnPurchase === false && (
          <>
            <h1> Pagamento confirmado! </h1>
            <p> Prossiga para escolha de hospedagem e atividades </p>
          </>
        )}
      </StatusMessage>
    </Container>
  );
}

const Container = styled.section`
  height: 50px;
  display: flex;
  align-items: center;
`;
const StatusIcons = styled.div`
  svg {
    font-size: 50px;
    color: ${(props) => {
      if (props.color === 'green') {
        return '#36b853';
      } else if (props.color === 'orange') {
        return 'orange';
      } else if (props.color === 'red') {
        return 'red';
      }
    }};
  }
`;
const StatusMessage = styled.div`
  margin-left: 13px;
  h1 {
    margin-bottom: 3px;
    font-weight: 700;
  }
  p {
    font-style: normal;
    font-size: 16px;
    line-height: 19px;
    color: #454545;
  }
`;
