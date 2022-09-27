import React, { useState } from 'react';
import { Accordion as BsAccordion, ThemeProvider } from 'react-bootstrap';
import { AccordionDefaultProps } from './Default.types';
import * as styleMod from './styles.module.scss';
import {
  createLocalProps,
  themePrefixesProps,
} from '../../../../lib/src/utils';

export const Accordion = (props: AccordionDefaultProps) => {
  const themePrefixes: themePrefixesProps = {};
  const baseClass = 'accordion';
  const { items } = props;
  const prefix = props.prefix || '';
  const [isActive, setIsActive] = useState<string[]>([]);

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
            fields: ['pxScale'],
            value: 'PxScale',
          },
        ],
      },
    },
    ['prefix', 'theme', 'pxScale', 'items']
  );
  console.log('locals', locals);
  themePrefixes[baseClass] = `owlui-${baseClass}`;
  themePrefixes['accordion-button'] = 'owlui-accordion-button';
  themePrefixes['accordion-body'] = 'owlui-accordion-body';
  themePrefixes['accordion-item'] = 'owlui-accordion-item';

  const toggleActive = (event: React.MouseEvent<HTMLElement>) => {
    if (!isActive.includes(event.currentTarget.dataset.index as string)) {
      setIsActive([...isActive, event.currentTarget.dataset.index as string]);
    } else {
      setIsActive(
        isActive.filter(e => e !== event.currentTarget.dataset.index)
      );
    }
  };

  return (
    <ThemeProvider prefixes={themePrefixes}>
      <BsAccordion {...locals}>
        {items.map(item => {
          return (
            <BsAccordion.Item key={item.id} eventKey={item.id}>
              <div className="d-flex accordion-label-container">
                <BsAccordion.Button
                  className={`${
                    !isActive.includes(item.id) ? 'collapsed' : ''
                  }`}
                  data-index={item.id}
                  onClick={toggleActive}
                >
                  {item.label}
                </BsAccordion.Button>
                {item.labelAction ? item.labelAction : ''}
              </div>
              <BsAccordion.Body>{item.view}</BsAccordion.Body>
            </BsAccordion.Item>
          );
        })}
      </BsAccordion>
    </ThemeProvider>
  );
};

export default {
  Accordion,
};
