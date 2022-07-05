import * as React from 'react';
import { ThemeProvider, Modal } from 'react-bootstrap';
import { ModalDefaultProps } from './Default.types';
import * as styleMod from './styles.module.scss';
import { createLocalProps, themePrefixesProps } from '@owlui/lib/src/utils';

export const Component = (props: ModalDefaultProps) => {
  const themePrefixes: themePrefixesProps = {};
  const baseClass = 'modal';
  const { modalContent } = props;
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
          {
            fields: ['size'],
            value: 'Size',
          },
        ],
      },
    },
    ['prefix', 'theme', 'size', 'modalContent']
  );

  themePrefixes[baseClass] = `owlui-${baseClass}`;
  themePrefixes['modal-body'] = 'owlui-modal-body';
  themePrefixes['modal-header'] = 'owlui-modal-header';
  themePrefixes['modal-footer'] = 'owlui-modal-footer';
  themePrefixes['modal-content'] = 'owlui-modal-content';
  themePrefixes['modal-title'] = 'owlui-modal-title';

  console.log(locals);

  return (
    <ThemeProvider prefixes={themePrefixes}>
      <Modal {...locals}>
        <Modal.Header {...modalContent.header}>
          <Modal.Title>{modalContent.header.content}</Modal.Title>
        </Modal.Header>
        <Modal.Body {...modalContent.body}>
          {modalContent.body.content}
        </Modal.Body>
        <Modal.Footer>test test</Modal.Footer>
      </Modal>
    </ThemeProvider>
  );
};

export default {
  Component,
};
