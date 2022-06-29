import React from 'react';
import * as bs from 'react-bootstrap';

export interface BadgeDefaultCommons {
  theme?: 'Default' | 'Dark';
  size?: 'Sm' | 'Md' | 'Lg';
  prefix?: string;
  variant: string;
  pill: boolean;
}

export type BadgeDefaultProps = BadgeDefaultCommons & bs.BadgeProps;
