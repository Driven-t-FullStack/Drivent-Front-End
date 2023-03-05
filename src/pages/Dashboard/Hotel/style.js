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
  align-items: center;
  padding: 12px 0;
  margin-right: 20px;
  flex-wrap: wrap;

  width: 196px;
  height: 264px;
  border-radius: 10px;
  background: #EBEBEB;
  img {
    width: 168px;
    height: 109px;
    border-radius: 5px;
  }
  h1 {
    width: 85%;
    padding-top: 10px;

    text-align: start;
    font-size: 20px;
    line-height: 23px;
    color: #343434;
  }
`;
