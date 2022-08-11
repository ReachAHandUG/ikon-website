import React from "react"
import styled from "styled-components"
import Event from "../shared/event-card"
import Glimmer from "../shared/glimmer"
import StackedTitle from "../shared/stacked-title"
import ContentBox from "../shared/content-box"
import Pattern from "../shared/pattern-block"
import heroImg from "../../images/content/cut-out-f.png"
import { EventsData } from "../../utilities/events-data"

const Box = styled.section`
  position: relative;
  overflow: hidden;
  padding-top: 8vw;

  .o-glimmer {
    z-index: -1;
    left: -30%;
    opacity: 0.75;
    top: -5vw;
    width: 65vw;
    height: 65vw;
  }

  .o-pattern-block {
    position: absolute;
    right: 0;
    top: 5vw;
  }

  .o-calendar-box {
    padding-left: 13vw;
  }

  @media screen and (max-width: 766px) {
    padding-top: 14rem;

    .o-calendar-box {
      padding-left: 3rem;
    }
  }
`

const EventsWrap = styled.div`
  padding: 9.234vw 0 12vw;

  @media screen and (max-width: 766px) {
    padding: 5rem 0 8rem;
  }
`

const Hero = styled.figure`
  position: absolute;
  width: 25.163vw;
  height: 36.696vw;
  z-index: 0;
  left: 3vw;
  top: 12vw;

  img {
    object-fit: contain;
    width: 85%;
    height: 85%;
  }

  @media screen and (max-width: 766px) {
    z-index: -1;
    top: 12vw;
    width: 46.163vw;
    height: 66.696vw;
  }
`

const Ele = () => {
  const events = EventsData()

  return (
    <Box id="sec-calendar">
      <ContentBox width="o-calendar-box">
        <StackedTitle first="Calendar" />
        <Pattern type="envy" />
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
      <Hero>
        <img src={heroImg} alt="" />
      </Hero>
      <Glimmer className="left" />
    </Box>
  )
}

export default Ele
