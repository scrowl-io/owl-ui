import * as React from 'react';
import { CardCardHeaderProps } from './CardHeader.types';
import * as styles from './styles.module.scss';
import { getCssModClass } from '@owlui/utils';

const baseClass = 'cardHeader';

export const Component = (props: CardCardHeaderProps) => {
  const { children } = props;
  const localProps = Object.assign({}, props);

  localProps.className = getCssModClass({ localProps, baseClass, styles });

  return <div className={localProps.className}>{children}</div>;
};

export default {
  Component,
};
