import * as React from 'react';
import { CardCardFooterProps } from './CardFooter.types';
import * as styles from './styles.module.scss';

const baseClass = 'owluiCardFooter';

export const Component = (props: CardCardFooterProps) => {
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
