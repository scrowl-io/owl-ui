import React from 'react';
import * as bs from 'react-bootstrap';

export interface ToastDefaultCommons {
  theme?: 'Default' | 'Dark';
  pxScale?: 'Sm' | 'Md' | 'Lg';
  prefix?: string;
  toastContent?: ToastContentProps;
}

export interface ToastBodyProps {
  as?: React.ElementType;
  bsPrefix?: string;
  content: React.ReactNode;
}

// eslint-disable-next-line import/namespace
export interface ToastHeaderProps extends bs.ToastHeaderProps {
  content: React.ReactNode;
}

export interface ToastContentProps {
  header: ToastHeaderProps;
  body: ToastBodyProps;
}

export type ToastDefaultProps = Partial<ToastDefaultCommons> & bs.ToastProps;
