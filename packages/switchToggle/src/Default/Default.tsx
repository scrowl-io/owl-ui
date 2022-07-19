import * as React from 'react';
import { Form, ThemeProvider } from 'react-bootstrap';
import { SwitchToggleDefaultProps } from './Default.types';
import * as styleMod from './styles.module.scss';
import { createLocalProps } from '@owlui/lib/src/utils';

export const Component = (props: SwitchToggleDefaultProps) => {
  const baseClass = 'switchToggle';
  const prefix = props.prefix || '';
  const { label, control } = props.inputProps;

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
    ['prefix', 'theme', 'appearance', 'Size', 'inputProps']
  );

  return (
    <>
      <ThemeProvider
        prefixes={{
          'form-check': 'owlui-form-check',
          'form-switch': 'owlui-form-switch',
          'form-check-input': 'owlui-form-check-input',
          'form-check-label': 'owlui-form-check-label',
          'form-label': 'owlui-form-label',
        }}
      >
        <Form.Group {...locals}>
          <Form.Label {...label}>{label.content}</Form.Label>
          <Form.Check {...control} />
        </Form.Group>
      </ThemeProvider>
    </>
  );
};

export default {
  Component,
};
