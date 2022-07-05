import * as React from 'react';
import { Form, ThemeProvider } from 'react-bootstrap';
import { SwitchToggleDefaultProps } from './Default.types';
import * as styleMod from './styles.module.scss';
import { createLocalProps } from '@owlui/lib/src/utils';

export const Component = (props: SwitchToggleDefaultProps) => {
  const baseClass = 'switchToggle';
  const prefix = props.prefix || '';

  const locals: SwitchToggleDefaultProps = createLocalProps(
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
            fields: ['appearance'],
            value: 'Appearance',
          },
          {
            fields: ['size'],
            value: 'Size',
          },
        ],
      },
    },
    ['prefix', 'theme', 'appearance', 'Size']
  );

  return (
    <>
      <ThemeProvider
        prefixes={{
          'form-check': 'owlui-form-check',
          'form-switch': 'owlui-form-switch',
          'form-check-input': 'owlui-form-check-input',
          'form-check-label': 'owlui-form-check-label',
        }}
      >
        <Form.Check {...locals} type="switch" />
      </ThemeProvider>
    </>
  );
};

export default {
  Component,
};
