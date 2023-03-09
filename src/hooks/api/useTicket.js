import { getUserTicket } from '../../services/paymentApi';
import { useEffect, useState, useContext } from 'react';
import UserContext from '../../contexts/UserContext';

export default function useTicket() {
  const [ticket, setTicket] = useState(null);
  const { userData } = useContext(UserContext);
  const { token } = userData;

  useEffect(() => {
    const fetchTicket = async() => {
      try {
        const ticket = await getUserTicket(token);
        setTicket(ticket.data);
      } catch (err) {
        // eslint-disable-next-line no-console
        console.log(err.message);
      }
    };

    fetchTicket();
  }, []);

  if (ticket !== null) {
    return ticket;
  }
}
