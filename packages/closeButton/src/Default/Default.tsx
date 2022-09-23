import React from 'react';
import { CloseButton as BsCloseButton } from 'react-bootstrap';
import { CloseButtonDefaultProps } from './Default.types';
import * as styleMod from './styles.module.scss';
import { createLocalProps } from '../../../../lib/src/utils';

export const CloseButton = (props: CloseButtonDefaultProps) => {
  const baseClass = 'btn-close';
  const prefix = props.prefix || '';

  const locals = createLocalProps(
    props,
    {
      module: styleMod,
      classes: {
        base: baseClass,
        prefix: prefix,
        optionals: [],
      },
    },
    ['prefix']
  );

  return <BsCloseButton {...locals} />;
};

export default {
  CloseButton,
};
