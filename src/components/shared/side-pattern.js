import React from "react"
import styled from "styled-components"
import Img from "../../images/elements/side-pattern.svg"
import InView from "./in-view"
import { slideFromLeft } from "./animations"

const Box = styled.div`
    width: 3.723vw;
    height: 7.061vw;
    position: absolute;
    z-index: 1;
    display: block;
    overflow: hidden;

    .o-inview, span {
        width: 80%;
        height: 80%;
        display: block;
    }

    span {
        background-image: url('${Img}');
        background-size: contain;
        background-repeat: no-repeat;
    }
    
    &.splash-left{
        left: 0; 
        top: calc(50% - 3.5vw);

        .is-visible span {
            animation-delay: 1.25s;
        }
    }

    &.splash-right {
        right: 0;
        top: calc(50% - 3.5vw);
        transform: scale3d(-1,1,1);

        .is-visible span {
            animation-delay: 1.5s;
        }
    }

    .is-visible {
        display: block;

        span {
            animation: ${slideFromLeft} 1s ease both;
        }
    }

    .clear-splash-delays & {
        &.splash-left .is-visible span {
            animation-delay: 0.5s;
        }

        &.splash-right .is-visible span {
            animation-delay: 0.75s;
        }
    }
`

const Ele = ({ pos }) => {
  return (
    <Box className={pos}>
      <InView>
        <span></span>
      </InView>
    </Box>
  )
}
export default Ele
