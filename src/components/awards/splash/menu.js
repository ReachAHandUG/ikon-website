import React from "react"
import styled from "styled-components"
import { moveUp } from "../../shared/animations"
import patternD from "../../../images/elements/pattern-unit-e.svg"
import patternE from "../../../images/elements/pattern-unit-f.svg"

const Box = styled.nav`
    padding-top: 3vw; 
    position: relative;
    padding-bottom: 15vw;
    z-index: 10;

    > div {
        overflow: hidden;
        position: relative;
    }

    &:before, &:after {
        content: "";
        position: absolute;
        height: 1.125rem;
        width: 1.125rem;
        background-repeat: no-repeat;
        background-position: center; 
        background-size: contain;
        top: 3.25vw;
    }

    &:before {
        left: -10vw; 
        background-image: url('${patternD}');
    }

    &:after {
        right: -10vw; 
        background-image: url('${patternE}');
    }

    a {
        color: #FFF8AC; 
        font-size: 0.875rem;
        display: inline-flex; 
        padding: 0.5rem 2rem; 
        position: relative;
        align-items: center; 
        transition: color 0.3s;

        &:after{
            content: "";
            position: absolute;
            height: 0.5rem; 
            width: 0.5rem; 
            transform: rotateZ(45deg); 
            border: solid 1px; 
            right: 0rem;
            transition: transform 0.5s;
        }

        &:before {
            content: ""; 
            bottom: 0; 
            position: absolute;
            width: calc(100% - 4rem);
            height: 2px; 
            background: #EC423C; 
            transition: transform 0.5s;
            transform-origin: 0 0; 
            transform: scale3d(0,1,1);
        }

        &:last-child {
            &:after{
                display: none; 
            }
        }

        &:hover{
            color: #fff; 

            &:before{
                transform: none; 
            }

            &:after{
                background: #FFF8AC;
                transform: rotateZ(-45deg); 
            }
        }
    }

    .page-has-loaded & {
        a {
            animation: ${moveUp} 1.25s cubic-bezier(0.22, 1, 0.36, 1) both 1s;

            &:nth-child(2){
                animation-delay: 1.1s
            }

            &:nth-child(3){
                animation-delay: 1.2s
            }

            &:nth-child(4){
                animation-delay: 1.3s
            }
        }
    }

    .clear-splash-delays &{
        a {
            &:nth-child(1){
                animation-delay: 0.5s
            }

            &:nth-child(2){
                animation-delay: 0.7s
            }

            &:nth-child(3){
                animation-delay: 0.9s
            }

            &:nth-child(4){
                animation-delay: 1.1s
            }
        }
    }

    @media screen and (max-width: 766px){
        padding-top: 3rem; 

        > div {
            text-align: center;
        }
    }
`

const Ele = () => {
  return (
    <Box>
      <div>
        <a href="#sec-categories" className="futura-pt">
          Categories
        </a>
        <a href="#sec-calendar" className="futura-pt">
          Calendar
        </a>
        <a href="#sec-accolade" className="futura-pt">
          Accolade
        </a>
        <a href="#sec-nods" className="futura-pt">
          Nominations
        </a>
      </div>
    </Box>
  )
}
export default Ele
