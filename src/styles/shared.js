import { createGlobalStyle } from "styled-components"
export default createGlobalStyle`
    html{
        font-size: 16px;

        @media (min-width: 1800px){
            font-size:0.9vw;
        }

        @media (max-width: 1500px){
            font-size:13px;
        }

        @media (max-width: 1200px){
            font-size:12px;
        }
    }

     body {
        -webkit-font-smoothing: antialiased;
        font-family: 'Poppins', sans-serif;
        color: #b6b6b6;
        background: #02080e;
    }

    .futura-pt{
        font-family: 'FuturaPT','Poppins', sans-serif;
        font-weight: 500;
        text-transform: uppercase;
    }
`
