import styled from "styled-components";

export const ResetContainer = styled.div`
  margin: 0 10px;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 42px 0;

  @media (max-width: 769px) {
    padding: 30px 0;
    & h2 {
      text-align: center;
    }
  }
  @media (max-width: 426px) {
    padding: 20px 0;
  }

  & h2 {
    margin-bottom: 40px;
    @media (max-width: 769px) {
      margin-bottom: 30px;
    }
    @media (max-width: 426px) {
      margin-bottom: 20px;
    }
  }
`;

export const ProjectContainer = styled.div`
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  transition: transform 0.5s ease; /* Добавленный стиль для плавного перехода */
  flex-wrap: wrap;
  width: calc(100% - -20px);
  @media (max-width: 1030px) {
    justify-content: space-evenly;
    width: 100%;
  }

  @media (max-width: 740px) {
    justify-content: flex-start;
    flex-wrap: nowrap;
    flex-direction: row;
    overflow-x: scroll;
    -webkit-overflow-scrolling: touch;
    scroll-snap-type: x mandatory;

    @media (max-width: 626px) {
      margin-bottom: 20px;
    }

    &::-webkit-scrollbar {
      display: none; /* Скрыть полосу прокрутки на устройствах с поддержкой тач-скринов */
    }

    & > * {
      flex: 0 0 90%;
      margin: 10px; /* Расстояние между слайдами */
      scroll-snap-align: start;
      @media (max-width: 626px) {
        flex: 0 0 89%;
      }      
  }
`;

export const AddProjectContainer = styled.div`
  display: contents;
  @media (max-width: 1081px) {
    display: none;
  }
`;

export const AddProject = styled.div`
  display: none;
  @media (max-width: 1081px) {
    display: contents;
  }
`;