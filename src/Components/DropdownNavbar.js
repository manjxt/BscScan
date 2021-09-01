import React from "react";
import bnb from "../Assests/bnb.png";
import { Nav, NavDropdown, Navbar, Button } from "react-bootstrap";

export default function DropdownNavbar() {
  return (
    <div id="dropdown_navbar">
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="mr-auto my-2 my-lg-0"
          style={{ maxHeight: "100px" }}
          navbarScroll
        >
          <Nav.Link href="#action1">Home</Nav.Link>
          <NavDropdown title="Blockchain">
            <NavDropdown.Item href="#action2">Top Accounts</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action3">View Txns</NavDropdown.Item>
            <NavDropdown.Item href="#action4">
              View Pending Txns
            </NavDropdown.Item>
            <NavDropdown.Item href="#action5">
              View Contract Internal Txns
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action6">View Blocks</NavDropdown.Item>
            <NavDropdown.Item href="#action7">
              Forked Blocks (Reorgs)
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action8">
              Verified Contracts
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Validators">
            <NavDropdown.Item href="#action9">
              Validators Leaderboard
            </NavDropdown.Item>
            <NavDropdown.Item href="#action10">
              View Validators Set Info
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Tokens">
            <NavDropdown.Item href="#action11">
              BEP-20 Tokens by MarketCap
            </NavDropdown.Item>
            <NavDropdown.Item href="#action12">
              BEP-20 Tokens by Volume
            </NavDropdown.Item>
            <NavDropdown.Item href="#action13">
              View BEP-20 Tranfers
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action14">
              ERC712 Top Tokens
            </NavDropdown.Item>
            <NavDropdown.Item href="#action15">
              View ERC712 Transfers
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Resources">
            <NavDropdown.Item href="#action16">
              Charts {"&"} Stats
            </NavDropdown.Item>
            <NavDropdown.Item href="#action17">Top Statistics</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action18">
              Yield Farms List
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="More"></NavDropdown>
          <Nav.Link href="#action19">
            <i class="fa fa-user-circle"></i>
            {"  "}Sign In
          </Nav.Link>
          <Nav.Link href="#action20">
            <div class="container1">
              <img src={bnb} width="25" height="25"></img>
            </div>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </div>
  );
}