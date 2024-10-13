import React, { ReactNode } from "react"

import clsx from "clsx"
import { FiCoffee, FiDatabase, FiGrid, FiPackage, FiToggleRight, FiZap } from "react-icons/fi"

import styles from "./styles.module.scss"

interface Feature {
  icon: ReactNode
  title: string
  description: string
}

const size = 24
const data: Feature[] = [
  {
    icon: <FiPackage size={size} />,
    title: "Dead simple, but powerful",
    description:
      "ServerPanel offers a quick and simple setup process, allowing you to get it running in minutes without any technical expertise. Hosted in our cloud, the bot requires no maintenance from you, ensuring high uptime and smooth performance.",
  },
  {
    icon: <FiZap size={size} />,
    title: "Server Monitoring and Control",
    description:
      " ServerPanel allows users to monitor the real-time status of their game servers, including uptime, player counts, and server health. Users can start, stop, or restart servers directly from Discord using simple commands.",
  },
  {
    icon: <FiToggleRight size={size} />,
    title: "Wide Plugin Support for Customization",
    description:
      "ServerPanel offers a broad range of plugins that can be added to enhance your servers functionality. Users can easily manage plugins through the bot.",
  },
  {
    icon: <FiGrid size={size} />,
    title: "Multi-Server Support",
    description:
      "ServerPanel allows users to manage multiple game servers from a single Discord server. Whether you're running Minecraft, Rust, Unturned, or other supported games, you can control all your servers in one place.",
  },
]

const Feature = ({ icon, title, description }: Feature) => {
  return (
    <div className={clsx("col col--6", styles.feature)}>
      <div className="item">
        <div className={styles.header}>
          <div className={styles.icon}>{icon}</div>
          <h2 className={styles.title}>{title}</h2>
        </div>
        <p>{description}</p>
      </div>
    </div>
  )
}

const Features = () => {
  return (
    <section id="features" className={styles.features}>
      <div className="container">
        <div className="row">
          <div className="col col--11 col--offset-1">
            <div className="row">
              {data.map((props, idx) => (
                <Feature key={idx} {...props} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features