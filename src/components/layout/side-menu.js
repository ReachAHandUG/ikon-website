import React, { useEffect, useRef } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Icon from "../shared/icon"
import {
  useGlobalDispatchContext,
  useGlobalStateContext,
} from "../../utilities/context"

const Box = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  top: -3.5rem;
  right: 0;
  z-index: 10;
  height: 100%;
  will-change: transform;
  transition: transform 1.5s cubic-bezier(0.22, 1, 0.36, 1);

  &.show {
    transform: none;
  }

  &.hide {
    transform: translate3d(110%, 0, 0);
  }

  a {
    padding: 0.877vw 0;
    padding-right: 2vw;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    text-align: right;
    font-size: 0.875rem;
    color: #fff8ac;
    transition: transform 0.5s ease, color 0.3s, opacity 0.3s;
    will-change: transform;
    opacity: 0.75;
    position: relative;

    &:hover {
      transform: translate3d(-2rem, 0, 0);
      color: #fff;
      opacity: 1;
    }

    &.is-active {
      color: #fff;
    }

    &:after {
      content: "";
      position: absolute;
      width: 2.924vw;
      height: 1px;
      background: #b98027;
      right: -30%;
    }
  }

  div {
    width: 0.877vw;
    height: 0.877vw;
    margin-left: 0.877vw;
  }

  svg {
    width: 100%;
    height: 100%;
  }
  @media screen and (max-width: 1023px) {
    a {
      font-size: 1.25rem;
      padding-bottom: 1.5rem;
      padding-right: 1.5rem;

      div {
        width: 1rem;
        height: 1rem;
        position: relative;
        top: -3px;
        left: 4px;
      }
    }
  }

  @media screen and (max-width: 766px) {
    top: 0;
    right: 0;
    width: 100%;
    background: rgba(0, 0, 0, 0.95);
    justify-content: center;
    transition-duration: 1s;

    a {
      padding: 0;
      font-size: 2rem;
      padding: 1.125rem 0;
      text-align: center;
      display: block;

      &:after {
        display: none;
      }

      div {
        width: 1.5rem;
        height: 1.5rem;
        position: absolute;
        margin: 0;
        left: -2.6rem;
        top: 1.7rem;
      }
    }
  }
`
const Ele = () => {
  const { show_menu } = useGlobalStateContext()
  const dispatch = useGlobalDispatchContext()
  const obj = useRef()

  useEffect(() => {
    if (window.innerWidth < 766) {
      let links = obj.current.querySelectorAll("a")
      links.forEach(link => {
        link.addEventListener("click", () => {
          dispatch({
            type: "SHOW_MENU",
            value: "hide",
          })
        })
      })
    }
  })

  return (
    <Box ref={obj} className={show_menu}>
      <ul>
        <li>
          <Link activeClassName="is-active" to="/" className="futura-pt">
            <span>IKON</span>
            <div>
              <Icon title="pattern-d"></Icon>
            </div>
          </Link>
        </li>
        <li>
          <Link activeClassName="is-active" to="/awards" className="futura-pt">
            <span>Awards</span>
            <div>
              <Icon title="pattern-a"></Icon>
            </div>
          </Link>
        </li>
        <li>
          <Link activeClassName="is-active" to="/guild" className="futura-pt">
            <span>Guild</span>
            <div>
              <Icon title="pattern-b"></Icon>
            </div>
          </Link>
        </li>
        <li>
          <a href="https://fellowship.theikon.org/team/" className="futura-pt">
            <span>Team</span>
            <div>
              <Icon title="pattern-b"></Icon>
            </div>
          </a>
        </li>
        <li>
          <Link activeClassName="is-active" to="/tribe" className="futura-pt">
            <span>Tribe</span>
            <div>
              <Icon title="pattern-c"></Icon>
            </div>
          </Link>
        </li>
        <li>
          <a
            href="https://fellowship.theikon.org"
            target="_blank"
            className="futura-pt"
            rel="noreferrer"
          >
            <span>Fellowship</span>
            <div>
              <Icon title="pattern-c"></Icon>
            </div>
          </a>
        </li>
        {/* <li>
                    <Link to="/" className="futura-pt">
                        <span>Media</span>
                        <div>
                            <Icon title="pattern-d"></Icon>
                        </div>
                    </Link>
                </li> */}
        {/* <li>
          <Link to="/#connect" className="futura-pt">
            <span>Connect</span>
            <div>
              <Icon title="pattern-e"></Icon>
            </div>
          </Link>
        </li> */}
      </ul>
    </Box>
  )
}
export default Ele
