import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsExposureNeg1Props } from './ExposureNeg1.types';

export const Component = (props: IconsExposureNeg1Props) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>exposure_neg_1</Default>;
};

export default {
  Component,
};
