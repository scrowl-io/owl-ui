import React from 'react';
import { ThemeProvider, Form } from 'react-bootstrap';
import { RangeDefaultProps } from './Default.types';
import * as styleMod from './styles.module.scss';
import {
  createLocalProps,
  themePrefixesProps,
} from '../../../../lib/src/utils';

export const Range = (props: RangeDefaultProps) => {
  const themePrefixes: themePrefixesProps = {};
  const baseClass = 'range';
  const { label, control } = props.inputProps;
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
      },
    },
    ['prefix', 'theme', 'pxScale', 'inputProps']
  );

  themePrefixes[baseClass] = `owlui-${baseClass}`;
  themePrefixes['form-range'] = 'owlui-form-range';
  themePrefixes['form-label'] = 'owlui-form-label';

  return (
    <ThemeProvider prefixes={themePrefixes}>
      <Form.Group {...locals} className="mb-3">
        <Form.Label {...label}>{label?.content}</Form.Label>
        <Form.Range {...control} />
      </Form.Group>
    </ThemeProvider>
  );
};

export default {
  Range,
};
