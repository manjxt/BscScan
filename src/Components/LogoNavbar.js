import React from "react";
import logo from "./logo.PNG";

export default function LogoNavbar() {
  return (
    <div id="bscscan_logo" class="container-fluid">
      <a class="navbar-brand" href="#">
        <img
          src={logo}
          alt=""
          width="210"
          height="50"
          class="d-inline-block align-text-top"
        />
      </a>
    </div>
  );
}
