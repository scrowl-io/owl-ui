import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsBrightness2Props } from './Brightness2.types';

export const Component = (props: IconsBrightness2Props) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>brightness_2</Default>;
};

export default {
  Component,
};
