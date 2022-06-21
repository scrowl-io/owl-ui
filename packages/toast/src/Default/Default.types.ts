import React from 'react';
import * as bs from 'react-bootstrap';

export interface ToastDefaultCommons {
  theme?: 'Default' | 'Dark';
  size?: 'Sm' | 'Md' | 'Lg';
  prefix?: string;
  toastContent?: ToastContentProps;
}

export interface ToastBodyProps {
  as?: React.ElementType;
  bsPrefix?: string;
  bodyText: React.ReactNode;
}

export interface ToastContentProps {
  header: bs.ToastHeaderProps;
  body: ToastBodyProps;
}

export interface themePrefixesProps {
  [key: string]: string;
}

export type ToastDefaultProps = Partial<ToastDefaultCommons> & bs.ToastProps;
