import * as React from 'react';
import { NavBar } from '../index';
import { NavBarDefaultProps } from '../Default.types';

import { theme } from './Default-theme.stories';
import { NavbarBrand, NavbarToggle, NavbarCollapse } from '../../';
import {
  Nav,
  NavLink,
  NavDropdown,
  NavDropdownItem,
  NavDropdownDivider,
} from '../../../../nav/src';

export const Default = (args: NavBarDefaultProps) => {
  return (
    <NavBar {...args} expand="lg">
      <NavbarBrand>OwlUI</NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        <Nav>
          <NavLink href="/home">Active</NavLink>
          <NavLink eventKey="1">Link</NavLink>
          <NavLink eventKey="2">Link</NavLink>
          <NavLink eventKey="3" disabled>
            Disabled
          </NavLink>
          <NavDropdown title="Dropdown">
            <NavDropdownItem eventKey="4.1">Action</NavDropdownItem>
            <NavDropdownItem eventKey="4.2">Another action</NavDropdownItem>
            <NavDropdownItem eventKey="4.3">
              Something else here
            </NavDropdownItem>
            <NavDropdownDivider />
            <NavDropdownItem eventKey="4.4">Separated link</NavDropdownItem>
          </NavDropdown>
        </Nav>
      </NavbarCollapse>
    </NavBar>
  );
};

Default.args = {
  theme: theme.defaultValue,
};

Default.argTypes = {
  theme,
};
