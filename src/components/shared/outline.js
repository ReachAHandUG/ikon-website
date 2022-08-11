import React from "react"
import styled from "styled-components"
import InView from "./in-view"
import Prestige from "../../images/elements/outline-prestige.svg"
import Buzz from "../../images/elements/outline-buzz.svg"
import Stream from "../../images/elements/outline-stream.svg"
import Connect from "../../images/elements/outline-connect.svg"
import Twelve from "../../images/elements/outline-12.svg"
import Nomination from "../../images/elements/outline-nomination.svg"
import Heritage from "../../images/elements/outline-heritage.svg"

const Box = styled.div`
    position: absolute; 
    right: 0; 
    top: 0; 
    z-index: 0;
    opacity: 0.15;

    div, span {
        width: 100%;
        height: 100%;
    }

    span {
        background-repeat: no-repeat;
        background-size: contain;
        display: block;
    }

    &.prestige {
        height: 16.886vw;
        width: 80.044vw;

        span {
            background-image: url('${Prestige}');
        }
    }

    &.buzz {
        height: 52.558vw;
        width: 19.225vw;
        top:0; 
        left: 3.190vw; 
        transform: scale(0.75);
        opacity: 0.25; 

        span {
            background-image: url('${Buzz}');
        }
    }

    &.stream {
        width: 79.605vw;
        height: 19.883vw;
        left: -6rem;
        top: 5vw;  
        span {
            background-image: url('${Stream}');
        }
    }

    &.connect {
        width: 79.605vw;
        height: 19.883vw;
        bottom: -10rem; 
        right: -10rem; 
        top: auto; 
        opacity: 0.2;

        span {
            background-image: url('${Connect}');
        }
    }

     &.twelve {
        width: 23.904vw;
        height: 19.152vw;
        right: calc(50% - 11.5vw);
        top: 4rem;
        opacity: 0.35;

        span {
            background-image: url('${Twelve}');
        }
    }

    &.nomination {
        height: 112.939vw;
        width: 21.784vw;
        top: 0; 
        left: 0; 
        opacity: 0.1; 

        span {
            background-image: url('${Nomination}');
        }
    }

    &.heritage {
        height: 27.485vw;
        width: 98.392vw;
        top: 0;
        right: -30vw;
        opacity: 0.15;

        span {
            background-image: url('${Heritage}');
        }
    }
`

const Ele = ({ title }) => {
  return (
    <Box className={title}>
      <InView animation="fade-in">
        <span></span>
      </InView>
    </Box>
  )
}
export default Ele
