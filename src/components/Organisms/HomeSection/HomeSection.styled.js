import styled from "styled-components";
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  color: #F9F9F9;
  background-color: #000;
  height: 100vh;
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

export const RightArrow = styled(RiArrowRightSLine)`
  cursor: pointer;
  height: 5rem;
  position: absolute;
  right: 10px;
  top: 50%;
  user-select: none;
  width: 5rem;
  z-index: 10;
  &:hover {
    color: #58C33D;
  }
`

export const LeftArrow = styled(RiArrowLeftSLine)`
  cursor: pointer;
  height: 5rem;
  position: absolute;
  left: 10px;
  top: 50%;
  user-select: none;
  width: 5rem;
  z-inde10x
  &:hover {
    color: #58C33D;
  }
`