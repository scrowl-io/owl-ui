import React from 'react';
import * as bs from 'react-bootstrap';
import type { CardDefaultProps } from '../Default/Default.types';

export interface CardImgCommons extends CardDefaultProps {
  children: React.ReactNode;
}

export type CardImgProps = Partial<CardImgCommons> & bs.CardImgProps;
