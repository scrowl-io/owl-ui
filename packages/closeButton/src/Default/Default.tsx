import React, { useEffect } from 'react';
import { ThemeProvider, CloseButton } from 'react-bootstrap';
import { CloseButtonDefaultProps, themePrefixesProps } from './Default.types';
import * as styleMod from './styles.module.scss';
import { createLocalProps } from '@owlui/utils';

export const Component = (props: CloseButtonDefaultProps) => {
  const themePrefixes: themePrefixesProps = {};
  const baseClass = 'btn-close';
  const { children } = props;
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
    ['prefix', 'theme', 'size']
  );

  themePrefixes[baseClass] = `owlui-${baseClass}`;

  useEffect(() => {
    const closebutton: HTMLElement | null =
      document.querySelector('.btn-close');

    if (closebutton instanceof Element === false) {
      return;
    }

    closebutton?.classList.add('owlui-btn-close');
  });

  return (
    <ThemeProvider prefixes={themePrefixes}>
      <CloseButton {...locals}>{children}</CloseButton>
    </ThemeProvider>
  );
};

export default {
  Component,
};
