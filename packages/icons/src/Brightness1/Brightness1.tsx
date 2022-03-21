import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsBrightness1Props } from './Brightness1.types';

export const Component = (props: IconsBrightness1Props) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>brightness_1</Default>;
};

export default {
  Component,
};
