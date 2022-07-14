import * as React from 'react';
import { NavBar } from '../index';
import { NavBarDefaultProps } from '../Default.types';

import { theme } from './Default-theme.stories';
import { Brand } from '../../Brand';
import { Toggle } from '../../Toggle';
import { Collapse } from '../../Collapse';
import { Nav, NavDropdown } from 'react-bootstrap';

export const Default = (args: NavBarDefaultProps) => {
  return (
    <NavBar {...args} expand="lg">
      <Brand>OwlUI</Brand>
      <Toggle />
      <Collapse>
        {/* 
        /* THIS WHOLE NAV SHOULD BE REPLACED BY THE OWLUI NAV COMPONENT ONCE IT GETS MERGED TO MAIN 
        /* ALSO REMOVE UNEEDED IMPORTS
        */}
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        {/* 
        /* THIS WHOLE NAV SHOULD BE REPLACED BY THE OWLUI NAV COMPONENT ONCE IT GETS MERGED TO MAIN 
        /* ALSO REMOVE UNEEDED IMPORTS
        */}
      </Collapse>
    </NavBar>
  );
};

Default.args = {
  theme: theme.defaultValue,
};

Default.argTypes = {
  theme,
};
