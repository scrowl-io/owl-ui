import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsHighQualityProps } from './HighQuality.types';

export const Component = (props: IconsHighQualityProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>high_quality</Default>;
};

export default {
  Component,
};
