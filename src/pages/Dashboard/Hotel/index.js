import { useEffect } from 'react';
import { useState } from 'react';
import useRoom from '../../../hooks/api/useRoom';
import useToken from '../../../hooks/useToken';
import { getBooking } from '../../../services/bookingApi';
import BookingInformation from './BookingInformation';
import Hotels from './Hotels';
import Rooms from './Rooms';
import { Page } from './style';

export default function BookingRoomFlow() {
  const { roomLoading, fetchRooms, rooms } = useRoom();
  const [chosenRoomId, setChosenRoomId] = useState(null);
  const [showRooms, setShowRooms] = useState(false);
  const [searchBooking, setSearchBooking] = useState(true);
  const [updateBooking, setUpdateBooking] = useState(false);
  const [booking, setBooking] = useState(null);
  const [bookingIsDone, setBookingIsDone] = useState(null);
  const token = useToken();

  useEffect(() => {
    const fetchBooking = async() => {
      try {
        const booking = await getBooking(token);
        setBooking(booking);
        setBookingIsDone(true);
      } catch (err) {
        if (err.response.status === 404) {
          setBookingIsDone(false);
        }
      }
    };

    fetchBooking();
  }, [searchBooking]);

  if (bookingIsDone === null) {
    return <div>Loading...</div>;
  }
  return (
    <Page>
      <div>
        <h1> Escolha de hotel e quarto </h1>
      </div>

      {bookingIsDone === false ? (
        <div>
          <Hotels fetchRooms={fetchRooms} setShowRooms={setShowRooms} setChosenRoomId={setChosenRoomId} />
          {showRooms && (
            <Rooms
              rooms={rooms}
              roomLoading={roomLoading}
              setChosenRoomId={setChosenRoomId}
              chosenRoomId={chosenRoomId}
              booking={booking}
              setBookingIsDone={setBookingIsDone}
              searchBooking={searchBooking}
              setSearchBooking={setSearchBooking}
              updateBooking={updateBooking}
              setUpdateBooking={setUpdateBooking}
            />
          )}
        </div>
      ) : (
        <BookingInformation
          booking={booking}
          updateBooking={updateBooking}
          setUpdateBooking={setUpdateBooking}
          setBookingIsDone={setBookingIsDone}
        />
      )}
    </Page>
  );
}
