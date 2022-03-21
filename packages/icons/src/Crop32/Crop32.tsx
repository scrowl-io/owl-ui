import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsCrop32Props } from './Crop32.types';

export const Component = (props: IconsCrop32Props) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>crop_3_2</Default>;
};

export default {
  Component,
};
