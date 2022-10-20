import React from 'react';
import { ListGroup as BsListGroup, ThemeProvider } from 'react-bootstrap';
import { ListgroupDefaultProps } from './Default.types';
import * as styleMod from './styles.module.scss';
import { getClasses, themePrefixesProps } from '../../../../lib/src/utils';

export const ListGroup = ({
  className,
  items,
  ...props
}: ListgroupDefaultProps) => {
  const themePrefixes: themePrefixesProps = {};
  const baseClass = 'list-group';
  let classes = getClasses({
    module: styleMod,
    base: baseClass,
  });

  themePrefixes[baseClass] = `owlui-${baseClass}`;
  themePrefixes['list-group-item'] = `owlui-${baseClass}-item`;
  themePrefixes['list-group'] = `owlui-${baseClass}`;

  if (className) {
    classes += ` ${className}`;
  }

  return (
    <ThemeProvider prefixes={themePrefixes}>
      <BsListGroup className={classes} {...props}>
        {items.map(item => {
          return (
            <BsListGroup.Item {...item.bsProps} key={item.id}>
              {item.header}
              {item.description}
            </BsListGroup.Item>
          );
        })}
      </BsListGroup>
    </ThemeProvider>
  );
};

export default {
  ListGroup,
};
