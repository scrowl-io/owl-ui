import React from 'react';
import * as bs from 'react-bootstrap';

export interface CloseButtonDefaultCommons {
  theme?: 'Default' | 'Dark';
  size?: 'Sm' | 'Md' | 'Lg';
  prefix?: string;
  disabled: boolean;
}

export interface themePrefixesProps {
  [key: string]: string;
}

export type CloseButtonDefaultProps = Partial<CloseButtonDefaultCommons> &
  bs.CloseButtonProps;
