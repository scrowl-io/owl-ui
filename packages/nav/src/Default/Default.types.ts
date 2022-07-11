/* eslint-disable import/named */
/* eslint-disable import/namespace */
import React from 'react';
import * as bs from 'react-bootstrap';
import { BsPrefixProps } from 'react-bootstrap/esm/helpers';

export interface NavDefaultCommons extends bs.NavProps {
  theme?: 'Default' | 'Dark';
  prefix?: string;
  navItems: NavItem[];
}

export interface NavItem extends BsPrefixProps {
  navLink: NavLink;
}

export interface NavLink extends bs.NavLinkProps {
  label?: React.ReactNode;
}

export type NavDefaultProps = NavDefaultCommons;
