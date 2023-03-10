import useHotel from '../../../hooks/api/useHotel';
import Hotel from './Hotel';
import { NoPayment, Page } from './style';

export default function Hotels() {
  const { hotelLoading, hotelError, hotels } = useHotel();

  if (hotelLoading) {
    return <div>loading</div>;
  }

  if (hotelError) {
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
            {hotels?.map((hotel) => (
              <Hotel hotel={hotel} key={hotel.id} />
            ))}
          </div>
        </div>
      </Page>
    );
  }
}
