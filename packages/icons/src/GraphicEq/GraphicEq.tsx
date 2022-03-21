import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsGraphicEqProps } from './GraphicEq.types';

export const Component = (props: IconsGraphicEqProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>graphic_eq</Default>;
};

export default {
  Component,
};
