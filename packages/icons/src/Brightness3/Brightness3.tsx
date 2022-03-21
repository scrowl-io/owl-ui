import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsBrightness3Props } from './Brightness3.types';

export const Component = (props: IconsBrightness3Props) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>brightness_3</Default>;
};

export default {
  Component,
};
