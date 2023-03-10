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
`;
export const HotelPreview = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  margin-right: 20px;
  flex-wrap: wrap;
  cursor: pointer;
  width: 196px;
  height: 264px;
  border-radius: 10px;
  background: #ebebeb;
  img {
    width: 168px;
    height: 109px;
    border-radius: 5px;
  }
  h1 {
    padding-top: 10px;
    text-align: start;
    font-size: 20px;
    line-height: 23px;
    color: #343434;
  }
  h2 {
    margin-top: 10px;
    padding-bottom: 0;
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
    color: #3c3c3c;
  }
  p {
    margin-bottom: 4px;
    padding-bottom: 0;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: #3c3c3c;
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
