import React from 'react';
import { ThemeProvider, Form } from 'react-bootstrap';
import { FormDefaultProps } from './Default.types';
import * as styleMod from './styles.module.scss';
import { createLocalProps, themePrefixesProps } from '@owlui/lib/src/utils';
import { Input } from '../../../input/src';
import { Range } from '../../../range/src';
import { Select } from '../../../select/src';
import { SwitchToggle } from '../../../switchToggle/src';

export const Component = (props: FormDefaultProps) => {
  const themePrefixes: themePrefixesProps = {};
  const baseClass = 'form';
  const { formData, children } = props;
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
    ['prefix', 'theme', 'size', 'formData']
  );

  themePrefixes[baseClass] = `owlui-${baseClass}`;
  themePrefixes['form-label'] = 'owlui-form-label';
  themePrefixes['form-control'] = 'owlui-form-control';
  themePrefixes['form-text'] = 'owlui-form-text';
  themePrefixes['form-check'] = 'owlui-form-check';
  themePrefixes['form-check-input'] = 'owlui-form-check-input';
  themePrefixes['form-check-label'] = 'owlui-form-check-label';
  themePrefixes['form-select'] = 'owlui-form-select';
  themePrefixes['form-range'] = 'owlui-form-range';

  const renderFormElements = formData.map((element: any) => {
    switch (element.type) {
      case 'input':
        return <Input inputProps={element.inputProps} />;
      case 'select':
        return <Select inputProps={element.inputProps} />;
      case 'range':
        return <Range inputProps={element.inputProps} />;
      case 'check':
        return <SwitchToggle inputProps={element.inputProps} />;
      default:
        return null;
    }
  });

  return (
    <ThemeProvider prefixes={themePrefixes}>
      <Form {...locals}>
        {renderFormElements}
        {children}
      </Form>
    </ThemeProvider>
  );
};

export default {
  Component,
};
