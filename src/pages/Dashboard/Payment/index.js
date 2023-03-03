import { useState } from 'react';
import ChooseTicket from './ChooseTicket/ChooseTicket';
import FinishPayment from './FinishPayment';

export default function Payment() {
  const [finishPayment, setFinishPayment] = useState(false);

  return <>{finishPayment ? <FinishPayment /> : <ChooseTicket setFinishPayment={setFinishPayment} />}</>;
}
