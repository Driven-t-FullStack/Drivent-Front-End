import useToken from '../../../hooks/useToken';
import { HotelPreview } from './style';

export default function Hotel({ hotel, setChosenHotel, chosenHotel, fetchRooms, setShowRooms, setChosenRoomId }) {
  const token = useToken();

  function computeAvailableVacancies(object) {
    const totalCapacity = object.Rooms.reduce((acc, current) => acc + current.capacity, 0);
    const occupiedVacancies = object.Rooms.reduce((acc, current) => acc + current.Booking.length, 0);
    const availableVacancies = totalCapacity - occupiedVacancies;

    return availableVacancies;
  }

  function chooseHotel(hotelId) {
    hotelId === chosenHotel ? setChosenHotel(null) : setChosenHotel(hotelId);
    if (hotelId === chosenHotel) {
      setShowRooms(false);
      setChosenHotel(null);
      setChosenRoomId(null);
    } else {
      fetchRooms(hotelId, token);
      setShowRooms(true);
      setChosenHotel(hotelId);
      setChosenRoomId(null);
    }
  }

  return (
    <HotelPreview onClick={() => chooseHotel(hotel.id)} isChosen={chosenHotel === hotel.id}>
      <img src={hotel.img} alt="hotel_picture" />
      <h1> {hotel.name} </h1>
      <h2>Tipos de acomodação: </h2>
      <p>{hotel.type}</p>
      <h2>Vagas disponíveis: </h2>
      <p>{computeAvailableVacancies(hotel)}</p>
    </HotelPreview>
  );
}
