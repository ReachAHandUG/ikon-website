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
`

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
`

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
        <Link activeClassName="is-active" to="/guild" className="futura-pt">
          Guild
        </Link>

    
        //<Link activeClassName="is-active" to="/tribe" className="futura-pt">
          //Tribe
       // </Link>
       
    
    <a
          href="https://fellowship.theikon.org"
          target="_blank"
          className="futura-pt"
          rel="noreferrer"
        >
          Fellowship
        </a>
      </Wrap>
    </Box>
  )
}
export default Ele
