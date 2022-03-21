import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsBrightness4Props } from './Brightness4.types';

export const Component = (props: IconsBrightness4Props) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>brightness_4</Default>;
};

export default {
  Component,
};
