/* eslint-disable import/named */
import * as React from 'react';
import { NavDropdown, NavDropdownProps } from 'react-bootstrap';

export const Component = (props: NavDropdownProps) => {
  const { children } = props;

  return <NavDropdown {...props}>{children}</NavDropdown>;
};

export default {
  Component,
};
