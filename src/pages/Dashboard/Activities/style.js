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
