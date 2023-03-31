import React from "react"

import styles from "./htmlOutput.module.css"

interface IProps {
  html: string
}
export default function HTMLOutput({ html }: IProps) {
  return (
    <div
      className={styles.htmlOutput}
      dangerouslySetInnerHTML={{ __html: html }}
    ></div>
  )
}
