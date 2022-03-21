import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsRoundedCornerProps } from './RoundedCorner.types';

export const Component = (props: IconsRoundedCornerProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>rounded_corner</Default>;
};

export default {
  Component,
};
