import { HotelPreview } from './style';

export default function BookingInformation({ booking }) {
  return (
    <HotelPreview isChosen={true}>
      <img src={booking.Room.Hotel.image} alt="hotel_picture" />
      <h1> {booking.Room.Hotel.name} </h1>
      <h2>Quarto Reservado: </h2>
      <p>101 (triple)</p>
      <h2>Pessoas no seu quarto: </h2>
      <p>Você e mais um</p>
    </HotelPreview>
  );
}
