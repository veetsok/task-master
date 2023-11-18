import styled from "styled-components";

export const Container = styled.div`
  width: calc(100% - 48px);
  margin: 0 auto;
  & h1 {
    max-width: 951px;
    margin: 0 auto;
    font-weight: 600;
  }
  @media (min-width: 1025px) {
    width: 80%;
  }
  @media (max-width: 769px) {
    & h1 {
      font-size: 50px;
    }
  }
  @media (max-width: 426px) {
    & h1 {
      font-size: 30px;
    }
  }
`;

export const Button = styled.div`
  text-align: center;
  margin: 40px 0 50px 0;
  @media (max-width: 769px) {
    margin: 30px 0 40px 0;
  }
  @media (max-width: 426px) {
    margin: 20px 0 30px 0;
  }
`;

export const Image = styled.div`
  max-width: 476px;
  height: 476px;
  margin: 0 auto;
  @media (max-width: 769px) {
    width: calc(90% - 30px);
  }
  @media (max-width: 426px) {
    width: calc(75% - 40px);
    height: 50vh;
  }
`;
