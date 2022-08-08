import React from 'react';
import { ListGroup, ThemeProvider } from 'react-bootstrap';
import { ListgroupDefaultProps } from './Default.types';
import * as styleMod from './styles.module.scss';
import { createLocalProps, themePrefixesProps } from '@owlui/lib/src/utils';

export const Component = (props: ListgroupDefaultProps) => {
  const themePrefixes: themePrefixesProps = {};
  const baseClass = 'list-group';
  const { items } = props;
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
        ],
      },
    },
    ['prefix', 'theme', 'items']
  );

  themePrefixes[baseClass] = `owlui-${baseClass}`;
  themePrefixes['list-group-item'] = `owlui-${baseClass}-item`;
  themePrefixes['list-group'] = `owlui-${baseClass}`;

  return (
    <ThemeProvider prefixes={themePrefixes}>
      <ListGroup {...locals}>
        {items.map(item => {
          return (
            <ListGroup.Item {...item.bsProps} key={item.id}>
              {item.header}
              {item.description}
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </ThemeProvider>
  );
};

export default {
  Component,
};
