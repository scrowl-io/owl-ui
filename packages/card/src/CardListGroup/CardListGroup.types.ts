import React from 'react';
import * as bs from 'react-bootstrap';
import type { CardDefaultProps } from '../Default/Default.types';

export interface CardListGroupCommons extends CardDefaultProps {
  children: React.ReactNode;
}

export type CardListGroupProps = Partial<CardListGroupCommons> &
  bs.ListGroupProps;
