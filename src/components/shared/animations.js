import { keyframes } from "styled-components"

export const moveUp = keyframes`
    0% {
        transform: translate3d(0, 120%, 0);
        opacity: 0;
    }

    100% {
        transform: none;
        opacity: 1;
    }
`

export const moveUpSmall = keyframes`
    0% {
        transform: translate3d(0, 4rem, 0);
        opacity: 0;
    }

    100% {
        transform: none;
        opacity: 1;
    }
`

export const slideUp = keyframes`
    0% {
        transform: translate3d(0, 120%, 0);
    }

    100% {
        transform: none;
    }
`

export const slideFromLeft = keyframes`
    0% {
        transform: translate3d(-100%, 0, 0);
    }

    100% {
        transform: none;
    }
`

export const fadeOut = keyframes`
    0% {
        opacity: 1;
    }

    100% {
        opacity: 0;
    }
`

export const slideDown = keyframes`
    0% {
        transform: translate3d(0, 0%, 0);
    }

    100% {
        transform: translate3d(0, 150%, 0);
    }
`

export const rotate = keyframes`
    0%{
        transform: rotateZ(0deg);
    }

    100% {
        transform: rotateZ(360deg);
    }
`

export const scaleOut = keyframes`
    0%{
        transform: scale3d(0,1,1);
    }

    100% {
        transform: none; 
    }
`
