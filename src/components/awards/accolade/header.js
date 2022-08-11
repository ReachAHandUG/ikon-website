import React from "react"
import styled from "styled-components"
import InView from "../../shared/in-view"
import SidePattern from "../../shared/side-pattern"
import PatternBlock from "../../shared/pattern-block"
import StackedTitle from "../../shared/stacked-title"
import { AwardsPageData } from "../data"

const Caption = styled.div`
  overflow: hidden;
  padding-top: 6.48vw;

  section {
    column-count: 2;
    line-height: 2;
  }

  .cta {
    padding-top: 7.5vw;
  }

  .cta,
  .kibo-section {
    padding-left: 13vw;
  }

  h2 {
    color: #c39f63;
    padding-bottom: 3rem;
    font-size: 1.25rem;
  }

  @media screen and (max-width: 766px) {
    section {
      column-count: 1;
    }

    .cta,
    .kibo-section {
      padding-left: 0;
    }
  }
`

const Ele = () => {
  return (
    <>
      <StackedTitle
        type="nods"
        first="Heritage"
        second="meets"
        third="Craftmanship"
      />
      <Caption>
        <InView animation="fade-in">
          <div className="kibo-section">
            <h2 className="futura-pt">The Harness</h2>
            <section>
              <p>{AwardsPageData().harness_description.text}</p>
            </section>
          </div>
        </InView>
      </Caption>
      <PatternBlock type="envy" />
      <SidePattern pos="o-side-pattern" />
    </>
  )
}
export default Ele
