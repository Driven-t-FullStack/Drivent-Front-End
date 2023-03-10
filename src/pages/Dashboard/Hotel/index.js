import { useState } from 'react';
import useHotel from '../../../hooks/api/useHotel';
import useRoom from '../../../hooks/api/useRoom';
import Hotels from './Hotels';
import Rooms from './Rooms';
import { Page } from './style';

export default function BookingRoomFlow() {
  const { roomLoading, fetchRooms, rooms } = useRoom();
  const [chosenRoomId, setChosenRoomId] = useState(null);
  const [showRooms, setShowRooms] = useState(false);
  const [bookingIsDone, setBookingIsDone] = useState(false);

  return (
    <>
      <Page>
        <div>
          <h1> Escolha de hotel e quarto </h1>
        </div>
        {bookingIsDone ? (
          ''
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
              />
            )}
          </div>
        )}
      </Page>
    </>
  );
}
