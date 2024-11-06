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
a.futura-pt {
  position: relative; /* This allows positioning of the dropdown relative to the parent */
  display: inline-block; /* Allows for block behavior with inline positioning */
}

ul.pullDown {
  display: none; /* Hide the dropdown by default */
  position: absolute; /* Position it relative to the anchor element */
  top: 100%; /* Position it directly below the parent */
  left: 0;
  margin: 0;
  padding: 0;
  
}

a.futura-pt:hover ul.pullDown {
  display: block; /* Show the dropdown when the parent is hovered */
}

ul.pullDown li a {
  display: block;
  padding: 8px 15px; /* Adjust padding as needed */
  text-decoration: none;
  color: black;
}

ul.pullDown li a:hover {
  background-color: #f0f0f0; /* Optional, to highlight the items on hover */
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
    <span class="hoverContent">WINNERS</span>
    <ul class="pullDown">
        <li><a href="https://fellowship.theikon.org/winners2023/" class="futura-pt">WINNERS2023</a></li>
        <li><a href="https://fellowship.theikon.org/winners2024/" class="futura-pt">WINNERS2024</a></li>
    </ul>
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
