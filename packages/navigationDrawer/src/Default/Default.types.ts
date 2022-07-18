/* eslint-disable import/namespace */
import React from 'react';
import * as bs from 'react-bootstrap';

export interface NavigationDrawerContentItemProps {
  label: string;
  url?: string;
}

export interface NavigationDrawerContentItemGroupProps {
  heading: string;
  items: Array<NavigationDrawerContentItemProps>;
}

export type NavigationDrawerContentTypes =
  | NavigationDrawerContentItemProps
  | NavigationDrawerContentItemGroupProps;

export interface NavigationDrawerHeader extends bs.OffcanvasHeaderProps {
  content: React.ReactNode;
}

export interface NavigationDrawerDefaultCommons {
  theme?: 'Default' | 'Dark';
  prefix?: string;
  children: React.ReactNode;
  header: NavigationDrawerHeader;
  items: Array<NavigationDrawerContentTypes>;
}

export type NavigationDrawerElementProps =
  Partial<NavigationDrawerDefaultCommons> & bs.OffcanvasProps;
