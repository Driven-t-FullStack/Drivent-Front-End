import styled from 'styled-components';
import HotelOption from './HotelOption';
import { useState } from 'react';

function HotelContainer({ text, options, hotel, setHotel, setHotelPrice }) {
  const [selected, setSelected] = useState(false);

  return (
    <Container>
      <h2>{text}</h2>
      <div>
        {options.map((o, i) => (
          <HotelOption
            title={o.title}
            price={o.price}
            setSelected={setSelected}
            selected={selected}
            hotel={hotel}
            setHotel={setHotel}
            setHotelPrice={setHotelPrice}
            key={i}
            index={i}
          />
        ))}
      </div>
    </Container>
  );
}

export default HotelContainer;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 35px;
  h2 {
    color: #8e8e8e;
    font-size: 20px;
    margin-bottom: 15px;
  }
  > div {
    display: flex;
    flex-direction: row;
  }
`;
