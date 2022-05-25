import * as React from 'react';
import { TabTabWrapperProps } from './TabContent.types';
import { createLocalProps, getCssModClass } from '@owlui/utils';
import * as styles from './styles.module.scss';

export const Component = (props: TabTabWrapperProps) => {
  const baseClass = 'tabContent';
  const { children } = props;
  const localProps = Object.assign({}, props);
  const prefix = props.prefix || '';

  const locals = createLocalProps(
    props,
    {
      module: styles,
      classes: {
        base: baseClass,
        prefix: prefix,
        optionals: [
          {
            fields: ['theme'],
            value: 'Theme',
          },
          {
            fields: ['theme', 'appearance'],
            value: 'Theme',
          },
          {
            fields: ['size'],
            value: 'Size',
          },
        ],
      },
    },
    ['prefix', 'theme', 'appearance', 'size']
  );

  localProps.className = getCssModClass({ localProps, baseClass, styles });

  const TabWrapperRenderer = () => {
    const Element = 'div';

    return <Element {...locals}>{children}</Element>;
  };
  return <>{TabWrapperRenderer()}</>;
};

export default {
  Component,
};
