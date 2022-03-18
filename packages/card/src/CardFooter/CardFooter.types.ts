import React from 'react';
import type { CardDefaultProps } from '../Default/Default.types';

export type CardCardFooterCommons = CardDefaultProps & {
  children: React.ReactNode;
};

export type CardCardFooterProps = Partial<CardCardFooterCommons>;
