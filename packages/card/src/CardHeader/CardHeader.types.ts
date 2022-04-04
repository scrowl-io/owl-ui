import React from 'react';
import type { CardDefaultProps } from '../Default/Default.types';

export interface CardCardHeaderCommons extends CardDefaultProps {
  children: React.ReactNode;
}

export type CardCardHeaderProps = Partial<CardCardHeaderCommons>;
