import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsExposureZeroProps } from './ExposureZero.types';

export const Component = (props: IconsExposureZeroProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>exposure_zero</Default>;
};

export default {
  Component,
};
