/* eslint-disable import/named */
/* eslint-disable import/namespace */
import React from 'react';
import * as bs from 'react-bootstrap';
import { BsPrefixProps } from 'react-bootstrap/esm/helpers';

export interface ModalDefaultCommons {
  theme?: 'Default' | 'Dark';
  prefix?: string;
  header: ModalHeaderProps;
  body: ModalContentProps;
  footer: ModalContentProps;
}
export interface ModalHeaderProps {
  bsProps?: bs.ModalHeaderProps;
  content?: React.ReactNode;
}

export interface ModalContentProps {
  bsProps?: BsPrefixProps;
  content?: React.ReactNode;
}

export type ModalDefaultProps = ModalDefaultCommons & bs.ModalProps;
