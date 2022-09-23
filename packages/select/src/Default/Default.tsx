import React from 'react';
import { ThemeProvider, Form } from 'react-bootstrap';
import { SelectDefaultProps } from './Default.types';
import * as styleMod from './styles.module.scss';
import {
  createLocalProps,
  themePrefixesProps,
} from '../../../../lib/src/utils';

export const Select = (props: SelectDefaultProps) => {
  const themePrefixes: themePrefixesProps = {};
  const baseClass = 'select';
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
  themePrefixes['form-select'] = 'owlui-form-select';

  return (
    <ThemeProvider prefixes={themePrefixes}>
      <Form.Group {...locals} className="mb-3">
        <Form.Label {...label}>{label?.content}</Form.Label>
        <Form.Select {...control}>
          {control.options.map(option => {
            return (
              <option key={option.id} {...option}>
                {option.label}
              </option>
            );
          })}
        </Form.Select>
      </Form.Group>
    </ThemeProvider>
  );
};

export default {
  Select,
};
