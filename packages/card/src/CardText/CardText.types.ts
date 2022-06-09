import React from 'react';
import type { CardDefaultProps } from '../Default/Default.types';

export interface CardTextCommons extends CardDefaultProps {
  children: React.ReactNode;
}

export type CardTextProps = Partial<CardTextCommons>;
