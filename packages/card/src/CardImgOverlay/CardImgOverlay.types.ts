import React from 'react';
import type { CardDefaultProps } from '../Default/Default.types';

export interface CardImgOverlayCommons extends CardDefaultProps {
  children: React.ReactNode;
}

export type CardImgOverlayProps = Partial<CardImgOverlayCommons>;
