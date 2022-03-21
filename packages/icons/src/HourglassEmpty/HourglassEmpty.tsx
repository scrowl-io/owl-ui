import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsHourglassEmptyProps } from './HourglassEmpty.types';

export const Component = (props: IconsHourglassEmptyProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>hourglass_empty</Default>;
};

export default {
  Component,
};
