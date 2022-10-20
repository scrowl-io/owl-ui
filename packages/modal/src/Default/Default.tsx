import * as React from 'react';
import { ThemeProvider, Modal as BsModal } from 'react-bootstrap';
import { ModalDefaultProps } from './Default.types';
import * as styleMod from './styles.module.scss';
import { getClasses, themePrefixesProps } from '../../../../lib/src/utils';

export const Modal = ({
  className,
  header,
  pxScale,
  body,
  footer,
  ...props
}: ModalDefaultProps) => {
  const themePrefixes: themePrefixesProps = {};
  const baseClass = 'modal';
  let classes = getClasses({
    module: styleMod,
    base: baseClass,
    modifiers: [
      {
        base: 'PxScale',
        value: pxScale,
      },
    ],
  });

  themePrefixes[baseClass] = `owlui-${baseClass}`;
  themePrefixes['modal-body'] = 'owlui-modal-body';
  themePrefixes['modal-header'] = 'owlui-modal-header';
  themePrefixes['modal-footer'] = 'owlui-modal-footer';
  themePrefixes['modal-content'] = 'owlui-modal-content';
  themePrefixes['modal-title'] = 'owlui-modal-title';

  if (className) {
    classes += ` ${className}`;
  }

  return (
    <ThemeProvider prefixes={themePrefixes}>
      <BsModal className={classes} {...props}>
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
