import React from "react";
import { Container, Card } from "react-bootstrap";

export default function () {
  return (
    <div>
      <p>Read Contract Information</p>
      <Card className="readContract">
        <Card.Header as="h6">
          <a className="readCardHead " href="#">
            1. name
          </a>
        </Card.Header>
        <Card.Body>
          Oikos Network Token <cite title="Source Title">string</cite>
        </Card.Body>
      </Card>
      <Card className="readContract">
        <Card.Header as="h6">
          {" "}
          <a className="readCardHead " href="#">
            2. totalSupply
          </a>
        </Card.Header>
        <Card.Body>
          <a href="#">190075445544103879098076865 </a>{" "}
          <cite title="Source Title">uint256</cite>
        </Card.Body>
      </Card>
      <Card className="readContract">
        <Card.Header as="h6">1. name</Card.Header>
        <Card.Body>
          Oikos Network Token <cite title="Source Title">string</cite>
        </Card.Body>
      </Card>
      <Card className="readContract">
        <Card.Header as="h6">1. name</Card.Header>
        <Card.Body>
          Oikos Network Token <cite title="Source Title">string</cite>
        </Card.Body>
      </Card>
    </div>
  );
}
