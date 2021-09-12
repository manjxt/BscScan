import React, { useState, useEffect } from "react";
import data from "../Assests/transferData.json";
import { Container, Row, Col } from "react-bootstrap";
import moment from "moment";
const last = data.length / 25;

export default function BscDataList({ selected }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [transfers, setTransfers] = useState(data.slice(0, 25));

  useEffect(() => {
    setTransfers(data.slice(25 * (currentPage - 1), 25 * currentPage));
  }, [currentPage]);
  return (
    <Container fluid style={{ alignItems: "center" }}>
      <Heading setCurrentPage={setCurrentPage} currentPage={currentPage} />
      <div className="seperator"></div>
      {transfers.map((item, index) => (
        <Tile {...item} key={index} />
      ))}
    </Container>
  );
}

const Heading = ({ currentPage, setCurrentPage }) => (
  <div
    style={{
      paddingLeft: "1%",
      paddingRight: "1%",
    }}
  >
    <div className="pages">
      <p>A total of 15,885 transactions found</p>
      <div>
        <button onClick={() => setCurrentPage(1)}>First</button>
        <button
          onClick={() => setCurrentPage((prev) => prev - 1)}
        >{`<`}</button>
        <button>
          Page {currentPage} of {data.length / 25}
        </button>
        <button onClick={() => setCurrentPage((prev) => prev + 1)}>
          {">"}
        </button>
        <button onClick={() => setCurrentPage(last)}>Last</button>
      </div>
    </div>
    <div className="seperator"></div>
    <Row className="dataListHeading">
      <Col>Txn Hash</Col>
      <Col>
        Method{"  "}
        <i class="fa fa-info-circle"></i>
      </Col>
      <Col>Age</Col>
      <Col>From</Col>
      <Col>To</Col>
      <Col>Quantity</Col>
    </Row>
    <div className="seperator" />
  </div>
);

const commonTileStyle = {
  bacgroundColor: "#fff",
  fontSize: "15px",
  color: "#000",
  fontWeight: "500",
};

const Tile = ({ txHash, from, to, timeStamp, dateTime, quantity, method }) => {
  return (
    <div
      style={{
        bacgroundColor: "#fff",
        paddingLeft: "10px",
        paddingRight: "10px",
      }}
    >
      <Container
        fluid
        style={{
          paddingTop: "1%",
          paddingBottom: "1%",
          backgroundColor: "#fff",
        }}
      >
        <Row className="dataListHeading">
          <Col
            style={{
              ...commonTileStyle,
              color: "rgb(52, 152, 219)",
            }}
          >
            {txHash && txHash.slice(0, 15)}...
          </Col>
          <Col style={{ ...commonTileStyle }}>
            <div
              style={{
                backgroundColor: "rgb(225,237,247)",
                maxWidth: "150px",
                padding: "7px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "12px",
                borderRadius: "10px",
              }}
            >
              {method}
            </div>
          </Col>
          <Col style={{ ...commonTileStyle }}>
            {timeStamp && moment(`${dateTime}`).fromNow()}
          </Col>
          <Col style={{ ...commonTileStyle, color: "rgb(52, 152, 219)" }}>
            {from && from.slice(0, 15)}...
          </Col>
          <Col style={{ ...commonTileStyle, color: "rgb(52, 152, 219)" }}>
            {to && to.slice(0, 15)}...
          </Col>
          <Col style={{ ...commonTileStyle }}>
            {quantity && parseFloat(quantity).toFixed(10)}
          </Col>
        </Row>
      </Container>
      <div className="seperator" />
    </div>
  );
};
