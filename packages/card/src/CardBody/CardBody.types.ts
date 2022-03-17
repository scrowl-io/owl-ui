import React from 'react';
import type { CardDefaultProps } from '../Default/Default.types';

export type CardCardBodyCommons = CardDefaultProps & {
  children: React.ReactNode;
};

export type CardCardBodyProps = Partial<CardCardBodyCommons>;
