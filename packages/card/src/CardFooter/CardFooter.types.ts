import React from 'react';
import type { CardDefaultProps } from '../Default/Default.types';

export interface CardCardFooterCommons extends CardDefaultProps {
  children: React.ReactNode;
}

export type CardCardFooterProps = Partial<CardCardFooterCommons>;
