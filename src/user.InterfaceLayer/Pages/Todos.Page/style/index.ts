import styled from "styled-components";

export const Container = styled.div`
  max-width: 1240px;
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
`;

export const ResetContainer = styled.div`
  margin: 0 10px;
`;

export const TodosList = styled.div`
  display: flex;
  margin: 40px -10px 0 -10px;
  justify-content: space-between;
`;