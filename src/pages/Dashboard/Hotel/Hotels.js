import { useState } from 'react';
import useHotel from '../../../hooks/api/useHotel';
import Hotel from './Hotel';
import { NoPayment } from './style';

export default function Hotels({ fetchRooms, setShowRooms, setChosenRoomId }) {
  const { hotelLoading, hotelError, hotels } = useHotel();
  const [chosenHotel, setChosenHotel] = useState(null);

  if (hotelLoading) {
    return <div>Loading...</div>;
  }

  return hotelError ? (
    <NoPayment>
      <h3>
        Você precisa ter confirmado pagamento antes <br /> de fazer a escolha de hospedagem{' '}
      </h3>
    </NoPayment>
  ) : (
    <>
      <h2> Primeiro, escolha seu hotel </h2>
      <div>
        {hotels?.map((hotel) => (
          <Hotel
            hotel={hotel}
            key={hotel.id}
            setChosenHotel={setChosenHotel}
            chosenHotel={chosenHotel}
            fetchRooms={fetchRooms}
            setShowRooms={setShowRooms}
            setChosenRoomId={setChosenRoomId}
          />
        ))}
      </div>
    </>
  );
}
