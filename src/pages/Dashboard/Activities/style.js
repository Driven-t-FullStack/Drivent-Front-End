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
    color: #8E8E8E;
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
    background: #E0E0E0;
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
    flex-direction: column;
    width: 33%;

    > div {
      height: 100%;
      width: 100%;
      border: solid 1px #D7D7D7;
      padding: 15px;
    }
  }  
  h1 {
    font-size: 17px;
    line-height: 20px;
    text-align: center;
    color: #7B7B7B;
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
  display: flex;

  width: 100%;
  height: 30%;
  background: #F1F1F1;
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
      border: 1px solid #CFCFCF;
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
