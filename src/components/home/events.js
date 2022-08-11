import React from "react"
import styled from "styled-components"
import Event from "../shared/event-card"
import Glimmer from "../shared/glimmer"
import StackedTitle from "../shared/stacked-title"
import ContentBox from "../shared/content-box"
import Outline from "../shared/outline"
import Pattern from "../shared/pattern-block"
import { EventsData } from "../../utilities/events-data"

const Box = styled.section`
  position: relative;
  overflow: hidden;
  padding-top: 4vw;
  .o-glimmer {
    z-index: -1;

    &.left {
      left: -30%;
      opacity: 0.35;
      top: 0%;
    }

    &.right {
      right: -30%;
      opacity: 0.25;
      top: 0%;
    }
  }

  .o-pattern-block {
    position: absolute;
    right: 0;
    top: 1vw;
  }
`
const EventsWrap = styled.div`
  padding: 6.234vw 0 8vw;

  @media screen and (max-width: 766px) {
    padding: 6rem 0 12rem;
  }
`

const Ele = () => {
  const events = EventsData().slice(0, 4)
  return (
    <Box>
      <ContentBox>
        <StackedTitle first="Timeline" second="of" third="Events" type="nods" />
        <Pattern />
        <EventsWrap>
          {events &&
            events.map((item, index) => {
              const node = item.node.data
              return (
                <Event
                  key={index}
                  venue={node.venue.text}
                  title={node.title.text}
                  date={node.date}
                  image={node.image.fluid.src}
                />
              )
            })}
        </EventsWrap>
      </ContentBox>
      <Outline title="buzz" />
      <Glimmer className="left" />
      <Glimmer className="right" />
    </Box>
  )
}

export default Ele
