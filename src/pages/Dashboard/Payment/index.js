import ChooseTicket from './ChooseTicket';
import FinishPayment from './FinishPayment';
import { useContext } from 'react';
import { useState, useEffect } from 'react';
import UserContext from '../../../contexts/UserContext';
import { getUserTicket } from '../../../services/paymentApi';

export default function Payment() {
  const [finishPayment, setFinishPayment] = useState(false);
  const [userTicket, setUserTicket] = useState(null);
  const { userData } = useContext(UserContext);
  const { token } = userData;

  useEffect(() => {
    const fetchUserTicket = async() => {
      try {
        const ticket = await getUserTicket(token);
        setUserTicket(ticket.data);
      } catch (err) {
        console.log(err.message);
      }
    };

    fetchUserTicket();
  }, [finishPayment]);

  return (
    <>
      {userTicket ? (
        <FinishPayment userTicket={userTicket} />
      ) : (
        <ChooseTicket setFinishPayment={setFinishPayment} />
      )}
    </>
  );
}
