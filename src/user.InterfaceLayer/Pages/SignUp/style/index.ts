import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  width: 75%;
  margin: 0 auto;
  @media (max-width: 768px) {
    height: 70vh; /* 15px от каждого края */
  }
  & form {
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
    @media (max-width: 768px) {
      width: calc(100% - 30px); /* 15px от каждого края */
    }
  }
`;

export const Input = styled.div`
  margin-bottom: 20px;
`;