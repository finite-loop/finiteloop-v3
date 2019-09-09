import React from "react"
import ReactFullpage from "@fullpage/react-fullpage"

import SEO from "../components/seo"
import Menu from "../components/menu"
import Teams from "../components/team"
import Hero from "../components/hero"

const IndexPage = () => {
  const onLeave = (origin, destination, direction) => {
    console.log("onLeave", { origin, destination, direction })
  }

  return (
    <>
      <SEO title="Home" />
      <ReactFullpage
        licenseKey={process.env.GATSBY_FULLPAGE_LICENSE_KEY}
        anchors={["intro", "teams"]}
        menu="#menu"
        scrollingSpeed={1000}
        navigation
        onLeave={onLeave.bind(this)}
        render={({ state, fullpageApi }) => {
          return (
            <div className="text-center">
              <Hero />
              <Teams />
            </div>
          )
        }}
      />
      <Menu />
    </>
  )
}

export default IndexPage
