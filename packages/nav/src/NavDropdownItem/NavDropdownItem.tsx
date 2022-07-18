/* eslint-disable import/named */
import * as React from 'react';
import { NavDropdown } from 'react-bootstrap';
import { DropdownItemProps } from 'react-bootstrap/esm/DropdownItem';

export const Component = (props: DropdownItemProps) => {
  const { children } = props;

  return <NavDropdown.Item {...props}>{children}</NavDropdown.Item>;
};

export default {
  Component,
};
