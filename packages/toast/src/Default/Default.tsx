import React from 'react';
import { ThemeProvider, Toast as BsToast } from 'react-bootstrap';
import { ToastDefaultProps } from './Default.types';
import * as styleMod from './styles.module.scss';
import {
  createLocalProps,
  themePrefixesProps,
} from '../../../../lib/src/utils';

export const Toast = (props: ToastDefaultProps) => {
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
      <BsToast {...locals}>
        <BsToast.Header {...toastContent?.header}>
          {toastContent?.header.content}
        </BsToast.Header>
        <BsToast.Body {...toastContent?.body}>
          {toastContent?.body.content}
        </BsToast.Body>
      </BsToast>
    </ThemeProvider>
  );
};

export default {
  Toast,
};
