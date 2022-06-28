import React, { useState } from 'react';
import {
  ThemeProvider,
  Overlay,
  Popover,
  OverlayTrigger,
  Button,
  Tooltip,
} from 'react-bootstrap';
import { TooltipDefaultProps, themePrefixesProps } from './Default.types';
import * as styleMod from './styles.module.scss';
import { createLocalProps } from '@owlui/utils';

export const Component = (props: TooltipDefaultProps) => {
  const themePrefixes: themePrefixesProps = {};
  const baseClass = 'tooltip';
  const {
    children,
    target,
    show,
    placement,
    variant,
    trigger,
    rootClose,
    header,
    content,
    type,
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
  themePrefixes['bs-popover-bottom'] = 'owlui-popover-bottom';
  themePrefixes['popover-arrow'] = 'owlui-popover-arrow';

  const handleToggle = () => {
    setComponentShow(!componentShow);
  };

  const popover = () => (
    <Popover id="popover" {...locals} {...props}>
      <Popover.Header as="h1">{header}</Popover.Header>
      <Popover.Body>
        <p>
          <strong>Check it out</strong> {children}
        </p>
      </Popover.Body>
    </Popover>
  );

  const tooltip = () => {
    return (
      <Popover {...locals}>
        <Popover.Header as="h1">{header}</Popover.Header>
        <Popover.Body>
          <p>
            <strong>Check it out</strong> {children}
          </p>
        </Popover.Body>
      </Popover>
    );
  };

  return (
    <ThemeProvider prefixes={themePrefixes}>
      <OverlayTrigger
        trigger={trigger}
        placement={placement}
        show={componentShow}
        // rootClose={rootClose}
        onToggle={handleToggle}
        overlay={
          props.type === 'popover' ? (
            <Popover id="popover" {...locals}>
              <Popover.Header as="h1">{header}</Popover.Header>
              <Popover.Body>
                <p>
                  <strong>Check it out</strong> {children}
                </p>
              </Popover.Body>
            </Popover>
          ) : (
            <Tooltip id="tooltip" {...locals}>
              Tooltip {children}
            </Tooltip>
          )
        }
      >
        {content}
      </OverlayTrigger>

      {/* <Overlay
        trigger={trigger}
        target={target}
        show={show}
        rootClose={rootClose}
        placement="top"
      >
        {popover}
      </Overlay> */}
    </ThemeProvider>
  );
};

export default {
  Component,
};
