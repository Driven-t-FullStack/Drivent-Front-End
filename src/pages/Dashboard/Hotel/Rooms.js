import styled from 'styled-components';
import Room from './Room';

export default function Rooms({ roomLoading, rooms }) {
  return (
    <Container>
      <h2>Ótima Pedida, Agora escolha seu quarto: </h2>
      {roomLoading ? (
        <h2>Loading...</h2>
      ) : (
        <RoomsBox>
          {rooms.Rooms.map((room) => (
            <Room room={room} key={room.id} />
          ))}
        </RoomsBox>
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
`;
