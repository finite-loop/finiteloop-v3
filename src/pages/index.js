import React from "react"
import Loadable from "react-loadable"

import SEO from "../components/seo"
import Menu from "../components/menu"

const LoadableComponent = Loadable({
  loader: () => import("../components/fullPage"),
  loading() {
    return <div>Loading...</div>
  },
})

const IndexPage = () => {
  return (
    <>
      <LoadableComponent />
      <Menu />
      <SEO title="Home" />
    </>
  )
}

export default IndexPage
