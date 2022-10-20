import React from 'react';
import { ThemeProvider, Form } from 'react-bootstrap';
import { SelectDefaultProps } from './Default.types';
import * as styleMod from './styles.module.scss';
import { getClasses, themePrefixesProps } from '../../../../lib/src/utils';

export const Select = ({
  className,
  pxScale,
  label,
  control,
  ...props
}: SelectDefaultProps) => {
  const themePrefixes: themePrefixesProps = {};
  const baseClass = 'select';
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
  themePrefixes['form-select'] = 'owlui-form-select';

  if (className) {
    classes += ` ${className}`;
  }

  classes += 'mb-3';

  return (
    <ThemeProvider prefixes={themePrefixes}>
      <Form.Group className={classes} {...props}>
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
