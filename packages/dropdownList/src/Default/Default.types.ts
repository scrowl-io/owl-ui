import React from 'react';

export interface DropDownContentItemProps {
  length: number;
  id: string | number | undefined;
  label: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value: any | undefined;
}

export interface DropDownContentContainerProps {
  label: string;
  selectedItem: string;
  items: DropDownContentItemProps;
}

export interface DropdownListDefaultCommons {
  appearance?: 'Primary' | 'Outline';
  theme?: 'Default' | 'Dark';
  size?: 'Sm' | 'Md' | 'Lg';
  prefix?: string;
  children: React.ReactNode;
  dropdown: DropDownContentContainerProps;
  items: DropDownContentItemProps;
}

export type DropdownListDefaultProps = Partial<DropdownListDefaultCommons> &
  React.AllHTMLAttributes<HTMLDivElement>;
