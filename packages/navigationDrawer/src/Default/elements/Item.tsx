import * as React from 'react';
import { NavigationDrawerContentItemProps } from '../Default.types';
import * as styles from '../styles.module.scss';

const baseClass = 'owluiNavigationDrawerItem';
const linkClass = `${baseClass}Link`;
console.log('styles', styles);
export const Component = (props: NavigationDrawerContentItemProps) => {
  const { label, url } = props;
  const content = !url ? (
    label
  ) : (
    <a className={styles[linkClass]} href={url}>
      {label}
    </a>
  );

  return <div className={styles[baseClass]}>{content}</div>;
};

export default {
  Component,
};
