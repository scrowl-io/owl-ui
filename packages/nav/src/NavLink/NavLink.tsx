/* eslint-disable import/named */
import * as React from 'react';
import { Nav, NavLinkProps } from 'react-bootstrap';

export const Component = (props: NavLinkProps) => {
  const { children } = props;

  return <Nav.Link {...props}>{children}</Nav.Link>;
};

export default {
  Component,
};
