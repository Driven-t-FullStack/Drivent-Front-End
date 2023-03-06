import { useState, useContext } from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import styled from 'styled-components';
import Button from '../../../../components/Form/Button';
import PurchaseConfirmation from './PurchaseConfirmation';
import InputMask from 'react-input-mask';
import { createPayment } from '../../../../services/payment';
import UserContext from '../../../../contexts/UserContext';

export default function PaymentForm({ userTicket }) {
  const [state, setState] = useState({ cvc: '', expiry: '', focus: '', name: '', number: '', issuer: '' });
  const [confirmedPurchase, setConfirmedPurchase] = useState(false);
  const { userData } = useContext(UserContext);
  const { token } = userData;

  const handleInputFocus =(e) => {
    setState({ ...state, focus: e.target.name });
  };

  const handleInputChange =(e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const buildBody = () => {
    const body = {
      ticketId: userTicket.id,
      cardData: {
        issuer: state.issuer,
        number: state.number.replaceAll(' ', ''),
        name: state.name,
        expirationDate: state.expiry,
        cvv: state.cvc,
      },
    };
    return body;
  };

  const handleFormSubmit = async(e) => {
    e.preventDefault();
    const body = buildBody();
    try {
      await createPayment(body, token);
      setConfirmedPurchase(true);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err);
    }
  };

  const handleIssuer = (e) => {
    setState({ ...state, issuer: e.issuer });
  };

  return (
    <>
      <Label>Pagamento</Label>
      {userTicket.status === 'PAID' ? (
        <PurchaseConfirmation />
      ) : confirmedPurchase ? (
        <PurchaseConfirmation />
      ) : (
        <CardInfo>
          <Cards
            cvc={state.cvc}
            expiry={state.expiry}
            focused={state.focus}
            name={state.name}
            number={state.number}
            style={{ hieght: '140px' }}
            callback={handleIssuer}
          />
          <Form onSubmit={handleFormSubmit}>
            <Top>
              <Input
                mask="9999 9999 9999 9999"
                type="tel"
                name="number"
                placeholder="Card Number"
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                required
              />

              <p>E.g.:49...,51...,36...,37...</p>
              <Input
                type="text"
                name="name"
                placeholder="Name"
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                required
              />
            </Top>
            <Bottom>
              <Input
                mask="99/99"
                width={'170px'}
                name="expiry"
                placeholder="Valid thru"
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                required
              />
              <Input
                mask="999"
                width={'95px'}
                name="cvc"
                placeholder="CVC"
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                required
              />
            </Bottom>
            <Button type="submit">FINALIZAR PAGAMENTO </Button>
          </Form>
        </CardInfo>
      )}
    </>
  );
}
const Label = styled.h2`
  font-size: 18px;
  color: #aaaaaa;
  margin-bottom: 15px;
`;
const CardInfo = styled.section`
  height: 200px;
  width: 500px;
  display: flex;
  align-items: center;
`;
const Form = styled.form`
  margin-left: 25px;
  position: relative;
  button {
    position: absolute;
    left: -317px;
    top: 220px;
  }
`;
const Input = styled(InputMask)`
  width: ${(props) => (props.width ? props.width : '280px')};
  height: 40px;
  padding: 12px;
  font-size: 18px;
  border-radius: 4px;
  border: 1px solid #ebebeb;
  ::placeholder {
    color: #bfc0c0;
    font-weight: 400;
  }
`;
const Top = styled.div`
  p {
    font-size: 14px;
    color: #bfc0c0;
    margin-top: 4px;
    margin-bottom: 15px;
  }
`;
const Bottom = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
`;
