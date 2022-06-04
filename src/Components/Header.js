import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import "../App.css"
import inovoid from "../Assets/Inovoid.png"

export default function Header() {
  return (
    <div style={{zIndex:"5"}} id="home">
      <Navbar expand="lg" className="navbar-dark" fixed="top" style={{
        background: "linear-gradient(180deg, #000000 94.06%, rgba(0, 0, 0, 0) 100%)",
        borderRadius: "2px"
      }}>
        <Container>
          <Navbar.Brand href="#home"><img
          alt=""
          src={inovoid}
          width="150px"
          className="d-inline-block align-top" style={{ marginLeft: "0px" }}
        />{' '}</Navbar.Brand>
          <div style={{ marginRight: "0px" }}>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto" style={{ gap: "40px" }}>
                <Nav.Link href="#project">PROJECT</Nav.Link>
                <Nav.Link href="#info">ABOUT US</Nav.Link>
                <Nav.Link href="https://rshifts-testweb.vercel.app/contact-us">CONTACT</Nav.Link>

              </Nav>
            </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>
    </div>
  )
}
