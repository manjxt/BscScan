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
      <Container fluid className="main_parent_container">
        <Row>
          <Col>
            <Container fluid className="main_container">
              <div className="main_container_text">
                <p className="main_container_text_heading">
                  <b>Overview</b>
                </p>
                <p className="main_container_hover_text">
                  <b>BEP - 20</b>
                </p>
              </div>
              <div className="seperator"></div>

              <Row>
                <Col>
                  <div className="main_container_row1">
                    <p>PRICE</p>
                  </div>
                  <p>$0.01 @ 0.000027 BNB (+7.21%)</p>
                </Col>
                <Col>
                  <div className="token main_container_row1">
                    <p>FULLY DILUTED MARKET CAP</p>
                    <i class="fa fa-question-circle"></i>
                  </div>
                </Col>
              </Row>

              <div className="seperator"></div>
            </Container>
          </Col>
          <Col>
            <Container fluid className="main_container">
              <div className="main_container_text">
                <p className="main_container_text_heading">
                  <b>Profile Summary</b>
                </p>
              </div>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
