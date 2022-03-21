import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsExposureNeg2Props } from './ExposureNeg2.types';

export const Component = (props: IconsExposureNeg2Props) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>exposure_neg_2</Default>;
};

export default {
  Component,
};
