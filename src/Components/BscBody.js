import React from "react";
import BscHeading from "./BscHeading";
import BscMain from "./BscMain";
import BscMain2 from "./BscMain2";

export default function BscBody() {
  return (
    <div id="bodybsc">
      <BscHeading />
      <div className="seperator seperator-big"></div>
      <BscMain />
      <BscMain2 />
    </div>
  );
}
