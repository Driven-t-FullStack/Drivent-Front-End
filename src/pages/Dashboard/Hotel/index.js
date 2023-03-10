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
  const [bookingIsDone, setBookingIsDone] = useState(false);
  const [searchBooking, setSearchBooking] = useState(true);
  const [updateBooking, setUpdateBooking] = useState(false);
  const [booking, setBooking] = useState(null);

  const token = useToken();

  useEffect(() => {
    const fetchBooking = async() => {
      try {
        const booking = await getBooking(token);
        setBooking(booking);
        setBookingIsDone(true);
      } catch (err) {
        setBooking(err.name);
        setBookingIsDone(false);
      }
    };

    fetchBooking();
  }, [searchBooking]);

  if (!booking) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Page>
        <div>
          <h1> Escolha de hotel e quarto </h1>
        </div>
        {bookingIsDone ? (
          <BookingInformation
            booking={booking}
            setBookingIsDone={setBookingIsDone}
            updateBooking={updateBooking}
            setUpdateBooking={setUpdateBooking}
          />
        ) : (
          <div>
            <Hotels fetchRooms={fetchRooms} setShowRooms={setShowRooms} setChosenRoomId={setChosenRoomId} />
            {showRooms && (
              <Rooms
                rooms={rooms}
                roomLoading={roomLoading}
                setChosenRoomId={setChosenRoomId}
                chosenRoomId={chosenRoomId}
                setBookingIsDone={setBookingIsDone}
                booking={booking}
                setBooking={setBooking}
                searchBooking={searchBooking}
                setSearchBooking={setSearchBooking}
                updateBooking={updateBooking}
                setUpdateBooking={setUpdateBooking}
              />
            )}
          </div>
        )}
      </Page>
    </>
  );
}
