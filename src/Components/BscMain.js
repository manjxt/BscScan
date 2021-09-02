import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { config } from "@fortawesome/fontawesome-svg-core";

console.log(config.autoA11y); // true

export default function BscMain() {
  return (
    <div className="container3">
      <div className="main_heading_text">
        <p>
          <b>BscScan</b> - Sponsored slots available.
        </p>
        <a className="heading_text_link heading_text2" href="#">
          {" "}
          Book your slot here!
        </a>
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
              <Row>
                <Col xs={4}>
                  <p className="main_container_text">Total Supply:</p>
                </Col>
                <Col>
                  <p className="main_container_text main_container_text2">
                    186,994,359.011005 OKS
                    <i class="fa fa-info-circle"></i>
                  </p>
                </Col>
              </Row>
              <div className="seperator"></div>
              <Row>
                <Col xs={4}>
                  <p className="main_container_text">Holders:</p>
                </Col>
                <Col>
                  <p className="main_container_text main_container_text2">
                    993 addresses
                  </p>
                </Col>
              </Row>
              <div className="seperator"></div>
              <Row>
                <Col xs={4}>
                  <p className="main_container_text">Transfers:</p>
                </Col>
                <Col>
                  <p className="main_container_text main_container_text2">
                    15,603
                  </p>
                </Col>
              </Row>
            </Container>
          </Col>
          <Col>
            <Container fluid className="main_container">
              <div className="main_container_text3">
                <p className="main_container_text_heading">
                  <b>Profile Summary</b>
                </p>
              </div>
              <div className="seperator"></div>
              <Row>
                <Col xs={4}>
                  <p className="main_container_text3">Contract:</p>
                </Col>
                <Col>
                  <a
                    className="main_container_text3 main_container_text2 heading_text2"
                    href="#"
                  >
                    0x18aCf236eB40c0d4824Fb8f2582EBbEcD325Ef6a
                  </a>
                </Col>
              </Row>
              <div className="seperator"></div>
              <Row>
                <Col xs={4}>
                  <p className="main_container_text3">Decimals:</p>
                </Col>
                <Col>
                  <p className="main_container_text3">18</p>
                </Col>
              </Row>
              <div className="seperator"></div>
              <Row>
                <Col xs={4}>
                  <p className="main_container_text3">Official Site:</p>
                </Col>
                <Col>
                  <a
                    className="main_container_text3 main_container_text2 heading_text2"
                    href="https://oikos.cash/"
                  >
                    https://oikos.cash/
                  </a>
                </Col>
              </Row>
              <div className="seperator"></div>
              <Row>
                <Col xs={4}>
                  <p className="main_container_text3">Social Profiles:</p>
                </Col>
                <Col>
                  <div className="icon_color">
                    <a class="main_container_text3  icon_color fa fa-facebook-f"></a>
                    <a class="main_container_text3  icon_color fa fa-twitter"></a>
                    <a class="main_container_text3  icon_color fa fa-github"></a>
                    <a class="main_container_text3  icon_color fa fa-telegram"></a>
                  </div>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
