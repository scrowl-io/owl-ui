import React from 'react';
import type { CardDefaultProps } from '../Default/Default.types';

export interface CardLinkCommons extends CardDefaultProps {
  children: React.ReactNode;
}

export type CardLinkProps = Partial<CardLinkCommons> &
  React.AnchorHTMLAttributes<HTMLAnchorElement>;
