import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { TableHeaderProps } from './Header.types';
import * as styles from './styles.module.scss';

const baseClass = 'owluiTableHeader';

export const Component = (props: TableHeaderProps) => {
  const { children } = props;
  const localProps = Object.assign({}, props);

  localProps.className = localProps.hasOwnProperty('className')
    ? `${styles[baseClass]} ${localProps.className}`
    : styles[baseClass];

  return <Default {...localProps}>{children}</Default>;
};

export default {
  Component,
};
