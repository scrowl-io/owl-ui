import React from 'react';
import * as bs from 'react-bootstrap';

export interface ModalDefaultCommons {
  theme?: 'Default' | 'Dark';
  size?: 'Sm' | 'Md' | 'Lg';
  prefix?: string;
  modalContent: ModalContentProps;
}

export interface ModalHeaderProps {
  content: React.ReactNode;
}
export interface ModalBodyProps {
  content: React.ReactNode | React.ReactNode[];
}

export interface ModalFooterProps {
  content: React.ReactNode | React.ReactNode[];
}

export interface ModalContentProps {
  header: ModalHeaderProps;
  body: ModalBodyProps;
  footer: ModalFooterProps;
}

export type ModalDefaultProps = ModalDefaultCommons & bs.ModalProps;
