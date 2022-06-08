import * as React from 'react';
import { Form, ThemeProvider } from 'react-bootstrap';
import {
  SwitchToggleDefaultProps,
  SwitchToggleContainerProps,
} from './Default.types';
import * as styleMod from './styles.module.scss';
import { createLocalProps } from '@owlui/utils';

export const Component = (props: SwitchToggleDefaultProps) => {
  const baseClass = 'switchToggle';
  const { switchtoggle } = props;
  const prefix = props.prefix || '';

  const [toggle, setToggle] = React.useState<boolean>(false);

  const locals: SwitchToggleDefaultProps = createLocalProps(
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
            fields: ['theme', 'appearance'],
            value: 'theme',
          },
          {
            fields: ['size'],
            value: 'size',
          },
        ],
      },
    },
    [
      'prefix',
      'theme',
      'appearance',
      'size',
      'switchToggle',
      'label',
      'id',
      'type',
    ]
  );

  return (
    <>
      <ThemeProvider
        prefixes={{
          'form-check': 'owlui-form-check',
          'form-switch': 'owlui-form-switch',
          'form-check-input': 'owlui-form-check-input',
          label: 'owlui-label',
        }}
      >
        <Form {...locals}>
          <label
            htmlFor="owlui-custom-switch"
            className={`label p-2 ${toggle ? 'active-switch' : ''}`}
          >
            <span aria-hidden="true">Reduced Motion</span>
            <Form.Check
              onClick={() => setToggle(!toggle)}
              bsPrefix="owlui-form-check"
              checked={toggle}
              className="owlui-form"
              type="switch"
              id="owlui-custom-switch"
              label={toggle ? 'ON' : 'OFF'}
            />
          </label>
        </Form>
      </ThemeProvider>
    </>
  );
};

export default {
  Component,
};
