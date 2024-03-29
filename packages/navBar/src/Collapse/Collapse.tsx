/* eslint-disable import/named */
import * as React from 'react';
import { Navbar } from 'react-bootstrap';
import { NavbarCollapseProps } from 'react-bootstrap/esm/NavbarCollapse';

export const NavbarCollapse = ({ children, ...props }: NavbarCollapseProps) => {
  return <Navbar.Collapse {...props}>{children}</Navbar.Collapse>;
};

export default {
  NavbarCollapse,
};
