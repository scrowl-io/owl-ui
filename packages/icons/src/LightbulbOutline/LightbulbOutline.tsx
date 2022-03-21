import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsLightbulbOutlineProps } from './LightbulbOutline.types';

export const Component = (props: IconsLightbulbOutlineProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>lightbulb_outline</Default>;
};

export default {
  Component,
};
