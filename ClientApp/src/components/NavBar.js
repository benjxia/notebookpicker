import React, { Component } from 'react';
import logo from '../assets/branding/nbpicker.png';
import { Link } from 'react-router-dom';
import { Navbar, NavbarBrand, NavItem, NavLink } from 'reactstrap';
import "./styles/NavBar.css";

/**
 * Top navigation menu
 */
export class NavBar extends Component {
  static displayName = NavBar.name;

  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <header>
        <Navbar className="NavigationBar" container light>
          <NavbarBrand tag = {Link} to="/"> <img alt="logo" src={logo} style={{ height: 50, width: 50 }} /></NavbarBrand> {/* Laptop icon on navigation bar */}
          <NavbarBrand tag = {Link} to="/" className="button"> NotebookPicker </NavbarBrand>
          <NavItem>
            <NavLink tag={Link} className="button" to="/products">
              Browse
            </NavLink>
          </NavItem>
        </Navbar>
      </header>
    );
  }
}