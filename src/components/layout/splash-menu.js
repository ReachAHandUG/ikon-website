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
  
/* Initially hide the pull-down menu */
.pullDown {
    display: none;  /* Hidden by default */
    position: relative;  /* Position it properly below the menu item */
    list-style-type: none;  /* Remove bullets from the list */
    margin: 0;  /* Remove default margin */
    padding: 0;  /* Remove default padding */
    z-index: 1000;  /* Make sure it stays on top */
}




.pullDown li a:hover {
    color: #007BFF;  /* Change color on hover */
}

/* Hover effect on the menu item (trigger to display the dropdown) */
.menu-item:hover .pullDown {
    display: block;  /* Show the pull-down menu when hovering */
}

/* Style for the main link (iKON WINNERS) */
.menu-item a {
    position: relative;  /* So the pull-down can be positioned relative to this */
    display: inline-block;  /* Allow for inline/block display */
}

.menu-item a .hoverContent {
    cursor: pointer;  /* Show pointer cursor on hover */
}


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

  /* Make the Logo hidden when inside a .page container */
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
        <div>
            <Icon title="pattern-b"></Icon>
        </div>
    </a>

       
        <Link activeClassName="is-active" to="/tribe" className="futura-pt">
          Tribe
        </Link>
        <a
          href="https://fellowship.theikon.org"
          target="_blank"
          className="futura-pt"
          rel="noreferrer"
        >
          Fellowship
        </a>
            <a
          href="https://fellowship.theikon.org/ikonawards2023/"
          target="_blank"
          className="futura-pt"
          rel="noreferrer"
        >
          ikonAwards2023
        </a>
      </Wrap>
    </Box>
  )
}
export default Ele
