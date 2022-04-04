import React from 'react';
import type { CardDefaultProps } from '../Default/Default.types';

export interface CardCardBodyCommons extends CardDefaultProps {
  children: React.ReactNode;
}

export type CardCardBodyProps = Partial<CardCardBodyCommons>;
