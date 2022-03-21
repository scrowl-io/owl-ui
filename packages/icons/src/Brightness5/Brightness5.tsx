import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsBrightness5Props } from './Brightness5.types';

export const Component = (props: IconsBrightness5Props) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>brightness_5</Default>;
};

export default {
  Component,
};
