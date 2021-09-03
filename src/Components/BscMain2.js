import React from "react";
import { Container, Nav, Navbar, Row, Col } from "react-bootstrap";

export default function BscMain2() {
  return (
    <Container fluid className=" navbar_second">
      <Navbar bg="light" variant="light">
        <Container>
          {" "}
          <Nav.Link href="#transfers">Transfers</Nav.Link>
          <Nav.Link href="#holders">Holders</Nav.Link>
          <Nav.Link href="#info">Info</Nav.Link>
          <Nav.Link href="#exchange">Exchange</Nav.Link>
          <Nav.Link href="#dex_trades">DEX Trades</Nav.Link>
          <Nav.Link href="#read_contract">Read Contract</Nav.Link>
          <Nav.Link href="#write_contract">Write Contract</Nav.Link>
          <Nav.Link href="#analytics">Analytics</Nav.Link>
          <Nav.Link href="#comments">Comments</Nav.Link>
          <button class="btn rounded-1" type="submit">
            <i class="fa fa-search color:white"></i>
          </button>
        </Container>
      </Navbar>
    </Container>
  );
}
