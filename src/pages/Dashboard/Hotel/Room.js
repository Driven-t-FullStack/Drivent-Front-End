import styled from 'styled-components';
import { IoPersonSharp } from 'react-icons/io5';
import { IoPersonOutline } from 'react-icons/io5';

export default function Room({ room }) {
  console.log(room);

  return (
    <ButtonRoom type="Button">
      <Left>{room.name}</Left>
      <Right>
        <IoPersonSharp />
        <IoPersonOutline />
      </Right>
    </ButtonRoom>
  );
}

const ButtonRoom = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
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
