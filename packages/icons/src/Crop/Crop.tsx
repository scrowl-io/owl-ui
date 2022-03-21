import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsCropProps } from './Crop.types';

export const Component = (props: IconsCropProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>crop</Default>;
};

export default {
  Component,
};
