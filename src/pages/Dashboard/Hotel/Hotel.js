import { useEffect, useState } from 'react';
import { HotelPreview } from './style';

export default function Hotel({ hotel }) {
  const [chosenHotel, setChosenHotel] = useState(null);

  function computeAvailableVacancies(object) {
    const totalCapacity = object.Rooms.reduce((acc, current) => acc + current.capacity, 0);
    const occupiedVacancies = object.Rooms.reduce((acc, current) => acc + current.Booking.length, 0);
    const availableVacancies = totalCapacity - occupiedVacancies;

    return availableVacancies;
  }

  return (
    <HotelPreview onClick={() => setChosenHotel(hotel.id)} isChosen={chosenHotel === hotel.id}>
      <img src={hotel.img} alt="hotel_picture" />
      <h1> {hotel.name} </h1>
      <h2>Tipos de acomodação: </h2>
      <p>{hotel.type}</p>
      <h2>Vagas disponíveis: </h2>
      <p>{computeAvailableVacancies(hotel)}</p>
    </HotelPreview>
  );
}
