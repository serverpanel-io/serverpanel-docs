import React from "react"

import clsx from "clsx"

import Link from "@docusaurus/Link"
import useBaseUrl from "@docusaurus/useBaseUrl"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"

import styles from "./styles.module.scss"

const Hero = () => {
  const context = useDocusaurusContext()
  const { siteConfig } = context
  const { tagline, title } = siteConfig

  return (
    <header id="hero" className={clsx("hero", styles.banner)}>
      <div className="container">
        <img
          src={useBaseUrl(`img/serverpanel-icon.png`)}
          alt="Logo"
          className={styles.logo}
        />

        <h1 className="hero__title">{title}</h1>
        <p className={clsx("hero__subtitle", styles.subtitle)}><b> </b> {tagline}</p>

        <div className={styles.buttons}>
          <Link
            className={clsx(
              "button button--primary button--lg",
              styles.getStarted
            )}
            to="https://discord.com/oauth2/authorize?client_id=1293210975201398825&permissions=395204159552&integration_type=0&scope=bot+applications.commands"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Hero