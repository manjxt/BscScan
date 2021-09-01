import React from "react";
import BscHeading from "./BscHeading";
import BscMain from "./BscMain";

export default function BscBody() {
  return (
    <div id="bodybsc">
      <BscHeading />
      <div className="seperator"></div>
      <BscMain />
    </div>
  );
}
