import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  Navbar,
  NavbarBrand,
  NavItem,
  NavLink,
  NavbarToggler,
  Collapse,
  UncontrolledDropdown,
  DropdownToggle,
  NavbarText,
  DropdownItem,
  DropdownMenu,
  Nav,
} from "reactstrap";

const styleInObject = {
  fontSize: "13px",
  fontWeight: "600",
};

function Header() {
  return (
    <Navbar color="white" expand="md" light>
      <NavbarBrand style={{ fontSize: "24px", fontWeight: "500" }} href="/">
        MonPANDA
      </NavbarBrand>
      <NavbarToggler onClick={function noRefCheck() {}} />
      <Collapse navbar>
        <Nav className="me-auto" navbar>
          <NavItem>
            <NavLink style={styleInObject} href="/home/">
              HOME
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink style={styleInObject} href="/shoes/">
              SHOES
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink style={styleInObject} href="/backpacks/">
              BACKPACKS
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink style={styleInObject} href="/contacts/">
              CONTACTS
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
}

export default Header;
