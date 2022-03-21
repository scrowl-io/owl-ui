import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsRemoveCircleProps } from './RemoveCircle.types';

export const Component = (props: IconsRemoveCircleProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>remove_circle</Default>;
};

export default {
  Component,
};
