/* eslint-disable import/named */
import * as React from 'react';
import { Navbar, NavbarBrandProps } from 'react-bootstrap';

export const NavbarBrand = (props: NavbarBrandProps) => {
  const { children } = props;

  return <Navbar.Brand {...props}>{children}</Navbar.Brand>;
};

export default {
  NavbarBrand,
};
