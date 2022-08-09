import styled from "styled-components";

export const Container = styled.div`
  color: #F9F9F9;
  background-color: #000;
  height: 100vh;
  width: 100%;
  .carousel {
    min-width: 100%;
    min-height: 100%;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  top: 50%;
  left: 50%;
  position: absolute;
  text-align: center;
  transform: translate(-50%, -50%);
`

export const Title = styled.h1`
  max-width: 900px;
`;

export const Subtitle = styled.h2`
  max-width: 625px;
`;

export const Picture = styled.img`
  width: 200px;
  height: 100px;
`;
