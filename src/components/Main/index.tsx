import React from "react"
import DateViewer from "./DateViewer"

interface MainProps {}

export default function Main({}: MainProps) {
  return (
    <section id="main">
      <DateViewer />
    </section>
  )
}
