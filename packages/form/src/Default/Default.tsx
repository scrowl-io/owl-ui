import React from 'react';
import { ThemeProvider, Form } from 'react-bootstrap';
import { FormDataProps, FormDefaultProps } from './Default.types';
import * as styleMod from './styles.module.scss';
import { createLocalProps, themePrefixesProps } from '@owlui/lib/src/utils';
import { Input, TextInputProps } from '../../../input/src';
import { Range, RangeProps } from '../../../range/src';
import { Select, SelectProps } from '../../../select/src';
import { SwitchProps, SwitchToggle } from '../../../switchToggle/src';

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
            fields: ['pxScale'],
            value: 'PxScale',
          },
        ],
      },
    },
    ['prefix', 'theme', 'pxScale', 'formData']
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

  const renderFormElements = formData.map((element: any, index) => {
    switch (element.type) {
      case 'input':
        return <Input inputProps={element.inputProps} key={index} />;
      case 'select':
        return <Select inputProps={element.inputProps} key={index} />;
      case 'range':
        return <Range inputProps={element.inputProps} key={index} />;
      case 'check':
        return <SwitchToggle inputProps={element.inputProps} key={index} />;
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
