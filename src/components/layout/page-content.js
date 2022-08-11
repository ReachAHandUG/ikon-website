import React from 'react'
import styled from 'styled-components'

const Box = styled.div`
    width: 50%; 
    margin: 0 auto; 

    h2 {
        color: #c39f63; 
        padding: 2rem 0; 
        font-family: 'FuturaPT', sans-serif;
        text-transform: uppercase;
        font-size: 1.25rem;
    }

    b,strong {
        font-weight: bold; 
    }

    em {
        font-style: italic; 
    }

    a {
        text-decoration: underline; 
    }
    p {
        padding-bottom: 2rem; 
    }

    p,li {
        line-height: 1.6; 
    }

    ul,ol {
        width: 90%; 
        margin: 0 auto; 
        padding-bottom: 2rem; 
    }

    ul {
        list-style: disc outside; 
    }

    ol {
        list-style: decimal outside; 
    }

    li {
        padding-bottom: 1rem; 
    }

    @media screen and (max-width: 766px){
        width: 100%; 
        padding: 3rem; 
    }
`


const Ele = ({ children }) => {
    return (
        <Box>
            {children}
        </Box>
    )
}
export default Ele