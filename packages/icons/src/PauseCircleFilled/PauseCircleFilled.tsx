import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsPauseCircleFilledProps } from './PauseCircleFilled.types';

export const Component = (props: IconsPauseCircleFilledProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>pause_circle_filled</Default>;
};

export default {
  Component,
};
