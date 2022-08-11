import React from "react"
import styled from "styled-components"
import Rhombus from "../../images/elements/rhombus.svg"

const Box = styled.div`
    position: absolute;
    z-index: 0;
    width: 100%;
    height: 100%;
    background-image: url('${Rhombus}');
    background-repeat: no-repeat; 
    background-position: center; 
    background-size: contain; 
    opacity: 0.8;

    @media screen and (max-width: 766px){
      background-size: cover;
    }
`

const Ele = () => {
  return <Box />
}
export default Ele
