import * as React from 'react';
import { CardCardBodyProps } from './CardBody.types';
import * as styles from './styles.module.scss';
import { getCssModClass } from '@owlui/utils';

const baseClass = 'owluiCardCardbody';

export const Component = (props: CardCardBodyProps) => {
  const { children } = props;
  const localProps = Object.assign({}, props);
  const className = getCssModClass({ localProps, baseClass, styles });

  return <div className={className}>{children}</div>;
};

export default {
  Component,
};
