/* eslint-disable import/named */
import React from 'react';
import { ModalProps, ModalHeaderProps } from 'react-bootstrap';
import { BsPrefixProps } from 'react-bootstrap/esm/helpers';

export interface ModelPartialProps {
  bsProps?: BsPrefixProps;
  content: React.ReactNode | React.ReactElement;
}

export interface ModalDefaultCommons {
  theme: 'Default' | 'Dark';
  prefix: string;
  header: ModelPartialProps & ModalHeaderProps;
  body: ModelPartialProps;
  footer: ModelPartialProps;
}

export type ModalDefaultProps = Partial<ModalDefaultCommons> & ModalProps;
