/* eslint-disable import/named */
import * as React from 'react';
import { Navbar } from 'react-bootstrap';
import { NavbarToggleProps } from 'react-bootstrap/esm/NavbarToggle';

export const Component = (props: NavbarToggleProps) => {
  const { children } = props;

  return <Navbar.Toggle {...props}>{children}</Navbar.Toggle>;
};

export default {
  Component,
};
