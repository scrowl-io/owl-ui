import * as React from 'react';
import { Form, ThemeProvider } from 'react-bootstrap';
import { SwitchToggleDefaultProps } from './Default.types';
import * as styleMod from './styles.module.scss';
import { getClasses, themePrefixesProps } from '../../../../lib/src/utils';

export const SwitchToggle = ({
  className,
  pxScale,
  label,
  control,
  ...props
}: SwitchToggleDefaultProps) => {
  const themePrefixes: themePrefixesProps = {};
  const baseClass = 'switch';
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

  themePrefixes['form-switch'] = `owlui-form-${baseClass}`;
  themePrefixes['form-label'] = `owlui-form-label`;
  themePrefixes['form-check'] = `owlui-form-check`;
  themePrefixes['form-check-input'] = `owlui-form-check-input`;
  themePrefixes['form-check-label'] = `owlui-form-check-label`;

  if (className) {
    classes += ` ${className}`;
  }

  return (
    <>
      <ThemeProvider prefixes={themePrefixes}>
        <Form.Group className={classes} {...props}>
          <Form.Label {...labelProps}>{content}</Form.Label>
          <Form.Check {...control} />
        </Form.Group>
      </ThemeProvider>
    </>
  );
};

export default {
  SwitchToggle,
};
