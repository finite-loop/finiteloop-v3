import React from "react"
import Loadable from "react-loadable"

import SEO from "../components/seo"
import Menu from "../components/menu"

import logo from "../images/FL-GrayWhite.jpg"

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
      <img className="logo" src={logo} />
      <Menu />
      <SEO title="Home" />
    </>
  )
}

export default IndexPage
