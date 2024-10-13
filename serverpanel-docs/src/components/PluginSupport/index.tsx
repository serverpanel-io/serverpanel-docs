import React from "react"

import { FiCheck, FiX } from "react-icons/fi"

import Headline from "@site/src/components/Headline"

import styles from "./styles.module.scss"

const data = [
  {
    id: "rust",
    name: "Rust",
    highlighted: true,
  },
  {
    id: "unturned",
    name: "Unturned",
    highlighted: false,
  },
  {
    id: "minecraft",
    name: "Minecraft",
    highlighted: false,
  },
]

const features = [
  {
    name: "Discord Linking",
    values: { rust : true, unturned: true, minecraft: true },
  },
  {
    name: "Ban Management",
    values: { rust : false, unturned: false, minecraft: false },
  },
  {
    name: "Server Status",
    values: { rust : true, unturned: true, minecraft: true },
  },
  {
    name: "Player Logs",
    values: { rust : false, unturned: false, minecraft: false },
  },
  {
    name: "Warnings",
    values: { rust : false, unturned: false, minecraft: false },
  },
]

const renderTable = () => {
  const size = 24
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th></th>
          {data.map((props, idx) => (
            <th key={idx}>{props.name}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {features.map((props, idx) => (
          <tr key={idx}>
            <td className={styles.label}>{props.name}</td>
            {props.values &&
              data.length &&
              data.map((item, idx) => (
                <td
                  key={idx}
                  className={item.highlighted ? styles.resultH : styles.result}
                >
                  {props.values[item.id] === true ? (
                    <FiCheck size={size} />
                  ) : (
                    <FiX size={size} className={styles.resultX} />
                  )}
                </td>
              ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

const Comparison = () => {
  return (
    <section id="comparison" className={styles.comparison}>
      <div className="container">
        <div className="row">
          <div className="col col--4 col--offset-1">
            <Headline
              category="Plugin Support"
              title="Check if your favorite game server is supported?"
              subtitle="Feature support may vary depending on the Game Server. Altough, we are constantly adding new features and game server types."
            />
          </div>
          <div className="col col--6 col--offset-1">{renderTable()}</div>
        </div>
      </div>
    </section>
  )
}

export default Comparison