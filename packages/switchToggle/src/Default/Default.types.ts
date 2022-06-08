import React from 'react';
import * as bs from 'react-bootstrap';

export interface SwitchToggleContainerProps {
  id: string;
  toggle: boolean;
  label: string;
  type: string;
}

export interface SwitchToggleDefaultCommons {
  theme?: 'Default' | 'Dark';
  size?: 'Sm' | 'Md' | 'Lg';
  prefix?: string;
  children: React.ReactNode;
  switchtoggle: SwitchToggleContainerProps;
}

export type SwitchToggleDefaultProps = Partial<SwitchToggleDefaultCommons> &
  bs.FormCheckProps;
