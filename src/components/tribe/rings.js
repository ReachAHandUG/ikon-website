import React from "react"
import RotatingRing from "../shared/rotating-ring"
import CircularRing from "../shared/circular-ring"
import Box from "../shared/rings-box"

const Ele = () => {
  return (
    <Box>
      <RotatingRing type="pattern-d" scale={1.25} opacity={0.2} speed={200} />
      <RotatingRing type="ikon-tribe" scale={1.6} opacity={0.05} speed={300} />
      <CircularRing scale={0.45} opacity={0.3} fill="#5EC1A5" />
      <CircularRing scale={0.7} opacity={0.2} fill="#5EC1A5" />
    </Box>
  )
}

export default Ele
