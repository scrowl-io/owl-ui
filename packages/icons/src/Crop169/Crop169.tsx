import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsCrop169Props } from './Crop169.types';

export const Component = (props: IconsCrop169Props) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>crop_16_9</Default>;
};

export default {
  Component,
};
