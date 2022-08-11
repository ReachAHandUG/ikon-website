import React from "react"
import styled from "styled-components"
import patternD from "../../images/elements/pattern-unit-d.svg"
import patternDEnvy from "../../images/elements/pattern-unit-d-envy.svg"

const Box = styled.div`
    width: 13.906vw; 
    height: 3.948vw; 
    background-image: url('${patternD}'); 
    background-repeat: repeat; 
    background-size: 2.1rem; 

    &.envy {
      background-image: url('${patternDEnvy}');
    }

    @media screen and (max-width: 766px){
      width: 30vw; 
      height: 5vw;
      background-size: 1rem; 
    }
`

const Ele = ({ type }) => {
  return <Box className={"o-pattern-block " + type}></Box>
}
export default Ele
