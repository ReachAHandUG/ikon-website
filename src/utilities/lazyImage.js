import * as React from "react"
import styled from "styled-components"

import { useInView } from "react-intersection-observer"
import { useState, useEffect } from "react"

const Box = styled.img`
  display: block;
`

const Obj = ({ url }) => {
  const [src, setSrc] = useState("")
  const [visible, setVisible] = useState("")
  const [image, imageInView, entry] = useInView({
    triggerOnce: true,
    rootMargin: "500px",
  })

  useEffect(() => {
    if (imageInView && url) {
      setSrc(url)

      if (entry.target.complete) {
        setVisible("is-visible")
      }
    }
  }, [imageInView, entry, url])

  return <Box ref={image} className={visible} src={src} alt="" />
}

export default Obj
