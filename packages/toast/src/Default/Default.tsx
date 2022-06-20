import React, { useState, useEffect } from 'react';
import { ThemeProvider, Toast } from 'react-bootstrap';
import { ToastDefaultProps, themePrefixesProps } from './Default.types';
import * as styleMod from './styles.module.scss';
import { createLocalProps } from '@owlui/utils';

export const Component = (props: ToastDefaultProps) => {
  const themePrefixes: themePrefixesProps = {
    'toast-header': 'owlui-toast-header',
    'toast-body': 'owlui-toast-body',
    'btn-close': 'owlui-btn-close',
  };
  const showClass = 'owlui-show';
  const baseClass = 'toast';
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
    const showToast: HTMLElement | null =
      document.querySelector('.owlui-toast');
    const closeBtn: HTMLElement | null = document.querySelector('.btn-close');

    if (showToast instanceof Element === false) return;

    if (closeBtn instanceof Element === false) return;

    showToast?.classList.add(showClass);
    closeBtn?.classList.add('owlui-btn-close');
  });

  return (
    <ThemeProvider prefixes={themePrefixes}>
      <Toast {...locals} bg="secondary">
        <Toast.Header>
          {/* <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" /> */}
          <strong className="me-auto">Bootstrap</strong>
          <small>11 mins ago</small>
        </Toast.Header>
        <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
      </Toast>
    </ThemeProvider>
  );
};

export default {
  Component,
};
