import React from 'react';
import { CloseButton } from 'react-bootstrap';
import { CloseButtonDefaultProps } from './Default.types';
import * as styleMod from './styles.module.scss';
import { createLocalProps } from '@owlui/lib/src/utils';

export const Component = (props: CloseButtonDefaultProps) => {
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

  return <CloseButton {...locals} />;
};

export default {
  Component,
};
