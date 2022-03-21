import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsSwitchVideoProps } from './SwitchVideo.types';

export const Component = (props: IconsSwitchVideoProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>switch_video</Default>;
};

export default {
  Component,
};
