import * as React from 'react';
import { Card } from 'react-bootstrap';
import { CardTitleHeaderProps } from './CardTitle.types';
import * as styles from './styles.module.scss';
import { getCssModClass } from '@owlui/utils';

const baseClass = 'cardHeader';

export const Component = (props: CardTitleHeaderProps) => {
  const { children } = props;
  const localProps = Object.assign({}, props);

  localProps.className = getCssModClass({ localProps, baseClass, styles });

  // TODO: Refactor the title to be rendered within the body

  return (
    <Card.Title {...localProps} bsPrefix="owlui-card-title">
      {children}
    </Card.Title>
  );
};

export default {
  Component,
};
