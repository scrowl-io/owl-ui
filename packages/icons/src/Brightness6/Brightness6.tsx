import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsBrightness6Props } from './Brightness6.types';

export const Component = (props: IconsBrightness6Props) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>brightness_6</Default>;
};

export default {
  Component,
};
