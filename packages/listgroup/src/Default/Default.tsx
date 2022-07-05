import React from 'react';
import { ListGroup, ThemeProvider } from 'react-bootstrap';
import { ListgroupDefaultProps } from './Default.types';
import * as styleMod from './styles.module.scss';
import { createLocalProps, themePrefixesProps } from '@owlui/utils';

export const Component = (props: ListgroupDefaultProps) => {
  const themePrefixes: themePrefixesProps = {};
  const baseClass = 'listgroup';
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
  themePrefixes['list-group-item'] = 'owlui-list-group-item';
  themePrefixes['list-group'] = 'owlui-list-group';

  return (
    <ThemeProvider prefixes={themePrefixes}>
      <ListGroup {...locals}>
        {items.map(item => {
          return (
            <ListGroup.Item {...item.bsProps} key={item.id}>
              {item.content}
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
