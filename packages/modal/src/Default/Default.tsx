import * as React from 'react';
import { ThemeProvider, Modal } from 'react-bootstrap';
import { ModalDefaultProps } from './Default.types';
import * as styleMod from './styles.module.scss';
import {
  createLocalProps,
  themePrefixesProps,
} from '../../../../lib/src/utils';

export const Component = (props: ModalDefaultProps) => {
  const themePrefixes: themePrefixesProps = {};
  const baseClass = 'modal';
  const { header, body, footer } = props;
  const prefix = props.prefix || '';

  const locals = createLocalProps(
    props,
    {
      module: styleMod,
      classes: {
        base: baseClass,
        prefix: prefix,
        optionals: [
          {
            fields: ['theme'],
            value: 'theme',
          },
        ],
      },
    },
    ['prefix', 'theme', 'modalContent']
  );

  themePrefixes[baseClass] = `owlui-${baseClass}`;
  themePrefixes['modal-body'] = 'owlui-modal-body';
  themePrefixes['modal-header'] = 'owlui-modal-header';
  themePrefixes['modal-footer'] = 'owlui-modal-footer';
  themePrefixes['modal-content'] = 'owlui-modal-content';
  themePrefixes['modal-title'] = 'owlui-modal-title';

  return (
    <ThemeProvider prefixes={themePrefixes}>
      <Modal {...locals}>
        {header ? (
          <Modal.Header {...header.bsProps}>
            <Modal.Title>{header.content}</Modal.Title>
          </Modal.Header>
        ) : (
          <></>
        )}
        {body ? (
          <Modal.Body {...body.bsProps}>{body.content}</Modal.Body>
        ) : (
          <></>
        )}

        {footer ? (
          <Modal.Footer {...footer.bsProps}>{footer.content}</Modal.Footer>
        ) : (
          <></>
        )}
      </Modal>
    </ThemeProvider>
  );
};

export default {
  Component,
};
