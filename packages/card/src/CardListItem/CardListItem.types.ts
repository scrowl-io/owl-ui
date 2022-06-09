import React from 'react';
import type { CardDefaultProps } from '../Default/Default.types';

export interface CardListItemCommons extends CardDefaultProps {
  children: React.ReactNode;
}

export type CardListItemProps = Partial<CardListItemCommons>;
