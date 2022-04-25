import React from 'react';

export interface NavigationDrawerContentItemProps {
  label: string;
}

export interface NavigationDrawerContentItemGroupProps {
  heading: string;
  items: Array<NavigationDrawerContentItemProps>;
}

export type NavigationDrawerContentTypes =
  | NavigationDrawerContentItemProps
  | NavigationDrawerContentItemGroupProps;

export interface NavigationDrawerDefaultCommons {
  appearance?: 'Primary' | 'Outline';
  theme?: 'Default' | 'Dark';
  size?: 'Sm' | 'Md' | 'Lg';
  prefix?: string;
  children: React.ReactNode;
  header?: React.ReactNode;
  items: Array<NavigationDrawerContentTypes>;
}

export type NavigationDrawerElementProps =
  Partial<NavigationDrawerDefaultCommons> &
    React.AllHTMLAttributes<HTMLDivElement>;