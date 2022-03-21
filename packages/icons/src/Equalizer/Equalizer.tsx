import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsEqualizerProps } from './Equalizer.types';

export const Component = (props: IconsEqualizerProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>equalizer</Default>;
};

export default {
  Component,
};
