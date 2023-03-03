import styled from 'styled-components';
import ModalityOption from './ModalityOption';
import { useState } from 'react';

function ModalityContainer({ text, options, modality, setModality, setModalityPrice }) {
  const [selected, setSelected] = useState(false);

  return (
    <Container>
      <h2>{text}</h2>
      <div>
        {options.map((o, i) => (
          <ModalityOption
            title={o.title}
            price={o.price}
            setModality={setModality}
            modality={modality}
            setSelected={setSelected}
            selected={selected}
            setModalityPrice={setModalityPrice}
            key={i}
            index={i}
          />
        ))}
      </div>
    </Container>
  );
}

export default ModalityContainer;

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
