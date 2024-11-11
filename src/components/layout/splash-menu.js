import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Icon from "../shared/icon"
import { useGlobalStateContext } from "../../utilities/context"

const Box = styled.nav`
position: absolute;
top: 3rem;
display: flex;
align-items: center;
justify-content: space-between;
width: 100%;
padding-left: 2.778vw;
padding-right: 2.778vw;
top: 3.874vw;
z-index: 100;

@media screen and (max-width: 766px) {
display: none;
}

/* Style for the anchor and dropdown */

 .hoverContent p {
        cursor: pointer;
      }
      .hoverContent {
        color: white;
        position: relative;
      }
      .pullDown {
        background-color: white;
        color: black;
        display: grid;
        padding: 4px 8px;
        width: auto;
        position: absolute;
        top: 100%;
        opacity: 0; /* Initially hidden */
        visibility: hidden; /* Initially hidden */
        transition: opacity 0.3s ease, visibility 0.3s ease; /* Smooth transition */
      }
      .pullDown a {
        text-decoration: none;
        color: black;
        padding: 4px 0;
        font-size: small;
      }
      .hoverContent:hover .pullDown {
        opacity: 1; /* Show on hover */
        visibility: visible; /* Show on hover */
      }
      .pullDown a:hover {
        text-decoration: underline;
      }
      p i {
        font-size: small;
      }

`;


const Logo = styled.div`
a {
display: block;
width: 1.5rem;
height: 1.5rem;

svg {
width: 100%;
height: 100%;
}
}

.page & {
opacity: 0;
visibility: hidden;
}
`;

const Wrap = styled.div`
a {
margin-left: 2rem;
font-size: 0.875rem;
opacity: 0.5;
transition: opacity 0.5s;

&:hover {
opacity: 1;
}

&.is-active {
opacity: 1;
}
}
`

const Ele = () => {
const { active_section } = useGlobalStateContext()

return (
<Box className={active_section}>
    <Logo>
        <Link to="/">
        <Icon title="ikon-flat" />
        </Link>
    </Logo>
    <Wrap>
        <Link activeClassName="is-active" to="/" className="futura-pt">
        iKON
        </Link>
        <Link activeClassName="is-active" to="/awards" className="futura-pt">
        Awards
        </Link>

     <a class="futura-pt">
      <div class="hoverContent">
        <p>WINNERS&nbsp;<i class="fas fa-chevron-down"></i></p>
        <div class="pullDown">
          <a
            href="https://fellowship.theikon.org/winners2023/"
            class="futura-pt"
            >WINNERS2023</a
          >
          <a
            href="https://fellowship.theikon.org/winners2024/"
            class="futura-pt"
            >WINNERS2024</a
          >
        </div>
      </div>
    </a>


        <Link activeClassName="is-active" to="/tribe" className="futura-pt">
        Tribe
        </Link>
        <a href="https://fellowship.theikon.org" target="_blank" className="futura-pt" rel="noreferrer">
            Fellowship
        </a>
        <a href="https://fellowship.theikon.org/ikonawards2023/" target="_blank" className="futura-pt" rel="noreferrer">
            ikonAwards2023
        </a>
    </Wrap>
</Box>
)
}
export default Ele
