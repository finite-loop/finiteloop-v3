import React from "react"
import ReactFullpage from "@fullpage/react-fullpage"

import Teams from "../components/team"
import Hero from "../components/hero"

const FullPage = () => (
  <ReactFullpage
    licenseKey={process.env.GATSBY_FULLPAGE_LICENSE_KEY}
    anchors={["intro", "teams"]}
    menu="#menu"
    scrollingSpeed={1000}
    navigation
    render={({ state, fullpageApi }) => {
      return (
        <>
          <Hero />
          <Teams />
        </>
      )
    }}
  />
)

export default FullPage
