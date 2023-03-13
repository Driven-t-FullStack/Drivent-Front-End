import { useState } from 'react';
import styled from 'styled-components';
import Button from '../../../components/Form/Button';
import useToken from '../../../hooks/useToken';
import { postRoom, putBooking } from '../../../services/bookingApi';
import Room from './Room';

export default function Rooms({
  roomLoading,
  rooms,
  chosenRoomId,
  setChosenRoomId,
  setBookingIsDone,
  searchBooking,
  setSearchBooking,
  updateBooking,
  setUpdateBooking,
  booking,
}) {
  const [loading, setLoading] = useState(false);
  const token = useToken();

  async function handleBookRoom() {
    setLoading(true);
    const body = { roomId: chosenRoomId };
    try {
      if (updateBooking) {
        await putBooking(body, booking.id, token);
      } else {
        await postRoom(body, token);
      }
      setLoading(false);
      setBookingIsDone(null);
      setSearchBooking(!searchBooking);
      setUpdateBooking(false);
    } catch (err) {
      setLoading(false);
    }
  }

  return (
    <Container>
      <h2>Ótima Pedida, Agora escolha seu quarto: </h2>
      {roomLoading ? (
        <h2>Loading...</h2>
      ) : (
        <RoomsBox>
          {rooms.Rooms.map((room) => (
            <Room room={room} key={room.id} setChosenRoomId={setChosenRoomId} chosenRoomId={chosenRoomId} />
          ))}
        </RoomsBox>
      )}
      {chosenRoomId !== null && (
        <Button onClick={handleBookRoom} style={{ marginBottom: '125px' }} disabled={loading}>
          {updateBooking ? 'TROCAR QUARTO' : 'RESERVAR QUARTO'}
        </Button>
      )}
    </Container>
  );
}

const Container = styled.section`
  margin-top: 52px;
  h2 {
    font-size: 20px;
    line-height: 23px;
    color: #8e8e8e;
    margin-bottom: 30px;
  }
`;
const RoomsBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 45px;
`;
