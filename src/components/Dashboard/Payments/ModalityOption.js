import styled from 'styled-components';

function ModalityOption({ title, price, setModality, modality, setSelected, selected, index, setModalityPrice }) {
  function handleClick(index) {
    if (selected !== index && (!modality || modality !== title)) {
      setModality(title);
      setSelected(index);
      setModalityPrice(price);
    } else {
      setModality(null);
      setSelected(false);
      setModalityPrice(0);
    }
  }

  return (
    <Container onClick={() => handleClick(index)} selected={selected} index={index}>
      {title}
      <span>R${price}</span>
    </Container>
  );
}

const Container = styled.button`
  width: 145px;
  height: 145px;
  border: 1px solid #cecece;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 15px;
  cursor: pointer;
  background-color: ${(props) => (props.selected === props.index ? '#FFEED2' : '#FFFFFF')};
  span {
    font-size: 14px;
    color: #898989;
  }
`;

export default ModalityOption;
