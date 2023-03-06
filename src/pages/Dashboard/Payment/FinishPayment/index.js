
import ChosenTicket from './ChosenTicket';
import PaymentForm from './PaymentForm';

export default function FinishPayment({ userTicket }) {
  return (
    <>
      <ChosenTicket ticketType={userTicket.TicketType} />
      <PaymentForm userTicket={userTicket} />
    </>
  );
}
