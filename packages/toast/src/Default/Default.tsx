import React, { useEffect } from 'react';
import { ThemeProvider, Toast } from 'react-bootstrap';
import { ToastDefaultProps, themePrefixesProps } from './Default.types';
import * as styleMod from './styles.module.scss';
import { createLocalProps } from '@owlui/utils';

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
            fields: ['size'],
            value: 'Size',
          },
        ],
        bsProps: ['bg'],
      },
    },
    ['prefix', 'theme', 'size', 'toastContent']
  );

  themePrefixes[baseClass] = `owlui-${baseClass}`;
  themePrefixes[`${baseClass}-header`] = `${basePrefixClass}-header`;
  themePrefixes[`${baseClass}-body`] = `${basePrefixClass}-body`;
  themePrefixes['btn-close'] = `owlui-btn-close`;

  useEffect(() => {
    // Add show and btn-close classes on mount:
    const showToast: HTMLElement | null =
      document.querySelector('.owlui-toast');
    const closeBtn: HTMLElement | null = document.querySelector('.btn-close');

    if (
      showToast instanceof Element === false ||
      closeBtn instanceof Element === false
    ) {
      return;
    }

    showToast?.classList.add('owlui-show');
    closeBtn?.classList.add('owlui-btn-close');

    const toastWrapper: HTMLElement | null =
      document.querySelector('.owlui-toast');

    const toastBody: HTMLElement | null =
      document.querySelector('.owlui-toast-body');

    // Add text white if bg is dark:
    if (toastWrapper?.classList.contains('bg-dark')) {
      toastBody?.classList.add('owlui-text-white');
    }

    if (!toastWrapper?.classList.contains('bg-dark')) {
      toastBody?.classList.remove('owlui-text-white');
    }
  });

  return (
    <ThemeProvider prefixes={themePrefixes}>
      <Toast {...locals}>
        <Toast.Header>{toastContent?.header.closeLabel}</Toast.Header>
        <Toast.Body>{toastContent?.body.bodyText}</Toast.Body>
      </Toast>
    </ThemeProvider>
  );
};

export default {
  Component,
};
