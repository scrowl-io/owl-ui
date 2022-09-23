import React from 'react';
import { ThemeProvider, Toast } from 'react-bootstrap';
import { ToastDefaultProps } from './Default.types';
import * as styleMod from './styles.module.scss';
import {
  createLocalProps,
  themePrefixesProps,
} from '../../../../lib/src/utils';

export const Component = (props: ToastDefaultProps) => {
  const themePrefixes: themePrefixesProps = {};
  const baseClass = 'toast';
  const basePrefixClass = `owlui-${baseClass}`;
  const { toastContent } = props;
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
            fields: ['pxScale'],
            value: 'PxScale',
          },
        ],
        bsProps: ['bg'],
      },
    },
    ['prefix', 'theme', 'pxScale', 'toastContent']
  );

  themePrefixes[baseClass] = `owlui-${baseClass}`;
  themePrefixes[`${baseClass}-header`] = `${basePrefixClass}-header`;
  themePrefixes[`${baseClass}-body`] = `${basePrefixClass}-body`;

  return (
    <ThemeProvider prefixes={themePrefixes}>
      <Toast {...locals}>
        <Toast.Header {...toastContent?.header}>
          {toastContent?.header.content}
        </Toast.Header>
        <Toast.Body {...toastContent?.body}>
          {toastContent?.body.content}
        </Toast.Body>
      </Toast>
    </ThemeProvider>
  );
};

export default {
  Component,
};
