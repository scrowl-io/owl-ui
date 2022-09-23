import * as React from 'react';
import { ThemeProvider, Modal as BsModal } from 'react-bootstrap';
import { ModalDefaultProps } from './Default.types';
import * as styleMod from './styles.module.scss';
import {
  createLocalProps,
  themePrefixesProps,
} from '../../../../lib/src/utils';

export const Modal = (props: ModalDefaultProps) => {
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
      <BsModal {...locals}>
        {header ? (
          <BsModal.Header {...header.bsProps}>
            <BsModal.Title>{header.content}</BsModal.Title>
          </BsModal.Header>
        ) : (
          <></>
        )}
        {body ? (
          <BsModal.Body {...body.bsProps}>{body.content}</BsModal.Body>
        ) : (
          <></>
        )}

        {footer ? (
          <BsModal.Footer {...footer.bsProps}>{footer.content}</BsModal.Footer>
        ) : (
          <></>
        )}
      </BsModal>
    </ThemeProvider>
  );
};

export default {
  Modal,
};
