import React, { useState } from 'react';
import { ThemeProvider, Form } from 'react-bootstrap';
import { RangeDefaultProps } from './Default.types';
import * as styleMod from './styles.module.scss';
import { createLocalProps, themePrefixesProps } from '@owlui/lib/src/utils';

export const Component = (props: RangeDefaultProps) => {
  const themePrefixes: themePrefixesProps = {};
  const baseClass = 'range';
  const { rangeProps } = props;
  const prefix = props.prefix || '';
  const [rangeValue, setRangeValue] = useState('30');

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
    ['prefix', 'theme', 'size', 'rangeProps']
  );

  themePrefixes[baseClass] = `owlui-${baseClass}`;
  themePrefixes['form-range'] = 'owlui-form-range';
  themePrefixes['form-label'] = 'owlui-form-label';

  const updateRangeState = (e: React.BaseSyntheticEvent<KeyboardEvent>) => {
    setRangeValue(e.target.value);
  };

  return (
    <ThemeProvider prefixes={themePrefixes}>
      <Form.Group {...locals}>
        <Form.Label htmlFor={rangeProps.id}>
          {rangeProps.label} {rangeValue}
        </Form.Label>
        <Form.Range
          value={rangeValue}
          onChange={updateRangeState}
          {...rangeProps}
          {...rangeProps.optionalprops}
        />
      </Form.Group>
    </ThemeProvider>
  );
};

export default {
  Component,
};
