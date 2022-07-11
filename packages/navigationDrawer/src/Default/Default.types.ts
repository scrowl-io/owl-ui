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

export interface NavigationDrawerDefaultCommons {
  appearance?: 'Default' | 'Primary';
  theme?: 'Default' | 'Dark';
  size?: 'Sm' | 'Md' | 'Lg';
  prefix?: string;
  children: React.ReactNode;
  header?: React.ReactNode;
  items: Array<NavigationDrawerContentTypes>;
}

export type NavigationDrawerElementProps =
  Partial<NavigationDrawerDefaultCommons> & bs.NavbarProps;
