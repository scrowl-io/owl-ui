/* eslint-disable import/named */
import * as React from 'react';
import { Navbar } from 'react-bootstrap';
import { NavbarToggleProps } from 'react-bootstrap/esm/NavbarToggle';

export const NavbarToggle = ({ children, ...props }: NavbarToggleProps) => {
  return <Navbar.Toggle {...props}>{children}</Navbar.Toggle>;
};

export default {
  NavbarToggle,
};
