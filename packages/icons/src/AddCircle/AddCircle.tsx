import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsAddCircleProps } from './AddCircle.types';

export const Component = (props: IconsAddCircleProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>add_circle</Default>;
};

export default {
  Component,
};
