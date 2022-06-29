import React, { useState, useEffect } from 'react';
import { ThemeProvider, Offcanvas } from 'react-bootstrap';
import { Component as Button } from '../../../button/src/Default/Default';
import { DrawerDefaultProps, themePrefixesProps } from './Default.types';
import * as styleMod from './styles.module.scss';
import { createLocalProps } from '@owlui/utils';

export const Component = (props: DrawerDefaultProps) => {
  const themePrefixes: themePrefixesProps = {};
  const baseClass = 'drawer';
  const { headerText, bodyText, placement } = props;
  const prefix = props.prefix || '';

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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

  useEffect(() => {
    const closeDrawer: HTMLElement | null =
      document.querySelector('.btn-close');

    if (closeDrawer instanceof Element === false) {
      return;
    }

    closeDrawer?.classList.add('owlui-btn-close');
  });

  themePrefixes[baseClass] = `owlui-${baseClass}`;
  themePrefixes['offcanvas'] = 'owlui-offcanvas';
  themePrefixes['offcanvas-start'] = 'owlui-offcanvas-start';
  themePrefixes['offcanvas-header'] = 'owlui-offcanvas-header';
  themePrefixes['offcanvas-body'] = 'owlui-offcanvas-body';
  themePrefixes['offcanvas-title'] = 'owlui-offcanvas-title';

  return (
    <ThemeProvider prefixes={themePrefixes}>
      <Button {...locals} onClick={handleShow}>
        Launch
      </Button>

      <Offcanvas placement={placement} show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{headerText}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>{bodyText}</Offcanvas.Body>
      </Offcanvas>
    </ThemeProvider>
  );
};

export default {
  Component,
};
