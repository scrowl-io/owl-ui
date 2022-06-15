import React from 'react';
import * as bs from 'react-bootstrap';

export interface SwitchToggleDefaultCommons {
  theme?: 'Default' | 'Dark';
  size?: 'Sm' | 'Md' | 'Lg';
  prefix?: string;
  children: React.ReactNode;
}

export type SwitchToggleDefaultProps = Partial<SwitchToggleDefaultCommons> &
  bs.FormCheckProps;
