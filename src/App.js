import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import DropdownNavbar from "./Components/DropdownNavbar";
import LogoNavbar from "./Components/LogoNavbar";
import BscBody from "./Components/BscBody";
import { Navbar, Container, Row, Col } from "react-bootstrap";

function App() {
  return (
    <div>
      <Navbar>
        <Container fluid id="navbox">
          <Row>
            <Col>
              <div>
                <LogoNavbar />
                <div class="secondary_text">
                  <p>BNB: $470.05 (-0.88%)</p>
                </div>
              </div>
            </Col>
            <Col xs={7} id="searchbar">
              <Container
                style={{
                  marginLeft: "auto",
                  marginRight: -100,
                }}
                fluid
              >
                {/* <div style={{ backgroundColor: "#000" }}> */}
                <form
                  style={{ marginRight: 20 }}
                  class="d-flex container-fluid"
                >
                  <input
                    class="form-control rounded-0"
                    type="search"
                    placeholder="Search by Address / Txn Hash / Block / Holder"
                    aria-label="Search"
                    size="130"
                  />
                  <button class="btn rounded-1" type="submit">
                    <i class="fa fa-search color:white"></i>
                  </button>
                </form>
                <div style={{ marginTop: 10, marginRight: 20 }}>
                  <DropdownNavbar />
                </div>
              </Container>
              {/* </div> */}
            </Col>
          </Row>
        </Container>
      </Navbar>
      <BscBody />
    </div>
  );
}

export default App;
