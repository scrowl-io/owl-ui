import React from 'react';
import { ThemeProvider, Form } from 'react-bootstrap';
import { RangeDefaultProps } from './Default.types';
import * as styleMod from './styles.module.scss';
import { getClasses, themePrefixesProps } from '../../../../lib/src/utils';

export const Range = ({
  className,
  pxScale,
  label,
  control,
  onChange,
  ...props
}: RangeDefaultProps) => {
  const themePrefixes: themePrefixesProps = {};
  const baseClass = 'range';
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
  const { content, ...labelProps } = label;

  themePrefixes[baseClass] = `owlui-${baseClass}`;
  themePrefixes['form-range'] = 'owlui-form-range';
  themePrefixes['form-label'] = 'owlui-form-label';

  if (className) {
    classes += ` ${className}`;
  }

  classes += ' mb-3';

  return (
    <ThemeProvider prefixes={themePrefixes}>
      <Form.Group className={classes} {...props}>
        <Form.Label {...labelProps}>{content}</Form.Label>
        <Form.Range {...control} onChange={onChange} />
      </Form.Group>
    </ThemeProvider>
  );
};

export default {
  Range,
};
