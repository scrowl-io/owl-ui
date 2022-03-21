import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsFilterTiltShiftProps } from './FilterTiltShift.types';

export const Component = (props: IconsFilterTiltShiftProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>filter_tilt_shift</Default>;
};

export default {
  Component,
};
