import React from "react"
import RotatingRing from "../shared/rotating-ring"
import CircularRing from "../shared/circular-ring"
import Box from "../shared/rings-box"
export default () => {
  return (
    <Box>
      <RotatingRing type="pattern-c" scale={0.95} opacity={0.1} speed={100} />
      <RotatingRing type="ikon-guild" scale={1.5} opacity={0.15} speed={300} />
      <CircularRing scale={0.45} opacity={0.3} fill="red" />
      <CircularRing scale={0.9} opacity={0.2} fill="red" />
    </Box>
  )
}
