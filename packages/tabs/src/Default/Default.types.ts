import React from 'react';
import * as bs from 'react-bootstrap';

export interface TabsItem {
  id?: string | number;
  label: string;
  view: React.ReactNode;
}

export interface TabsDefaultCommons {
  theme?: 'Default' | 'Dark';
  size?: 'Sm' | 'Md' | 'Lg';
  prefix?: string;
  items: TabsItem[];
}

export type TabsDefaultProps = TabsDefaultCommons & bs.TabsProps;
