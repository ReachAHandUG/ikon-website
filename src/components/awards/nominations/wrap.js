import React from "react"
import ContentBox from "../../shared/content-box"
import Glimmer from "../../shared/glimmer"
import Outline from "../../shared/outline"
import Box from "./box"
import Header from "./header"
import Hero from "./hero"
import List from "./list"
import Button from "../../shared/inline-button"

const Ele = () => {
  return (
    <Box>
      <Hero />
      <ContentBox width="o-nods-contentbox">
        <Header />
        <List />
        <div className="cta">
          <Button
            type="box"
            to="/nomination"
            method="link"
            label="Submit Nomination"
          />
          <Button
            type="box"
            to="https://drive.google.com/file/d/1KGvd4FWHIqbRSkhh2otEiRd0QCtMi2F8/view"
            method="external-link"
            label="Download Form"
          />
        </div>
      </ContentBox>
      <Glimmer />
      <Outline title="nomination" />
    </Box>
  )
}
export default Ele
