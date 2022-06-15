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
  themePrefixes['accordion-button'] = 'owlui-accordion-button';
  themePrefixes['accordion-body'] = 'owlui-accordion-body';
  themePrefixes['accordion-collapse'] = 'owlui-accordion-collapse';
  themePrefixes['accordion-item'] = 'owlui-accordion-item';
  themePrefixes['accordion-collapsing'] = 'owlui-accordion-collapsing';
  themePrefixes['collapsing'] = 'owlui-collapsing';
  // themePrefixes['collapsed'] = 'owlui-collapsed';
  themePrefixes['show'] = 'owlui-show';

  const toggleActive = (event: React.MouseEvent<HTMLElement>) => {
    if (!isActive.includes(event.currentTarget.dataset.index)) {
      setIsActive([...isActive, event.currentTarget.dataset.index]);
    } else {
      setIsActive(
        isActive.filter(e => e !== event.currentTarget.dataset.index)
      );
    }
  };

  return (
    <ThemeProvider prefixes={themePrefixes}>
      <Accordion {...locals} style={{ width: '70vw' }}>
        {items?.map(item => {
          return (
            <Accordion.Item key={item.id} eventKey={item.id as string}>
              <Accordion.Button
                className={`${
                  !isActive.includes(item.id) ? 'owlui-collapsed' : ''
                }`}
                data-index={item.id}
                onClick={toggleActive}
              >
                {item.label}
              </Accordion.Button>
              <Accordion.Body
                id={item.id}
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
