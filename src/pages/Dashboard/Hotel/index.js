import useHotel from '../../../hooks/api/useHotel';
import useTicket from '../../../hooks/api/useTicket';
import { HotelPreview, NoPayment, Page } from './style';

export default function Hotel() {
  const ticket = useTicket();
  const hotels = useHotel();
  if (!ticket?.TicketType.includesHotel) {
    return (
      <Page>
        <div>
          <h1> Escolha de hotel e quarto </h1>
        </div>
        <NoPayment>
          <h3>
            Sua modalidade de ingresso não inclui hospedagem <br />
            Prossiga para a escolha de atividades
          </h3>
        </NoPayment>
      </Page>
    );
  }
  if (hotels === null) {
    return (
      <Page>
        <div>
          <h1> Escolha de hotel e quarto </h1>
        </div>
        <NoPayment>
          <h3>
            Você precisa ter confirmado pagamento antes <br /> de fazer a escolha de hospedagem{' '}
          </h3>
        </NoPayment>
      </Page>
    );
  } else {
    return (
      <Page>
        <div>
          <h1> Escolha de hotel e quarto </h1>
        </div>
        <div>
          <h2> Primeiro, escolha seu hotel </h2>
          <div>
            {hotels?.map((e, i) => (
              <HotelPreview key={i}>
                <img src={e.img} alt="hotel_picture" />
                <h1> {e.name} </h1>
              </HotelPreview>
            ))}
          </div>
        </div>
      </Page>
    );
  }
}
