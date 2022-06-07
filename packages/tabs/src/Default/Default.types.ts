import React from 'react';
import * as bs from 'react-bootstrap';

export interface TabsDefaultCommons {
  // appearance?: 'Primary' | 'Outline';
  theme?: 'Default' | 'Dark';
  size?: 'Sm' | 'Md' | 'Lg';
  prefix?: string;
  // children: React.ReactNode;
}

export type TabsDefaultProps = Partial<TabsDefaultCommons> &
  React.AllHTMLAttributes<HTMLDivElement>;
