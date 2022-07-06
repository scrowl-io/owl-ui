import React, { useState } from 'react';
import {
  ThemeProvider,
  Popover,
  OverlayTrigger,
  Tooltip,
} from 'react-bootstrap';
import { TooltipDefaultProps } from './Default.types';
import * as styleMod from './styles.module.scss';
import { createLocalProps, themePrefixesProps } from '@owlui/lib/src/utils';

export const Component = (props: TooltipDefaultProps) => {
  const themePrefixes: themePrefixesProps = {};
  const baseClass = 'tooltip';
  const {
    children,
    placement,
    trigger,
    popover,
    // rootClose,
    header,
    targetElement,
  } = props;
  const prefix = props.prefix || '';
  const [componentShow, setComponentShow] = useState(false);

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

  themePrefixes[baseClass] = `owlui-${baseClass}`;
  themePrefixes['popover'] = 'owlui-popover';
  themePrefixes['popover-header'] = 'owlui-popover-header';
  themePrefixes['popover-body'] = 'owlui-popover-body';

  const handleToggle = () => {
    setComponentShow(!componentShow);
  };

  return (
    <ThemeProvider prefixes={themePrefixes}>
      <OverlayTrigger
        trigger={trigger}
        placement={placement}
        show={componentShow}
        // rootClose={true}
        onToggle={handleToggle}
        overlay={
          popover ? (
            <Popover id="popover" {...locals}>
              <Popover.Header as="h1">{header}</Popover.Header>
              <Popover.Body>
                <strong>Check it out</strong> {children}
              </Popover.Body>
            </Popover>
          ) : (
            <Tooltip id="tooltip" {...locals}>
              {children}
            </Tooltip>
          )
        }
      >
        {targetElement}
      </OverlayTrigger>
    </ThemeProvider>
  );
};

export default {
  Component,
};
