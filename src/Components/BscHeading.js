import React from "react";
import token from "../Assests/token.png";
import {
  Container,
  Row,
  Col,
  Button,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";

export default function BscHeading() {
  return (
    <div class="container2">
      <Row>
        <Col>
          <div class="token">
            <img
              src={token}
              class="d-inline-block align-text-top"
              width="35"
              height="35"
              align="left"
              hspace="10"
            ></img>
            <h3>{"  "} Token </h3>
            <h5>
              Oikos Network Token <i class="fa fa-info-circle"></i>
            </h5>
          </div>
        </Col>
        <Col>
          <div class="token_buttons">
            <DropdownButton className="token_button" title="Buy">
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </DropdownButton>
            <DropdownButton className="token_button" title="Exchange">
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </DropdownButton>
            <DropdownButton className="token_button" title="Earn">
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </DropdownButton>
            <DropdownButton className="token_button" title="Gaming">
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </DropdownButton>
          </div>
        </Col>
      </Row>
    </div>
  );
}