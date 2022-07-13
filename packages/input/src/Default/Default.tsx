import React, { useState } from 'react';
import { ThemeProvider, Form } from 'react-bootstrap';
import { InputDefaultProps } from './Default.types';
import * as styleMod from './styles.module.scss';
import { createLocalProps, themePrefixesProps } from '@owlui/lib/src/utils';

export const Component = (props: InputDefaultProps) => {
  const themePrefixes: themePrefixesProps = {};
  const baseClass = 'input';
  const { inputProps, type } = props;
  const prefix = props.prefix || '';
  const [inputText, setInputText] = useState('');

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
    ['prefix', 'theme', 'size', 'inputProps']
  );

  themePrefixes[baseClass] = `owlui-${baseClass}`;
  themePrefixes['form-label'] = 'owlui-form-label';
  themePrefixes['form-control'] = 'owlui-form-control';
  themePrefixes['form-text'] = 'owlui-form-text';

  const updateInputState = (e: React.BaseSyntheticEvent<KeyboardEvent>) => {
    setInputText(e.target.value);
  };

  return (
    <ThemeProvider prefixes={themePrefixes}>
      <Form.Group {...locals} className="mb-3">
        <Form.Label htmlFor={inputProps.id}>{inputProps.label}</Form.Label>
        <Form.Control
          onChange={updateInputState}
          {...inputProps}
          {...inputProps.optionalprops}
        />
      </Form.Group>
    </ThemeProvider>
  );
};

export default {
  Component,
};
