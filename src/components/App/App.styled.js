import styled from "styled-components";
import Container from 'react-bootstrap/Container'

export const Logo = styled.img`
  height: 50px;
  width: 50px;
`

export const BContainer = styled(Container)`
  width: 90%;
  padding: 0 5%;

  @media only screen and (max-width: 400px) {
    a {
      font-size: 1rem !important;
    }
  }
`