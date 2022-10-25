import React, { useEffect, useRef } from "react"
import styled from "styled-components"
import { useInView } from "react-intersection-observer"

const Box = styled.div`
  video,
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  video {
    z-index: 1;
  }

  img {
    z-index: 0;
  }
`

const Ele = ({ poster, src, className }) => {
  const player = useRef()
  const [video, videoInView] = useInView()

  useEffect(() => {
    if (videoInView && src) {
      player.current.play()
    }
  }, [videoInView, src])

  return (
    <Box ref={video} className={"c-video-box " + className}>
      {poster && <img src={poster} alt="" />}
      {src && (
        <video ref={player} loop poster={poster} muted playsInline autoPlay>
          <source src={src} type="video/mp4" />
        </video>
      )}
    </Box>
  )
}

export default Ele
