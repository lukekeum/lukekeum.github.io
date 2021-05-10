import "./index.scss"
import React from "react"
import { Link } from "gatsby"

interface NavbarProps {}

export default function Navbar({}: NavbarProps) {
  return (
    <nav id="navbar__wrapper">
      <h1>
        <Link to="/">lukekeum.me</Link>
      </h1>
      <a href="https://github.com/lukekeum" id="navbar__github_link">
        github
      </a>
    </nav>
  )
}
