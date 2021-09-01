import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export default function BscMain() {
  return (
    <div className="container3">
      <div className="main_heading_text">
        <p>
          <b>BscScan</b> - Sponsored slots available.
        </p>
        <p className="heading_text_link"> Book your slot here!</p>
      </div>
      <Row>
        <Col>
          <Container className="main_container"></Container>
        </Col>
        <Col>
          <Container className="main_container"></Container>
        </Col>
      </Row>
    </div>
  );
}
