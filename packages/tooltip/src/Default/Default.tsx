import React, { useState, useRef } from 'react';
import {
  ThemeProvider,
  Overlay,
  OverlayTrigger,
  Tooltip,
  Button,
  Popover,
} from 'react-bootstrap';
import { TooltipDefaultProps, themePrefixesProps } from './Default.types';
import * as styleMod from './styles.module.scss';
import { createLocalProps } from '@owlui/utils';

export const Component = (props: TooltipDefaultProps) => {
  const themePrefixes: themePrefixesProps = {};
  const baseClass = 'tooltip';
  const { children, target, show } = props;
  const prefix = props.prefix || '';
  // const [show, setShow] = useState(false);
  // const target = useRef(null);

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
    ['prefix', 'theme', 'size']
  );

  console.log(props);
  console.log(locals);
  console.log(target);

  themePrefixes[baseClass] = `owlui-${baseClass}`;
  themePrefixes['hide'] = 'owlui-hide';
  themePrefixes['show'] = 'owlui-show';
  themePrefixes['btn-primary'] = 'owlui-btn-primary';
  themePrefixes['btn'] = 'owlui-btn';

  return (
    <ThemeProvider prefixes={themePrefixes}>
      <Overlay {...locals} target={target} show={show}>
        <Tooltip id="overlay-example" {...locals}>
          {children}
        </Tooltip>
      </Overlay>
    </ThemeProvider>
  );
};

export default {
  Component,
};
