import React, { ElementType } from 'react';
import * as bs from 'react-bootstrap';

export interface DropdownItemProps {
  id: string;
  label: React.ReactNode | React.ReactNode[];
  value?: React.ReactNode | undefined;
  as?: ElementType | undefined;
}

export interface DropdownDefaultCommons {
  size?: 'Sm' | 'Md' | 'Lg';
  prefix?: string;
  children?: React.ReactNode;
  items: DropdownItemProps[];
  button?: React.ReactNode;
}

export type DropdownDefaultProps = DropdownDefaultCommons &
  bs.DropdownButtonProps &
  bs.DropdownProps;
