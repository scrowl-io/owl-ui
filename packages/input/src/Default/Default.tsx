import React from 'react';
import { ThemeProvider, Form } from 'react-bootstrap';
import { TextInputDefaultProps } from './Default.types';
import * as styleMod from './styles.module.scss';
import { getClasses, themePrefixesProps } from '../../../../lib/src/utils';

export const Input = ({
  className,
  pxScale,
  label,
  control,
  ...props
}: TextInputDefaultProps) => {
  const themePrefixes: themePrefixesProps = {};
  const baseClass = 'input';
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
  themePrefixes['form-label'] = 'owlui-form-label';
  themePrefixes['form-control'] = 'owlui-form-control';
  themePrefixes['form-text'] = 'owlui-form-text';

  if (className) {
    classes += ` ${className}`;
  }

  classes += ' mb-3';

  return (
    <ThemeProvider prefixes={themePrefixes}>
      <Form.Group className={classes} {...props}>
        {label && <Form.Label {...label}>{label?.content}</Form.Label>}
        <Form.Control {...control} />
      </Form.Group>
    </ThemeProvider>
  );
};

export default {
  Input,
};
