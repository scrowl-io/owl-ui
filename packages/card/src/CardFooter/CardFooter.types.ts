import React from 'react';
import type { CardDefaultProps } from '../Default/Default.types';

export interface CardFooterCommons extends CardDefaultProps {
  children: React.ReactNode;
}

export type CardFooterProps = Partial<CardFooterCommons>;
