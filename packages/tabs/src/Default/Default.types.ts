import React from 'react';
import * as bs from 'react-bootstrap';

export interface TabsItem {
  id: string;
  label: string;
  view: React.ReactNode;
}

export interface TabsDefaultCommons {
  // appearance?: 'Primary' | 'Outline';
  theme?: 'Default' | 'Dark';
  size?: 'Sm' | 'Md' | 'Lg';
  prefix?: string;
  items: TabsItem[];
  // children: React.ReactNode;
}

export type TabsDefaultProps = TabsDefaultCommons & bs.TabsProps;
