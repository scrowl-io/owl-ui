import * as React from 'react';
import { NavigationDrawerElementProps } from '../Default.types';
import * as styles from '../styles.module.scss';

const baseClass = 'owluiNavigationDrawerHeader';

export const Component = (props: NavigationDrawerElementProps) => {
  const { children } = props;

  return <div className={styles[baseClass]}>{children}</div>;
};

export default {
  Component,
};
