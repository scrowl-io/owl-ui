import React from 'react';
import type { CardDefaultProps } from '../Default/Default.types';

export interface CardBodyCommons extends CardDefaultProps {
  children: React.ReactNode;
}

export type CardBodyProps = Partial<CardBodyCommons>;
