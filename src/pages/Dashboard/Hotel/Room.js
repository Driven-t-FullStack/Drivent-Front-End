import styled from 'styled-components';
import { IoPersonSharp } from 'react-icons/io5';
import { IoPersonOutline } from 'react-icons/io5';

export default function Room({ room, chosenRoomId, setChosenRoomId }) {
  const chosenRoom = chosenRoomId === room.id ? 1 : 0;
  const occupiedVacancies = room.Booking.length;
  const roomCapacity = room.capacity;

  function produceIcons() {
    const icons = [];
    const availableVacancies = roomCapacity - occupiedVacancies - chosenRoom;

    for (let i = 0; i < availableVacancies; i++) {
      icons.push(<IoPersonOutline />);
    }

    for (let j = 0; j < chosenRoom; j++) {
      icons.push(<IoPersonSharp style={{ color: '#FF4791' }} />);
    }

    for (let k = 0; k < occupiedVacancies; k++) {
      icons.push(<IoPersonSharp />);
    }

    return icons;
  }

  function chooseRoom(roomId) {
    if (roomId === chosenRoomId) {
      setChosenRoomId(null);
    } else {
      setChosenRoomId(roomId);
    }
  }

  return (
    <ButtonRoom
      type="Button"
      onClick={() => chooseRoom(room.id)}
      isChosen={chosenRoom}
      disabled={occupiedVacancies === roomCapacity}
    >
      <Left>{room.name}</Left>
      <Right>{produceIcons()}</Right>
    </ButtonRoom>
  );
}

const ButtonRoom = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => (props.isChosen ? ' #FFEED2' : '#E5E5E5')};
  width: 190px;
  height: 45px;
  padding: 11px 16px;
  margin-right: 17px;
  margin-top: 8px;
  border: 1px solid #cecece;
  border-radius: 10px;
  cursor: pointer;
`;

const Left = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  line-height: 23px;
  color: #454545;
`;

const Right = styled.div`
  svg {
    font-size: 25px;
  }
`;
