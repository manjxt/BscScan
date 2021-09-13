import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import moment from "moment";
import {
  Tile as TransfersTile,
  Heading as TransfersHeading,
} from "./dataList/transfers.js";
import {
  Tile as HoldersTile,
  Heading as HoldersHeading,
} from "./dataList/holders.js";
import { Container as InfoData } from "./dataList/info.js";

export default function BscDataList({ selected }) {
  const [data, setData] = useState(require(`../Assests/${selected}.json`));
  const last = data.length / 10;
  const [currentPage, setCurrentPage] = useState(1);
  const [paginatedData, setPaginatedData] = useState(data.slice(0, 10));
  useEffect(() => {
    const _data = require(`../Assests/${selected}.json`);
    setData(_data);
    setCurrentPage(1);
    setPaginatedData(_data.slice(0, 10));
  }, [selected]);

  useEffect(() => {
    setPaginatedData(data.slice(10 * (currentPage - 1), 10 * currentPage));
  }, [currentPage]);

  const dataCheck = () => {
    switch (selected) {
      case "transfers":
        return renderTransfers();
      case "holders":
        return renderHolders();
      case "info":
        return renderInfo();
      default:
        return <></>;
    }
  };

  const renderInfo = () => <InfoData />;

  const renderHolders = () => (
    <>
      <HoldersHeading
        data={data}
        last={last}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
      <div className="seperator"></div>
      {paginatedData.map((item, index) => (
        <HoldersTile {...item} index={index} key={index} />
      ))}
      <Footer data={data} last={last} />
    </>
  );

  const renderTransfers = () => (
    <>
      <TransfersHeading
        data={data}
        last={last}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
      <div className="seperator"></div>
      {paginatedData.map((item, index) => (
        <TransfersTile {...item} key={index} />
      ))}
      <Footer data={data} last={last} />
    </>
  );

  return (
    <Container fluid style={{ alignItems: "center" }}>
      {dataCheck()}
    </Container>
  );
}

const Footer = ({ setCurrentPage, currentPage, data, last }) => (
  <div className="pagesNavigation2">
    <button className="pageNavigationButton" onClick={() => setCurrentPage(1)}>
      First
    </button>
    <button
      className="pageNavigationButton"
      onClick={() => setCurrentPage((prev) => prev - 1)}
    >{`<`}</button>
    <button className="pageNavigationButton">
      Page {currentPage} of {data.length / 10}
    </button>
    <button
      className="pageNavigationButton"
      onClick={() => setCurrentPage((prev) => prev + 1)}
    >
      {">"}
    </button>
    <button
      className="pageNavigationButton"
      onClick={() => setCurrentPage(last)}
    >
      Last
    </button>
  </div>
);
