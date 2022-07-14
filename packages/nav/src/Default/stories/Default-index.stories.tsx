import * as React from 'react';
import { Nav } from '../index';
import { NavDefaultProps } from '../Default.types';

import { size } from './Default-size.stories';
import { theme } from './Default-theme.stories';
import { NavLink } from '../../NavLink';
import { NavDropdown } from '../../NavDropdown';
import { NavDropdownItem } from '../../NavDropdownItem';
import { NavDropdownDivider } from '../../NavDropdownDivider';

export const Default = (args: NavDefaultProps) => (
  <Nav {...args}>
    <NavLink href="/home">Active</NavLink>
    <NavLink eventKey="1">Link</NavLink>
    <NavLink eventKey="2">Link</NavLink>
    <NavLink eventKey="3" disabled>
      Disabled
    </NavLink>
    <NavDropdown title="Dropdown">
      <NavDropdownItem eventKey="4.1">Action</NavDropdownItem>
      <NavDropdownItem eventKey="4.2">Another action</NavDropdownItem>
      <NavDropdownItem eventKey="4.3">Something else here</NavDropdownItem>
      <NavDropdownDivider />
      <NavDropdownItem eventKey="4.4">Separated link</NavDropdownItem>
    </NavDropdown>
  </Nav>
);

Default.args = {
  size: size.defaultValue,
  theme: theme.defaultValue,
};

Default.argTypes = {
  size,
  theme,
};
