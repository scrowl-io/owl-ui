import React from 'react';
import * as bs from 'react-bootstrap';

export interface DropdownItemProps {
  id: string;
  label: string;
  value: React.ReactNode;
}

export interface CustomButtomProps {
  element?: React.ReactNode;
  text?: string;
}

export interface DropdownDefaultCommons {
  size?: 'Sm' | 'Md' | 'Lg';
  prefix?: string;
  children: React.ReactNode;
  items: DropdownItemProps[];
  button?: CustomButtomProps;
}

export type DropdownDefaultProps = DropdownDefaultCommons &
  bs.DropdownButtonProps;
