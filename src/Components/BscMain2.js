import React, { useState } from "react";
import BscHeading2 from "./BscHeading2";
import BscDataList from "./BscDataList";

export default function BscMain2() {
  const [selected, setSelected] = useState("transfers");
  return (
    <div>
      <BscHeading2 selected={selected} setSelected={setSelected} />
      <BscDataList selected={selected} />
    </div>
  );
}
