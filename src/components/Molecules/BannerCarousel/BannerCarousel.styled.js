import styled from "styled-components";

export const Container = styled.div`
  object-fit: cover;
  height: 100%;
  
  width: auto;
  .slide {
    opacity: 0;
    transition-duration: 1s ease;
  }

  .slide.active {
    opacity: 1;
    transition-duration: 1s;
    transition: scale(1.08);
  }
`;

export const Picture = styled.img`
  height: 100vh;
  width: auto;
`;
