import React, { ElementType } from 'react';
import * as bs from 'react-bootstrap';

export interface DropdownItemProps {
  id: string;
  label: React.ReactNode | React.ReactNode[];
  value?: React.ReactNode | undefined;
  as?: ElementType | undefined;
}

export interface DropdownDefaultCommons {
  pxScale?: 'Sm' | 'Md' | 'Lg';
  prefix?: string;
  children?: React.ReactNode;
  items: DropdownItemProps[];
  button?: React.ReactNode;
  highlightSelected?: boolean | undefined;
}

export type DropdownDefaultProps = DropdownDefaultCommons &
  Partial<bs.DropdownButtonProps> &
  Partial<bs.DropdownProps>;
