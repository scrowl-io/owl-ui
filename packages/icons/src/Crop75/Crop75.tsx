import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsCrop75Props } from './Crop75.types';

export const Component = (props: IconsCrop75Props) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>crop_7_5</Default>;
};

export default {
  Component,
};
