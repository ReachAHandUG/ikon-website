import React from "react"
import styled from "styled-components"
import Pattern from "../shared/pattern-block"
import Outline from "../shared/outline"
import InView from "../shared/in-view"
import ContentBox from "../shared/content-box"
import Tweet from "../shared/tweet"
import Glimmer from "../shared/glimmer"

const Box = styled.section`
  background-color: #070e0f;
  position: relative;
  padding: 13.892vw 0 3vw;
  overflow: hidden;

  .o-glimmer {
    z-index: 0;

    &.left {
      left: -35%;
      opacity: 0.2;
      top: 35%;
    }

    &.right {
      right: -35%;
      opacity: 0.2;
      top: 5%;
    }
  }
`

const Title = styled.h1`
  font-size: 5rem;
  text-align: center;
  color: #b98027;
  line-height: 1;
`

const Header = styled.div`
  position: relative;
  .o-pattern-block {
    right: 16.813vw;
    top: 0.2vw;
    position: absolute;
  }
`

const Wrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 5.56vw 0 0;

  article {
    padding: 3rem;
    width: 33%;
  }
`

const Ele = () => {
  return (
    <Box>
      <Outline title="stream" />
      <Header>
        <InView animation="fade-in">
          <Title className="futura-pt">Stream</Title>
        </InView>
        <Pattern />
      </Header>
      <ContentBox width="large">
        <Wrap>
          <Tweet />
          <Tweet src="image" />
          <Tweet />
          <Tweet src="image" />
          <Tweet />
          <Tweet src="image" />
        </Wrap>
      </ContentBox>
      <Glimmer className="left" />
      <Glimmer className="right" />
    </Box>
  )
}
export default Ele
