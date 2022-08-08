import React from 'react';
import * as bs from 'react-bootstrap';

export interface DropdownItemProps {
  id: string;
  label: string;
  value: React.ReactNode;
}

export interface DropdownDefaultCommons {
  size?: 'Sm' | 'Md' | 'Lg';
  prefix?: string;
  children: React.ReactNode;
  items: DropdownItemProps[];
  button?: React.ReactNode;
}

export type DropdownDefaultProps = DropdownDefaultCommons &
  bs.DropdownButtonProps;
