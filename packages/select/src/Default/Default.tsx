import React from 'react';
import { ThemeProvider, Form } from 'react-bootstrap';
import { SelectDefaultProps } from './Default.types';
import * as styleMod from './styles.module.scss';
import { createLocalProps, themePrefixesProps } from '@owlui/lib/src/utils';

export const Component = (props: SelectDefaultProps) => {
  const themePrefixes: themePrefixesProps = {};
  const baseClass = 'select';
  const { label, id, name, selectoptions } = props;
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
    ['prefix', 'theme', 'size', 'selectProps']
  );

  themePrefixes[baseClass] = `owlui-${baseClass}`;
  themePrefixes['form-label'] = 'owlui-form-label';
  themePrefixes['form-select'] = 'owlui-form-select';

  return (
    <ThemeProvider prefixes={themePrefixes}>
      <Form.Group {...locals} className="mb-3">
        <Form.Label htmlFor={id}>{label}</Form.Label>
        <Form.Select name={name}>
          {selectoptions.map(option => {
            return <option key={option.id}>{option.label}</option>;
          })}
        </Form.Select>
      </Form.Group>
    </ThemeProvider>
  );
};

export default {
  Component,
};
