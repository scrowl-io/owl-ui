import React from 'react';

export interface SwitchToggleContainerProps {
  id: string;
  toggle: boolean;
  label: string;
  type: string;
}

export interface SwitchToggleDefaultCommons {
  appearance?: 'Default' | 'Dark';
  theme?: 'Default' | 'Dark';
  size?: 'Sm' | 'Md' | 'Lg';
  prefix?: string;
  testPrefix?: string;
  children: React.ReactNode;
  switchtoggle: SwitchToggleContainerProps;
}

export type SwitchToggleDefaultProps = Partial<SwitchToggleDefaultCommons> &
  React.AllHTMLAttributes<HTMLDivElement>;
