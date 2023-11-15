import styled from "styled-components";

export const ResetContainer = styled.div`
  margin: 0 10px;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 42px 0;
  & h2 {
    margin-bottom: 40px;
  }
`;

export const ProjectContainer = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-left: -10px;
  margin-right: -10px;
  width: 100%;
  // justify-content: space-between;
  @media (max-width: 1030px) {
    justify-content: space-evenly;
  }
  @media (max-width: 740px) {
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
  }
`;