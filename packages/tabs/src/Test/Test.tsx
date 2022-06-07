import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { TabsTestProps } from './Test.types';
import { getCssModClass } from '@owlui/utils';
import * as styles from './styles.module.scss';

const baseClass = 'tabsTest';

export const Component = (props: TabsTestProps) => {
  const { children } = props;
  const localProps = Object.assign({}, props);

  localProps.className = getCssModClass({ localProps, baseClass, styles });

  return <Default {...localProps}>{children}</Default>;
};

export default {
  Component,
};
