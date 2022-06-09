import React from 'react';
import * as bs from 'react-bootstrap';
import type { CardDefaultProps } from '../Default/Default.types';

export interface CardLinkCommons extends CardDefaultProps {
  children: React.ReactNode;
}

export type CardLinkProps = Partial<CardLinkCommons> & bs.AnchorProps;
