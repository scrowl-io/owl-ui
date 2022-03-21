import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsPauseCircleOutlineProps } from './PauseCircleOutline.types';

export const Component = (props: IconsPauseCircleOutlineProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>pause_circle_outline</Default>;
};

export default {
  Component,
};
