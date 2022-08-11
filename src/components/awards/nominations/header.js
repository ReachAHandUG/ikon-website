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

  @media screen and (max-width: 766px) {
    section {
      column-count: 1;
    }
  }
`

const Ele = () => {
  return (
    <>
      <StackedTitle
        type="nods"
        first="Nominations"
        second="and"
        third="Judging"
      />
      <Caption>
        <InView animation="fade-in">
          <section>
            <p>{AwardsPageData().nomination_description.text}</p>
          </section>
        </InView>
      </Caption>
      <PatternBlock type="envy" />
      <SidePattern pos="o-side-pattern" />
    </>
  )
}
export default Ele
