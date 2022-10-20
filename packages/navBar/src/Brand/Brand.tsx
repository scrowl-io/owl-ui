/* eslint-disable import/named */
import * as React from 'react';
import { Navbar, NavbarBrandProps } from 'react-bootstrap';

export const NavbarBrand = ({ children, ...props }: NavbarBrandProps) => {
  return <Navbar.Brand {...props}>{children}</Navbar.Brand>;
};

export default {
  NavbarBrand,
};
