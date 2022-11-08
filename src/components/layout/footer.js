import React from "react"
import styled from "styled-components"
import Pattern from "../shared/pattern-block"
import Outline from "../shared/outline"
import Partners from "../layout/partners"
import { useGlobalStateContext } from "../../utilities/context"
import { Link } from "gatsby"

const Box = styled.footer`
  background: #000;
  padding: 11.135vw 8.626vw 11.789vw 19vw;
  overflow: hidden;
  position: relative;

  &.awards {
    background-color: #04090a;
  }

  @media screen and (max-width: 1023px) {
    padding: 10rem 4rem 4rem;
  }

  @media screen and (max-width: 766px) {
    padding: 10rem 3rem 12rem;
  }
`

const Title = styled.div`
  overflow: hidden;
  padding-bottom: 8.278vw;

  h1 {
    color: #b98027;
    font-size: 5rem;
    line-height: 1;
  }

  .o-pattern-block {
    right: 8.626vw;
    top: calc(11.135vw + 2px);
    position: absolute;
  }

  @media screen and (max-width: 1023px) {
    h1 {
      font-size: 4.5rem;
    }
  }

  @media screen and (max-width: 766px) {
    h1 {
      font-size: 3rem;
    }
  }
`

const Map = styled.div`
  display: flex;
  flex-wrap: nowrap;
  font-size: 0.875rem;

  > section {
    width: 33.33%;
    padding-right: 12rem;

    div {
      padding-bottom: 3.5rem;
    }
  }

  .section-title {
    color: #c8a883;
    padding-bottom: 1rem;
    display: block;
  }

  a {
    display: block;
    padding: 0.125rem 0;

    &:hover {
      color: #b98027;
    }
  }

  p,
  a {
    line-height: 2;
  }

  @media screen and (max-width: 766px) {
    flex-wrap: wrap;

    > section {
      width: 50%;
      padding: 0;
      padding-right: 1.5rem;
    }
  }
`

const Ele = () => {
  const { active_section } = useGlobalStateContext()

  return (
    <Box className={active_section} id="connect">
      <Title>
        <h1 className="futura-pt">Contact</h1>
        <Pattern />
      </Title>
      <Map>
        <section>
          <div>
            <span className="futura-pt section-title">Sitemap</span>
            <Link to="/">iKon Home</Link>
            <Link to="/awards">iKon Awards</Link>
            <Link to="/tribe">iKon Tribe</Link>
            <Link to="/guild">iKon Guild</Link>
            <Link to="/privacy-policy">Privacy Policy</Link>
          </div>
          <p>
            {new Date().getFullYear()} Reach A Hand Uganda. All Rights reserved
          </p>
        </section>

        <section>
          <div>
            <span className="futura-pt section-title">Call</span>
            <p>+256 414697037</p>
          </div>

          <div>
            <span className="futura-pt section-title">Email</span>
            <p> info@theikon.org</p>
          </div>

          <div>
            <span className="futura-pt section-title">Address</span>
            <p>
              Plot 7502, Block 244, Heritage Village, Kansanga, Gabba Road,
              Kampala, Uganda
            </p>
          </div>
        </section>

        <section>
          <div>
            <span className="futur-pt section-title">Follow Us</span>
            <a
              href="https://facebook.com/afrikaikons"
              rel="noreferrer"
              target="_blank"
            >
              Facebook
            </a>
            <a
              href="https://twitter.com/ikonawards"
              rel="noreferrer"
              target="_blank"
            >
              Twitter
            </a>
            <a
              href="https://www.instagram.com/ikonawards/"
              rel="noreferrer"
              target="_blank"
            >
              Instagram
            </a>
          </div>
        </section>
      </Map>
      <Partners />
      <Outline title="connect" />
    </Box>
  )
}
export default Ele
