import * as React from 'react';
import { NavigationDrawerElementProps } from '../Default.types';
import * as styles from '../styles.module.scss';
import { getCssModClass, cleanCopy } from '@owlui/utils';

const baseClass = 'owluiNavigationDrawerHeader';

export const Component = (props: NavigationDrawerElementProps) => {
  const { children } = props;
  const localProps: NavigationDrawerElementProps = cleanCopy(props);

  localProps.className = getCssModClass({ localProps, baseClass, styles });
  return <div className={localProps.className}>{children}</div>;
};

export default {
  Component,
};
