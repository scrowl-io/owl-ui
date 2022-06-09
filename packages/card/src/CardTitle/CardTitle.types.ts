import React from 'react';
import type { CardDefaultProps } from '../Default/Default.types';

export interface CardTitleCommons extends CardDefaultProps {
  children: React.ReactNode;
}

export type CardTitleProps = Partial<CardTitleCommons>;
