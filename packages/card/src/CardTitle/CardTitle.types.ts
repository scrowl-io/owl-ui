import React from 'react';
import type { CardDefaultProps } from '../Default/Default.types';

export interface CardTitleHeaderCommons extends CardDefaultProps {
  children: React.ReactNode;
}

export type CardTitleHeaderProps = Partial<CardTitleHeaderCommons>;
