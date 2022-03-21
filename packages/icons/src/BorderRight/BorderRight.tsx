import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsBorderRightProps } from './BorderRight.types';

export const Component = (props: IconsBorderRightProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>border_right</Default>;
};

export default {
  Component,
};
