import styled from 'styled-components';

export const Page = styled.div`
  display: grid;
  grid-template-rows: 12% 88%;
  height: 100%;
  h1 {
    font-size: 34px;
    line-height: 40px;
  }
  h2 {
    font-size: 20px;
    line-height: 23px;
    color: #8e8e8e;
    padding-bottom: 20px;
  }
  div > div {
    display: flex;
  }
  h4 {
    font-size: 20px;
    line-height: 23px;
    color: #8e8e8e;
  }
`;
export const NoPayment = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 80%;
  h3 {
    color: #8e8e8e;
    font-size: 20px;
    text-align: center;
    line-break: auto;
  }
`;
export const DataFilter = styled.div`
  display: flex;
  gap: 17px;
  height: 20%;

  > div {
    justify-content: center;
    align-items: center;
    width: 131px;
    height: 37px;
    background: #e0e0e0;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    :hover {
      cursor: pointer;
      background: lightgray;
    }
  }
`;
export const ActiviesDashBoard = styled.div`
  display: flex;
  width: 100%;
  height: 65%;
  text-align: center;

  > div {
    display: flex;
    flex-direction: column;
    width: 33%;

    > div {
      display: flex;
      flex-direction: column;
      height: 100%;
      width: 100%;
      border: solid 1px #d7d7d7;
      padding: 15px;
    }
  }
  h1 {
    font-size: 17px;
    line-height: 20px;
    text-align: center;
    color: #7b7b7b;
    padding-bottom: 13px;
  }
  h2 {
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
    color: #343434;
  }
  p {
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: #343434;
  }
`;
export const InsideActivity = styled.div`
  margin-bottom: 10px;
  display: flex;
  width: 100%;
  height: ${(props) => props.boxHeight};
  background: ${(props) => (props.activityStatus === 'enrolled' ? '#d0ffdb' : '#f1f1f1')};
  border-radius: 5px;
  > div {
    display: flex;
    flex-direction: column;
    padding: 10px;
    :nth-child(1) {
      /* display: flex; */
      text-align: start;
      width: 70%;
    }
    :nth-child(2) {
      height: 60px;
      margin-top: 14px;
      padding: 0;
      border: 1px solid #cfcfcf;
      /* transform: rotate(-90deg); */
    }
    :nth-child(3) {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 30%;
    }
  }
`;
