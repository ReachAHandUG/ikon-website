import React from "react"
import RotatingRing from "../../shared/rotating-ring"
import CircularRing from "../../shared/circular-ring"
import Box from "../../shared/rings-box"

export default () => {
  return (
    <Box>
      <RotatingRing type="pattern-a" scale={0.9} opacity={0.2} speed={250} />
      <RotatingRing
        type="square"
        scale={0.425}
        opacity={0.3}
        speed={50}
        fill="#B98027"
      />
      <RotatingRing type="ikon" scale={1.4} opacity={0.2} speed={200} />
      <CircularRing scale={0.95} opacity={0.3} />
      <CircularRing scale={0.65} opacity={0.15} fill="#EC423C" />
    </Box>
  )
}
