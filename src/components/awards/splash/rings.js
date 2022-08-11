import React from "react"
import RotatingRing from "../../shared/rotating-ring"
import CircularRing from "../../shared/circular-ring"
import Box from "../../shared/rings-box"

export default () => {
  return (
    <Box>
      <RotatingRing type="pattern-b" scale={0.95} opacity={0.2} speed={100} />
      <RotatingRing
        type="square"
        scale={0.425}
        opacity={0.3}
        speed={0}
        theme="mint"
      />
      <RotatingRing
        type="ikon-awards"
        scale={1.36}
        opacity={0.15}
        speed={200}
      />
      <CircularRing scale={0.9} opacity={0.2} />
    </Box>
  )
}
