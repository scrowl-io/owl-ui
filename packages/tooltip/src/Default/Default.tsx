import React, { useState, useRef, useEffect } from 'react';
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
  const { children, target, show, placement } = props;
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
    ['prefix', 'theme', 'size', 'target']
  );

  if (show) {
    locals['className'] += ' owlui-show';
  }

  console.log(locals);

  themePrefixes[baseClass] = `owlui-${baseClass}`;
  themePrefixes['hide'] = 'owlui-hide';
  themePrefixes['show'] = 'owlui-show';
  themePrefixes['fade'] = 'owlui-fade';
  themePrefixes['btn-primary'] = 'owlui-btn-primary';
  themePrefixes['btn'] = 'owlui-btn';

  return (
    <ThemeProvider prefixes={themePrefixes}>
      <Overlay target={target} show={show} placement={placement}>
        <Tooltip id="overlay" {...locals}>
          {/* <Tooltip id="overlay" {...locals} className={show ? 'owlui-show' : ''}> */}
          {children}
        </Tooltip>
      </Overlay>
    </ThemeProvider>
  );
};

export default {
  Component,
};
