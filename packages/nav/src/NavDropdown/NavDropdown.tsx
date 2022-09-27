/* eslint-disable import/named */
import * as React from 'react';
import {
  NavDropdown as BsNavDropdown,
  NavDropdownProps,
} from 'react-bootstrap';

export const NavDropdown = (props: NavDropdownProps) => {
  const { children } = props;

  return <BsNavDropdown {...props}>{children}</BsNavDropdown>;
};

export default {
  NavDropdown,
};
