import React from 'react';
import type { CardDefaultProps } from '../Default/Default.types';

export type CardCardHeaderCommons = CardDefaultProps & {
  children: React.ReactNode;
};

export type CardCardHeaderProps = Partial<CardCardHeaderCommons>;
