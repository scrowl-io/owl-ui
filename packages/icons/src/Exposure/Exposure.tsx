import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsExposureProps } from './Exposure.types';

export const Component = (props: IconsExposureProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>exposure</Default>;
};

export default {
  Component,
};
