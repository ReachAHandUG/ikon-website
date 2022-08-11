import React from 'react'
import styled, { keyframes } from 'styled-components'
import { useGlobalStateContext } from '../../utilities/context'
import Icon from '../shared/icon'

const Pulse = keyframes`
    0{
        transform: none;
    }

    50% {
        transform: translate3d(0,3rem, 0);
    }

    100% {
        transform: none;
    }
`

const Box = styled.div`
    width:1.625rem;
    height: 3.75rem; 
    position: absolute;
    animation: ${Pulse} 5s ease-in-out both infinite; 
    bottom: 4rem; 
    z-index: 10;
    left: calc(50% - 0.8rem);

    &.page {
        display: none;
    }
    
    svg {
        width: 100%;
        height: 100%;
    } 
`
const Ele = () => {
    const { active_section } = useGlobalStateContext()

    return (
        <Box className={active_section}>
            <Icon title="arrow-down" />
        </Box>
    )
}
export default Ele