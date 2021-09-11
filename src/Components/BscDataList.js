import React from "react";
import data from "../Assests/transferData.json";
import { Container } from "react-bootstrap";
const transfers = data.slice(0, 5);

export default function BscDataList({ selected }) {
  return (
    <Container fluid>
      {transfers.map((item, index) => (
        <Tile {...item} key={index} />
      ))}
    </Container>
  );
}

const Tile = ({ txHash, from, to, timeStamp, blockNo, quantity, method }) => {
  return (
    <div style={{ width: "100%", display: "flex", flexDirection: "row" }}>
      <p>{txHash.slice(0, 10)}</p>
      <p>{method}</p>
    </div>
  );
};
