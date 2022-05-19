import * as React from 'react';
import { TabTabItemProps } from './TabItem.types';
import { createLocalProps, getCssModClass } from '@owlui/utils';
import * as styles from './styles.module.scss';

const baseClass = 'tabItem';

export const Component = (props: TabTabItemProps) => {
  const { children } = props;
  const localProps = Object.assign({}, props);

  const locals = createLocalProps(
    props,
    {
      module: styles,
      classes: {
        base: baseClass,
        prefix: '',
        optionals: [
          {
            fields: ['theme'],
            value: 'Theme',
          },
          {
            fields: ['theme', 'appearance'],
            value: 'Theme',
          },
        ],
      },
    },
    ['prefix', 'theme', 'appearance']
  );

  localProps.className = getCssModClass({ localProps, baseClass, styles });

  const TabWrapperRenderer = () => {
    const Element = 'li';

    return <Element {...locals}>{children}</Element>;
  };
  return <>{TabWrapperRenderer()}</>;
};

export default {
  Component,
};
