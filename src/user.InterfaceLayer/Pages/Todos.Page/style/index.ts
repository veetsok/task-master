import styled from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 42px 0;
  & h2 {
    margin-bottom: 20px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    white-space: normal;
    max-height: 210px;
  }
`;

export const TextBlock = styled.div`
  display: flex-inline;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  align-items: flex-start;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  & h2 {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    margin: 0;
    white-space: normal;
    max-height: 140px;
  }
  & h3 {
    margin-top: 30px;
  }
  @media (max-width: 769px) {
    h2 {
      font-size: 34px;
      max-height: 130px;
    }
    h3 {
      font-size: 20px;
    }
  }
`;

export const ResetContainer = styled.div`
  margin: 0 10px;
`;

export const TodosList = styled.div`
  display: flex;
  margin-top: 40px;
  width: 100%;
  justify-content: space-between;
  @media (max-width: 769px) {
    margin: 20px auto;
    overflow-x: overlay;
    overflow-y: hidden;
    white-space: nowrap;
    scroll-snap-type: x mandatory;
  }
`;