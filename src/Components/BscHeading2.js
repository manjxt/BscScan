import React, { useState } from "react";
import { Container, Nav, Navbar, Row, Col } from "react-bootstrap";

export default function BscHeading2({ selected, setSelected }) {
  const changeSelected = (val) => setSelected(val);

  const containerStyle = (val) => ({
    padding: "10px",
    color: selected === val ? "rgb(52, 152, 219)" : "rgb(110, 115, 120)",
    fontSize: "1.1em",
  });

  return (
    <Container fluid id="navbar_second">
      <div
        style={containerStyle("transfers")}
        onClick={() => changeSelected("transfers")}
      >
        Transfers
      </div>
      <div
        style={containerStyle("holders")}
        onClick={() => changeSelected("holders")}
        className="modifiedNavLink"
        href="#holders"
      >
        Holders
      </div>
      <div
        style={containerStyle("info")}
        onClick={() => changeSelected("info")}
        className="modifiedNavLink"
        href="#info"
      >
        Info
      </div>
      <div
        style={containerStyle("exchange")}
        onClick={() => changeSelected("exchange")}
        className="modifiedNavLink"
        href="#exchange"
      >
        Exchange
      </div>
      <div
        style={containerStyle("dexTrades")}
        onClick={() => changeSelected("dexTrades")}
        className="modifiedNavLink"
        href="#dex_trades"
      >
        DEX Trades
      </div>
      <div
        style={containerStyle("read")}
        onClick={() => changeSelected("read")}
        className="modifiedNavLink"
        href="#read_contract"
      >
        Read Contract
      </div>
      <div
        style={containerStyle("write")}
        onClick={() => changeSelected("write")}
        className="modifiedNavLink"
        href="#write_contract"
      >
        Write Contract
      </div>
      <div
        style={containerStyle("analytics")}
        onClick={() => changeSelected("analytics")}
        className="modifiedNavLink"
        href="#analytics"
      >
        Analytics
      </div>
      <div
        style={containerStyle("comments")}
        onClick={() => changeSelected("comments")}
        className="modifiedNavLink"
        href="#comments"
      >
        Comments
      </div>
      <button class="btn rounded-1" type="submit">
        <i class="fa fa-search color:white"></i>
      </button>
    </Container>
  );
}
