import * as React from 'react';
import { CardCardFooterProps } from './CardFooter.types';
import * as styles from './styles.module.scss';
import { getCssModClass } from '@owlui/utils';

const baseClass = 'owluiCardFooter';

export const Component = (props: CardCardFooterProps) => {
  const { children } = props;
  const localProps = Object.assign({}, props);
  const className = getCssModClass({ localProps, baseClass, styles });

  return <div className={className}>{children}</div>;
};

export default {
  Component,
};
