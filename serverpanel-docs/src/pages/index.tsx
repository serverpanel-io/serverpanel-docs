import React from "react"

import { IconContext } from "react-icons"

import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import Hero from "@site/src/components/Hero"
import Layout from "@theme/Layout"

import styles from "./styles.module.scss"

import Prism from "prismjs"
import Features from "../components/Features"
import PluginSupport from "../components/PluginSupport"
(typeof global !== "undefined" ? global : window).Prism = Prism
require("prismjs/components/prism-rust")

const Home = () => {
  const context = useDocusaurusContext()
  const { siteConfig } = context
  const { tagline } = siteConfig

  return (
    <IconContext.Provider value={{ style: { verticalAlign: "middle" } }}>
      <Layout description={tagline}>
        <Hero />
        <main className={styles.main}>
          <Features />
          <PluginSupport />
        </main>
      </Layout>
    </IconContext.Provider>
  )
}

export default Home