import * as React from 'react';
import Tab from 'react-bootstrap/Tab';
// import { Component as SingleTab } from '../Default/Default';
import { TabProps } from './Tab.types';
import { getCssModClass } from '@owlui/utils';
import * as styles from './styles.module.scss';

const baseClass = 'tabsTab';

export const Component = (props: TabProps) => {
  const { children } = props;
  const localProps = Object.assign({}, props);

  localProps.className = getCssModClass({ localProps, baseClass, styles });

  return <Tab {...props}>{children}</Tab>;
};

export default {
  Component,
};
