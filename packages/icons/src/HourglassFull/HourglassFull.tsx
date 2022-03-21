import * as React from 'react';
import { Component as Default } from '../Default/Default';
import { IconsHourglassFullProps } from './HourglassFull.types';

export const Component = (props: IconsHourglassFullProps) => {
  const localProps = Object.assign({}, props);

  return <Default {...localProps}>hourglass_full</Default>;
};

export default {
  Component,
};
