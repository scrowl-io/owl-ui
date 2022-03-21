import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsBrightness7Props } from './Brightness7.types';

export const Component = (props: IconsBrightness7Props) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>brightness_7</Default>;
};

export default {
  Component,
};
