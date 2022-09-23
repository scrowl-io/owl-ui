import React from 'react';
import { ThemeProvider, Form } from 'react-bootstrap';
import { TextInputDefaultProps } from './Default.types';
import * as styleMod from './styles.module.scss';
import {
  createLocalProps,
  themePrefixesProps,
} from '../../../../lib/src/utils';

export const Component = (props: TextInputDefaultProps) => {
  const themePrefixes: themePrefixesProps = {};
  const baseClass = 'input';
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
  themePrefixes['form-label'] = 'owlui-form-label';
  themePrefixes['form-control'] = 'owlui-form-control';
  themePrefixes['form-text'] = 'owlui-form-text';

  return (
    <ThemeProvider prefixes={themePrefixes}>
      <Form.Group {...locals} className="mb-3">
        {label && <Form.Label {...label}>{label?.content}</Form.Label>}
        <Form.Control {...control} />
      </Form.Group>
    </ThemeProvider>
  );
};

export default {
  Component,
};
