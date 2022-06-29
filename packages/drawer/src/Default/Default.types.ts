import React from 'react';
import * as bs from 'react-bootstrap';

// eslint-disable-next-line import/namespace
export interface DrawerHeader {
  content: React.ReactNode;
  bsProps: bs.OffcanvasHeaderProps;
}

export interface DrawerProps {
  header: DrawerHeader;
  body: React.ReactNode;
}
export interface DrawerDefaultCommons {
  theme?: 'Default' | 'Dark';
  prefix?: string;
  drawer: DrawerProps;
}

export type DrawerDefaultProps = DrawerDefaultCommons & bs.OffcanvasProps;
