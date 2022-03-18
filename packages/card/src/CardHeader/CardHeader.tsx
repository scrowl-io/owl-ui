import * as React from 'react';
import { CardCardHeaderProps } from './CardHeader.types';
import * as styles from './styles.module.scss';

const baseClass = 'owluiCardHeader';

export const Component = (props: CardCardHeaderProps) => {
  const { children } = props;
  const localProps = Object.assign({}, props);

  localProps.className = Object.prototype.hasOwnProperty.call(
    localProps,
    'className'
  )
    ? `${styles[baseClass]} ${localProps.className}`
    : styles[baseClass];

  return <div className={localProps.className}>{children}</div>;
};

export default {
  Component,
};
