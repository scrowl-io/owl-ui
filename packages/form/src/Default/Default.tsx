import React from 'react';
import { ThemeProvider, Form as BsForm } from 'react-bootstrap';
import { FormDefaultProps } from './Default.types';
import * as styleMod from './styles.module.scss';
import { getClasses, themePrefixesProps } from '../../../../lib/src/utils';
import { Input } from '../../../input/src';
import { Range } from '../../../range/src';
import { Select } from '../../../select/src';
import { SwitchToggle } from '../../../switchToggle/src';

export const Form = ({
  className,
  pxScale,
  formData,
  children,
  ...props
}: FormDefaultProps) => {
  const themePrefixes: themePrefixesProps = {};
  const baseClass = 'form';
  let classes = getClasses({
    module: styleMod,
    base: baseClass,
    modifiers: [
      {
        base: 'PxScale',
        value: pxScale,
      },
    ],
  });

  themePrefixes[baseClass] = `owlui-${baseClass}`;
  themePrefixes['form-label'] = `owlui-${baseClass}-label`;
  themePrefixes['form-control'] = `owlui-${baseClass}-control`;
  themePrefixes['form-text'] = `owlui-${baseClass}-text`;
  themePrefixes['form-check'] = `owlui-${baseClass}-check`;
  themePrefixes['form-check-input'] = `owlui-${baseClass}-check-input`;
  themePrefixes['form-check-label'] = `owlui-${baseClass}-check-label`;
  themePrefixes['form-select'] = `owlui-${baseClass}-select`;
  themePrefixes['form-range'] = `owlui-${baseClass}-range`;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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

  if (className) {
    classes += ` ${className}`;
  }

  return (
    <ThemeProvider prefixes={themePrefixes}>
      <BsForm className={classes} {...props}>
        {renderFormElements}
        {children}
      </BsForm>
    </ThemeProvider>
  );
};

export default {
  Form,
};
