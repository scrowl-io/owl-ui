import * as React from 'react';
import { Button } from 'react-bootstrap';
import { ButtonDefaultProps } from './Default.types';
import * as styleMod from './styles.module.scss';
import { createLocalProps } from '@owlui/utils';

export const Component = (props: ButtonDefaultProps) => {
  const baseClass = 'btn';
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
    ['prefix', 'theme', 'Size']
  );

  return (
    <>
      <Button bsPrefix="owlui-btn" {...locals}>
        {props.children}
      </Button>
    </>
  );
};

export default {
  Component,
};
