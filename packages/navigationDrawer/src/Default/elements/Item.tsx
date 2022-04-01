import * as React from 'react';
import { NavigationDrawerContentItemProps } from '../Default.types';
import * as styles from '../styles.module.scss';

const baseClass = 'owluiNavigationDrawerItem';

export const Component = (props: NavigationDrawerContentItemProps) => {
  const { label } = props;

  return <div className={styles[baseClass]}>{label}</div>;
};

export default {
  Component,
};
