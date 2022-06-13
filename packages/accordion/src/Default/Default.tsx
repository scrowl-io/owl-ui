import React, { useState } from 'react';
import { Accordion, ThemeProvider } from 'react-bootstrap';
import { AccordionDefaultProps, themePrefixesProps } from './Default.types';
import * as styleMod from './styles.module.scss';
import { createLocalProps } from '@owlui/utils';

export const Component = (props: AccordionDefaultProps) => {
  const themePrefixes: themePrefixesProps = {};
  const baseClass = 'accordion';
  const { items } = props;
  const prefix = props.prefix || '';
  const [isActive, setIsActive] = useState([]);

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
    ['prefix', 'theme', 'size', 'items']
  );

  themePrefixes[baseClass] = `owlui-${baseClass}`;

  const toggleActive = event => {
    if (!isActive.includes(event.target.parentElement.dataset.index)) {
      setIsActive([...isActive, event.target.parentElement.dataset.index]);
    } else {
      setIsActive(
        isActive.filter(e => e !== event.target.parentElement.dataset.index)
      );
    }
    console.log(isActive);
  };

  return (
    <ThemeProvider prefixes={themePrefixes}>
      <Accordion {...locals}>
        {items?.map(item => {
          return (
            <Accordion.Item key={item.id} eventKey={item.id}>
              <Accordion.Header data-index={item.id} onClick={toggleActive}>
                {item.label}
              </Accordion.Header>
              <Accordion.Body
                className={`${
                  isActive.includes(item.id)
                    ? 'owlui-collapse owlui-show'
                    : 'owlui-collapse'
                }`}
              >
                {item.view}
              </Accordion.Body>
            </Accordion.Item>
          );
        })}
      </Accordion>
    </ThemeProvider>
  );
};

export default {
  Component,
};
