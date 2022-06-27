import React from 'react';
import * as bs from 'react-bootstrap';

export interface CloseButtonDefaultCommons {
  theme?: 'Default' | 'Dark';
  size?: 'Sm' | 'Md' | 'Lg';
  prefix?: string;
};

export interface themePrefixesProps {
  [key: string]: string;
}

export type CloseButtonDefaultProps = Partial<CloseButtonDefaultCommons> & React.AllHTMLAttributes<HTMLDivElement>;
