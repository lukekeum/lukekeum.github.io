import "./Container.scss"
import React from "react"

interface ContainerProps {
  children: React.ReactNode
}

export default function Container({ children }: ContainerProps) {
  return (
    <div id="navbar__container">
      <div>{children}</div>
    </div>
  )
}
