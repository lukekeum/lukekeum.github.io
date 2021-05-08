import "./index.scss"
import React from "react"
import Container from "./Container"
import BuyMeACoffee from "./BuyMeACoffee"
import { Link } from "gatsby"

interface NavbarProps {}

export default function Navbar() {
  return (
    <Container>
      <h1 id="navbar__title">
        <Link to="/">lukekeum.me</Link>
      </h1>
      <BuyMeACoffee />
    </Container>
  )
}
