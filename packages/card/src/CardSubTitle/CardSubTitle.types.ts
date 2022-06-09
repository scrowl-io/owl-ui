import React from 'react';
import type { CardDefaultProps } from '../Default/Default.types';

export interface CardSubTitleCommons extends CardDefaultProps {
  children: React.ReactNode;
}

export type CardSubTitleProps = Partial<CardSubTitleCommons>;
