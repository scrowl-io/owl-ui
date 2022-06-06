import * as React from 'react';
import { Card } from 'react-bootstrap';
import { CardHeaderProps } from './CardHeader.types';
import * as styles from './styles.module.scss';
import { getCssModClass } from '@owlui/utils';

const baseClass = 'cardHeader';

export const Component = (props: CardHeaderProps) => {
  const { children } = props;
  const localProps = Object.assign({}, props);

  localProps.className = getCssModClass({ localProps, baseClass, styles });

  return (
    <Card.Header {...localProps} bsPrefix="owlui-card-header">
      {children}
    </Card.Header>
  );
};

export default {
  Component,
};
