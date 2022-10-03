import * as React from "react"
import styled from "styled-components"
import PatternBlock from "../shared/pattern-block"
import Icon from "../shared/icon"

const Box = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  margin: 0 auto;

  @media screen and (max-width: 1200px) {
    width: 100%;
  }
`

const Card = styled.li`
  padding: 1.5rem;
  width: 25%;
  margin-bottom: 3rem;

  @media screen and (max-width: 766px) {
    width: 50%;
    padding: 1.5rem;
  }
`

const Title = styled.h3`
  padding-top: 1.5rem;
  padding-left: 2rem;
  color: #fff;
  span {
    display: block;
    text-transform: none;
    font-family: "Playfair Display", "serif";
    color: #b98027;
    padding-top: 0.25rem;
    font-size: 0.8125rem;
  }

  @media screen and (max-width: 766px) {
    padding-left: 0;
  }
`

const Button = styled.button`
  height: 100%;
  width: 100%;
  text-align: left;
  position: relative;
  transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.3s;

  &:hover {
    transform: translate3d(0, -2rem, 0);
    opacity: 0.7;
  }

  &:after {
    content: "";
    position: absolute;
    top: -3rem;
    left: -3rem;
    width: 10rem;
    height: 10rem;
    border: solid 1px #b98027;
    border-radius: 100%;
    z-index: -1;
    opacity: 0.3;
  }
`

const ImageBox = styled.figure`
  height: 20vw;
  background-color: #b98027;
  position: relative;
  overflow: hidden;
  border-top-left-radius: 4rem;
  .o-pattern-block {
    bottom: 0;
    position: absolute;
    background-color: #000;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media screen and (max-width: 766px) {
    height: 15rem;
  }
`

const IconWrap = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;
  width: 1.25rem;
  height: 1.25rem;
  margin: 1rem;
`

const Ele = ({ members, showMember }) => {
  return (
    <Box>
      {members &&
        members.length &&
        members.map((member, index) => {
          return (
            <Card key={index}>
              <Button onClick={() => showMember(member)}>
                <ImageBox>
                  <IconWrap>
                    <Icon title="pattern-c" />
                  </IconWrap>
                  <PatternBlock />
                  <img src={member.photo.fluid.src} alt="" />
                </ImageBox>
                <Title className="futura-pt">
                  {member.name.text} <span>{member.title.text}</span>
                </Title>
              </Button>
            </Card>
          )
        })}
    </Box>
  )
}
export default Ele
