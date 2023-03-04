import { useContext } from 'react';
import { useState, useEffect } from 'react';
import UserContext from '../../../../contexts/UserContext';
import { getUserTicket } from '../../../../services/payment';
import ChosenTicket from './ChosenTicket';
import PaymentForm from './PaymentForm';

export default function FinishPayment() {
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
  }, []);

  if (!userTicket) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <ChosenTicket ticketType={userTicket.TicketType} />
      <PaymentForm userTicket={userTicket} />
    </>
  );
}
