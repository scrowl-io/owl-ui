import * as React from 'react';
import { CardCardBodyProps } from './CardBody.types';
import { getCssModClass } from '@owlui/utils';
import * as styles from './styles.module.scss';

const baseClass = 'cardBody';

export const Component = (props: CardCardBodyProps) => {
  const { children } = props;
  const localProps = Object.assign({}, props);

  localProps.className = getCssModClass({ localProps, baseClass, styles });

  return <div {...localProps}>{children}</div>;
};

export default {
  Component,
};
